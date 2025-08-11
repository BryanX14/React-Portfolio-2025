import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";
import contactImage from "../../assets/images/Projects/contactImg.svg"
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.conContainer}>
        {/* Left side */}
        <div className={styles.leftContact}>
          <img src={contactImage} alt="Profile" className={styles.contactImage} />
          <p>If you'd like to work together or just want to say hi, feel free to reach out below!</p>
        </div>

        {/* Right side */}
        <div className={styles.rightContact}>
          <a href="mailto:info@bryangreig" className={styles.card}>Email <FaEnvelope /></a>
          <a href="tel:+17782461794" className={styles.card}>Call <FaPhone /></a>
          <a href="https://www.linkedin.com/in/your-handle" target="_blank" rel="noreferrer" className={styles.card}>LinkedIn <FaLinkedin /></a>
        </div>
      </div>
    </section>
  );
}
