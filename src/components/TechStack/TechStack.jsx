
import styles from './TechStack.module.css'
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiVite
} from "react-icons/si";

const techStack = [
  { name: "React", icon: <SiReact /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "Vite", icon: <SiVite /> }
];

export default function TechStack({ className = ''}) {
  return (
    <ul className={`${styles.techStack} ${className}`}>
      {techStack.map((tech) => (
        <li key={tech.name} title={tech.name}>
          {tech.icon}
        </li>
      ))}
    </ul>
  )
}
