import React from 'react';
import Image from 'next/image'; // <-- Import du composant Image
import styles from './main.module.scss';

const ContactButton = () => {
  return (
    <button className={styles.contact_btn}>
      <span className={styles.text}>Contact Me</span>
      <Image
        src="/image/icons/contactMe.svg"
        alt="mail icon"
        width={24}     // Ajuste ces valeurs selon tes besoins
        height={24}
        className={styles.mail_icon}
      />
    </button>
  );
};

export default ContactButton;
