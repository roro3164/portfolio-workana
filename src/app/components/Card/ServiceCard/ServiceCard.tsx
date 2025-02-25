import { ServiceCardProps } from "./types";
import styles from "./ServiceCard.module.scss";
import { CircleListItem } from "./CircleListItem";
import VioletHover from "../hover/VioletHover";

export const ServiceCard = ({
  title,
  description,
  listItems,
}: ServiceCardProps) => (
  <div className="  w-[30%] min-w-[316px] transition-transform duration-400 hover:scale-105">
    <VioletHover>
      <div className="bg-[#100E12] rounded-xl">
      <div
        className={`
    rounded-xl h-[500px] 
    ${styles.glassCard}
  `}
      >
        <div className="rounded-t-xl p-6 bg-white/5">
          <div
            className={`
        mx-auto text-center
        text-white text-xl font-jakarta font-semibold
        py-1 px-6 w-fit rounded-full
        ${styles.titleBox}
      `}
          >
            <h3>{title}</h3>
          </div>
        </div>

        <div className="p-6 flex flex-col gap-y-6">
          <div
            className={`
        rounded-xl p-6
        ${styles.internBox}
      `}
          >
            <p className="text-white text-xl">{description}</p>
          </div>

          <div className="flex flex-col gap-2">
            {listItems.map((item, index) => (
              <CircleListItem key={index} text={item} />
            ))}
          </div>
        </div>
      </div>
      </div>
      
    </VioletHover>
  </div>
);
