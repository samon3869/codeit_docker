import styles from './ColorInput.module.css';
import {ChangeEvent} from "react";

function isValidColorCode(value: string) {
  return /^#[a-f0-9]{6}$/i.test(value);
}

export default function ColorInput({ value, onChange }: { value: string, onChange: (newColorCode: string) => void }) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value);
  }

  function handleBlur() {
    if (!isValidColorCode(value)) {
      onChange('#000000');
    }
  }

  return (
    <div className={styles.colorInput}>
      <input
        className={styles.input}
        value={value}
        maxLength={7}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {isValidColorCode(value) && (
        <span
          className={styles.chip}
          style={{
            backgroundColor: value,
          }}
        ></span>
      )}
    </div>
  );
}
