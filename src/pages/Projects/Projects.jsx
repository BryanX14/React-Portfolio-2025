import styles from './Projects.module.css';
import topnotchImg from '../../assets/images/Projects/topnotchhomesolutions.png';
import reactPortfolio from "../../assets/images/Projects/reactPortfolio.png"


export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className={styles.projectList}>

        <div className={styles.projectCard}>
          <div className={styles.projectInfo}>
            <h3>TopNotch Home Solutions</h3>
            <p>Responsive multi-page business website for a home services company.</p>
            <ul className={styles.projectTags}>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <div className={styles.projectLinks}>
              <a href="https://topnotchhomesolutions.ca" target="_blank" rel="noopener noreferrer">Live Site</a>
              <a href="https://github.com/BryanX14" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
          <div className={styles.projectImageWrapper}>
            <img src={topnotchImg} alt="TopNotch Home Solutions" className={styles.projectImg} />
          </div>
        </div>

        <div className={styles.projectCard}>
          <div className={styles.projectInfo}>
            <h3>React Portfolio</h3>
            <p>My personal portfolio site featuring theme toggle, loader animation, and responsive layout.</p>
            <ul className={styles.projectTags}>
              <li>React</li>
              <li>CSS Modules</li>
              <li>Vite</li>
            </ul>
            <div className={styles.projectLinks}>
              <a href="https://bryangreig.com" target="_blank" rel="noopener noreferrer">Live Site</a>
              <a href="https://github.com/BryanX14/React-Portfolio-2025" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
          <div className={styles.projectImageWrapper}>
            <img src={reactPortfolio} alt="React Portfolio" className={styles.projectImg} />
          </div>
        </div>

       {/*  <div className={styles.projectCard}>
          <div className={styles.projectInfo}>
            <h3>Golf Weather App</h3>
            <p>Mobile weather app tailored for golfers using React Native and weather API.</p>
            <ul className={styles.projectTags}>
              <li>React Native</li>
              <li>Expo</li>
              <li>API Integration</li>
            </ul>
            <div className={styles.projectLinks}>
              <a href="https://github.com/yourusername/golf-weather-app" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
          <div className={styles.projectImageWrapper}>
            <img src={topnotchImg} alt="Golf Weather App" className={styles.projectImg} />
          </div>
        </div>
*/}
      </div>
    </section>
  );
}
