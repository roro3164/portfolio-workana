import React from "react";
import Image from "next/image";
import styles from "./main.module.scss";
import { useTranslation } from "react-i18next";

interface ContactButtonProps {
  title?: string;
  className?: string;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
  icon?: string;      // Chemin de l'image/icône à utiliser
  emoji?: string;     // Option pour utiliser un emoji au lieu d'une image
  iconAlt?: string;   // Texte alternatif pour l'icône
  iconWidth?: number; // Largeur de l'icône
  iconHeight?: number;// Hauteur de l'icône
}

const ContactButton: React.FC<ContactButtonProps> = ({
  title = "button.contact",
  className = "",
  onHoverStart,
  onHoverEnd,
  icon = "/image/icons/contactMe.svg",
  emoji = "",
  iconAlt = "icon",
  iconWidth = 24,
  iconHeight = 24,
}) => {
  const { t } = useTranslation();

  return (
    <button
      className={`${styles.contact_btn} ${className}`}
      onClick={(e) => e.currentTarget.blur()}    // enlève l’état actif/hover après clic
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
    >
      <span
        className={`${styles.text} font-bold text-[#6a5acd] z-[1] whitespace-normal font-jakarta`}
      >
        {t(title)}
      </span>

      {emoji ? (
        <span
          className={styles.emoji_icon}
          style={{ fontSize: `${iconWidth}px` }}
        >
          {emoji}
        </span>
      ) : (
        <Image
          src={icon}
          alt={iconAlt}
          width={iconWidth}
          height={iconHeight}
          className={styles.icon}
        />
      )}
    </button>
  );
};

export default ContactButton;
