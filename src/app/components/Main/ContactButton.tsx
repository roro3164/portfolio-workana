import React from "react";
import Image from "next/image";
import styles from "./main.module.scss";
import { useTranslation } from "react-i18next";

interface ContactButtonProps {
  title?: string;
  className?: string;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
  icon?: string;
  emoji?: string;
  iconAlt?: string;
  iconWidth?: number;
  iconHeight?: number;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
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

  // Blur button after a short delay to ensure active styles are cleared on mobile
  const blurDelayed = (button: HTMLButtonElement) => {
    setTimeout(() => button.blur(), 50);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    blurDelayed(e.currentTarget);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLButtonElement>) => {
    blurDelayed(e.currentTarget);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    // ensure immediate blur for pointer interactions
    e.currentTarget.blur();
  };

  return (
    <button
      className={`${styles.contact_btn} ${className}`}
      onClick={handleClick}
      onTouchEnd={handleTouchEnd}
      onPointerDown={handlePointerDown}
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
