import styles from './About.module.css'
import TechStack from '../../components/TechStack/TechStack'
import profileImg from '../../assets/images/Projects/profileBryan.png'
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section id="about" className={`section ${styles.aboutSection}`}>
      <div className={styles.fixedProfile}>
         <img src={profileImg} alt="Bryan Greig" /> 
      </div>

      <div className={styles.aboutContent}>
        <h2>About Me</h2>

        <p>Hey, I’m Bryan Greig, a Front-End Web Developer who’s passionate about creating clean, responsive, and accessible websites. I discovered web development while traveling in 2019, and it quickly turned into a creative outlet and career path. Since then, I’ve been dedicated to building user-friendly digital experiences that not only look good but perform well across all devices. Whether it’s designing UI components, writing semantic HTML, or optimizing for performance, I love bringing ideas to life in the browser.</p>

        <h3>Tech Stack</h3>
        <TechStack />

        <h3>Tools I Use</h3>
        <p>I code primarily in VS Code, where I’ve customized my workflow with helpful extensions and keyboard shortcuts to stay efficient. I use Git and GitHub for version control and collaboration, and I rely on Figma to design and refine UI layouts before development. These tools help me move quickly from concept to code while keeping projects organized and easy to maintain.</p>

        <h3>Currently Learning</h3>
        <p>I'm diving deeper into React Native to broaden my skills beyond the browser and build mobile apps that feel fast and intuitive. I'm especially interested in creating consistent user experiences across platforms and exploring how performance, accessibility, and design translate to mobile development.</p>

        <h3>Outside of Code</h3>
        <p>When I’m not coding, you’ll usually find me on the golf course — it’s my way to unwind, stay active, and challenge myself in a totally different way. I’m also big on family time and make it a priority to stay connected with the people who matter most. Outside of that, I run a local MeetUp group called Bored & Socially Stressed, where we host casual get-togethers for people looking to break out of their routine, meet new faces, and have a few laughs. Whether it’s golf, community, or code, I’m always looking to grow and connect.</p>

        <p className={styles.aboutCta}>
          Want to see what I’ve built? <Link to="/projects" className={styles.links}>Check out my projects</Link> or <Link to="/contact" className={styles.links}>get in touch</Link>.
        </p>
      </div>
    </section>
  )
}
