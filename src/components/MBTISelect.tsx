import styles from './MBTISelect.module.css';
import {MouseEventHandler} from "react";

type OptionGroup = {value: string, label: string}[]

const optionGroups: OptionGroup[] = [
  [
    { value: 'E', label: '외향형' },
    { value: 'I', label: '내향형' },
  ],
  [
    { value: 'S', label: '감각형' },
    { value: 'N', label: '직관형' },
  ],
  [
    { value: 'T', label: '사고형' },
    { value: 'F', label: '감정형' },
  ],
  [
    { value: 'J', label: '판단형' },
    { value: 'P', label: '인식형' },
  ],
];

function MBTIOption({ selected, label, value, onClick }: {selected: boolean, label: string, value: string, onClick: MouseEventHandler}) {
  const classNames = `${styles.mbtiOption} ${selected ? styles.selected : ''}`;

  return (
    <div className={classNames} onClick={onClick}>
      <span className={styles.char}>{value}</span>
      {label}
    </div>
  );
}

function MBTIOptionGroup({ options, value, onChange }: {options: OptionGroup, value: string, onChange: (value: string) => {}}) {
  return (
    <div className={styles.mbtiOptionGroup}>
      {options.map((option) => (
        <MBTIOption
          key={option.value}
          selected={option.value === value}
          label={option.label}
          value={option.value}
          onClick={() => onChange(option.value)}
        />
      ))}
    </div>
  );
}

export default function MBTISelect({ value = 'ESTJ', onChange }: {value: string, onChange: (value: string) => {}}) {
  function handleChangeAt(val: string, position: number) {
    const nextValue =
      value.slice(0, position) + val + value.slice(position + 1);
    onChange(nextValue);
  }

  return (
    <div>
      {optionGroups.map((options, index) => (
        <MBTIOptionGroup
          key={`${options[0].value}-${options[1].value}`}
          value={value[index]}
          options={options}
          onChange={async (val: string) => handleChangeAt(val, index)}
        />
      ))}
    </div>
  );
}
