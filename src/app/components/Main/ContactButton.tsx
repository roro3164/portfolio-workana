import React from 'react';
import styles from './main.module.scss';


const ContactButton = () => {
  return (
    <button className={styles.contact_btn}>
      <span className={styles.text}>Contact Me</span>
      <img src='/image/icons/contactMe.svg' alt="mail icon" className={styles.mail_icon} />
    </button>
  );
};

export default ContactButton;