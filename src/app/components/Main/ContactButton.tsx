import React from 'react';
import Image from 'next/image'; // <-- Import du composant Image
import styles from './main.module.scss';
import { useTranslation } from "react-i18next";

const ContactButton = () => {
  const { t } = useTranslation();
  return (
    <button className={styles.contact_btn}>
      <span className={styles.text}>{t("contactme.title")}</span>
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
