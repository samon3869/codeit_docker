import styles from './Button.module.css';

export default function Button({ className = '', ...props }) {
  const classNames = `${styles.button} ${className}`;
  return <button className={classNames} {...props} />;
}
