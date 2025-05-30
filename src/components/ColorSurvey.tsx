import styles from './ColorSurvey.module.css';
import {Item} from "@/lib/types";

export default function ColorSurvey({ value, onClick }: {value: Item, onClick: () => {}}) {
  return (
    <div className={styles.colorSurvey} onClick={onClick}>
      <div className={styles.id}>{value.id}</div>
      <div className={styles.mbti}>{value.mbti}</div>
      <div className={styles.arrow}>
        <img className={styles.arrowIcon} src="/images/arrow.svg" alt="arrow" />
      </div>
      <div
        className={styles.colorChip}
        style={{
          backgroundColor: value.colorCode,
        }}
      ></div>
      <div className={styles.colorCode}>{value.colorCode}</div>
    </div>
  );
}
