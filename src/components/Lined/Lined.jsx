import styles from './Lined.module.css';

export default function Lined() {
  return (
    <div className={styles.lines}>
        <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
  )
}