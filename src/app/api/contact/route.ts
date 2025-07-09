import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

console.log('SMTP_HOST:', process.env.SMTP_HOST);
console.log('SMTP_PORT:', process.env.SMTP_PORT);
console.log('SMTP_SECURE:', process.env.SMTP_SECURE);

export async function POST(request: Request) {
  try {
    // ✅ AJOUT du champ phone
    const { firstName, lastName, company, email, phone, message } = await request.json();

    // Configuration Nodemailer
    // On utilise les variables d'environnement
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,                         // ex: "smtp.gmail.com"
      port: parseInt(process.env.SMTP_PORT ?? '587', 10),   // ex: 587
      secure: process.env.SMTP_SECURE === 'true',           // ex: false si "false"
      auth: {
        user: process.env.CONTACT_EMAIL,    // ex: "monadresse@gmail.com"
        pass: process.env.EMAIL_PASSWORD,   // ex: "motdepasseOuAppPassword"
      },
    });

    // ✅ Contenu de l'e-mail avec company et phone
    const mailOptions = {
      from: process.env.CONTACT_EMAIL, // Adresse d'envoi
      to: process.env.CONTACT_EMAIL,   // Adresse de réception (peut être la même ou différente)
      subject: `Nouveau message de ${firstName} ${lastName}${company ? ` - ${company}` : ''}`,
      text: `
Nom: ${firstName} ${lastName}
${company ? `Entreprise: ${company}` : ''}
Email: ${email}
${phone ? `Téléphone: ${phone}` : ''}

Message:
${message}
      `, // version texte
      html: `
        <h3>Nouveau message de contact</h3>
        <p><strong>Nom :</strong> ${firstName} ${lastName}</p>
        ${company ? `<p><strong>Entreprise :</strong> ${company}</p>` : ''}
        <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
        ${phone ? `<p><strong>Téléphone :</strong> <a href="tel:${phone}">${phone}</a></p>` : ''}
        <br>
        <p><strong>Message :</strong></p>
        <p style="background: #f5f5f5; padding: 15px; border-radius: 5px;">${message}</p>
      `,
    };

    // Envoi de l'e-mail
    await transporter.sendMail(mailOptions);

    // Réponse si tout s'est bien passé
    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in contact API:', error);

    // Réponse en cas d'erreur
    return NextResponse.json(
      { error: 'Error sending message' },
      { status: 500 }
    );
  }
}