import { Link } from 'react-router-dom'
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.homeContainer}>

      <h1 className={styles.homeTitle}>Hi, I&apos;m Bryan Greig</h1>
      <h2 className={styles.homeSubtitle}>Web Developer</h2>

      <p className={styles.homeBlurb}>
        I craft clean, responsive, and accessible websites that not only look great but also feel intuitive to use. I enjoy bringing ideas to life in the browser using <strong>React</strong>, <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>, and I take pride in writing code that&apos;s both functional and maintainable. Whether it&apos;s building from scratch or refining existing designs, I&apos;m all about creating experiences that users enjoy and clients can rely on.      </p>
      

      <div className={styles.homeButtons}>
        <Link to="/projects" className={styles.homeProjectsBtn}>View Projects</Link>
        <Link to="/about" className={styles.homeContactBtn}>About Me</Link>
      </div>
    </div>
  )
}