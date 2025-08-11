import styles from "./Loader.module.css"

export default function Loader({ fadeOut }) {
  return (
    <div className={`${styles.loaderWrapper} ${fadeOut ? styles.fadeOut : ''}`}>
      <div className={styles.loaderLogo}>
        BG<span className={styles.dot}>.</span>
      </div>
    </div>
  )
}