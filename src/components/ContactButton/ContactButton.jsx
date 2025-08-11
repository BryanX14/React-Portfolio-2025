import styles from './ContactButton.module.css'
import { Link } from 'react-router-dom'

export default function ContactButton() {
  return (
    <button className={styles.cButton}><Link to="/contact" className={styles.contactButton}>Contact Me</Link></button>
  )
}