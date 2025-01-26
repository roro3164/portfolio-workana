import styles from './styles/card.module.scss';
import { CardServiceProps } from './types';
import { CircleListItem } from './CircleListItem';


export const ServiceCard = ({ title, description, listItems }: CardServiceProps) => (
        <div className={styles.glassCard}>
            <div className={styles.boxCard}>
                <div className={styles.titleBoxService}>
                  <h3>{title}</h3>
                </div>
            </div>
          
            <div className={styles.mainCardService}>
              <div className={styles.internBoxService}>
                <p className={styles.content}>{description}</p>
              </div>

              <div className="flex flex-col gap-2">
                {listItems.map((item, index) => (
                  <CircleListItem key={index} text={item} />
                ))}
              </div>
            </div>
          </div>

  );