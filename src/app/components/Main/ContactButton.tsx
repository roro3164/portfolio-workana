import React from 'react';
import Image from 'next/image';
import styles from './main.module.scss';
import { useTranslation } from "react-i18next";

interface ContactButtonProps {
  title?: string;
  className?: string;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

const ContactButton: React.FC<ContactButtonProps> = ({ 
  title = "contactme.title",
  className = "",
  onHoverStart, 
  onHoverEnd 
}) => {
  const { t } = useTranslation();
  
  return (
    <button 
      className={`${styles.contact_btn} ${className}`}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
    >
      <span className={styles.text}>{t(title)}</span>
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