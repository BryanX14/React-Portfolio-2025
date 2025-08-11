import styles from './Socials.module.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';


export default function Socials({ className = '' }) {
  return (
    <div className={`${styles.socials} ${className}`}>
      <a href="https://github.com/bryanX14" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://linkedin.com/in/bryangreig" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="mailto:info@bryangreig.com" aria-label="Email me" title="Email me">
        <FaEnvelope />
      </a>
  
    </div>
  );
}