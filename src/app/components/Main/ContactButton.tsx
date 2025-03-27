import React from 'react';
import Image from 'next/image';
import styles from './main.module.scss';
import { useTranslation } from "react-i18next";

interface ContactButtonProps {
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

const ContactButton: React.FC<ContactButtonProps> = ({ 
  onHoverStart, 
  onHoverEnd 
}) => {
  const { t } = useTranslation();
  
  return (
    <button 
      className={styles.contact_btn}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
    >
      <span className={styles.text}>{t("contactme.title")}</span>
      <Image
        src="/image/icons/contactMe.svg"
        alt="mail icon"
        width={24}
        height={24}
        className={styles.mail_icon}
      />
    </button>
  );
};

export default ContactButton;