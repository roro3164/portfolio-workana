import styles from './styles/card.module.scss';

export const FormCard = () => (
    <div className={styles.glassContact}>
      <input type="text" className={styles.internBoxContact} placeholder="Votre prénom" />
      <input type="text" className={styles.internBoxContact} placeholder="Votre nom" />
      <textarea className={styles.internBoxContact} placeholder="Votre message"></textarea>
      <button className={styles.submitButton}>Envoyer</button>
    </div>
  );