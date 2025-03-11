import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

console.log('SMTP_HOST:', process.env.SMTP_HOST);
console.log('SMTP_PORT:', process.env.SMTP_PORT);
console.log('SMTP_SECURE:', process.env.SMTP_SECURE);

export async function POST(request: Request) {
  try {
    // On récupère les champs envoyés par le formulaire
    const { firstName, lastName, email, message } = await request.json();

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

    // Contenu de l'e-mail
    const mailOptions = {
      from: process.env.CONTACT_EMAIL, // Adresse d'envoi
      to: process.env.CONTACT_EMAIL,   // Adresse de réception (peut être la même ou différente)
      subject: `Nouveau message de ${firstName} ${lastName}`,
      text: message, // version texte
      html: `
        <p><strong>De :</strong> ${firstName} ${lastName} (<em>${email}</em>)</p>
        <p>${message}</p>
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
