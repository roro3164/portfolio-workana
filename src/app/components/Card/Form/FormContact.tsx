

import VioletHover from "../hover/VioletHover";
import styles from "./Form.module.scss";

export const FormCard = () => (
 <VioletHover>
    <div className="bg-[#100E12]">
      <div className={styles.glassContact}>
        <input
          type="text"
          className={styles.internBoxContact}
          placeholder="Votre prénom"
        />
        <input
          type="text"
          className={styles.internBoxContact}
          placeholder="Votre nom"
        />
        <textarea
          className={`${styles.internBoxContact} ${styles.message}`}
          placeholder="Votre message"
        ></textarea>
        <button className={styles.submitButton}>Send message</button>
      </div>
    </div>
  
 </VioletHover>
    
);
