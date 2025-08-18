import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";
import styles from "./Contact.module.css";
import contactImg from "../../assets/images/Projects/contactImg.svg"

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.conContainer}>
        <div className={styles.leftContact}>
          <img src={contactImg} alt="Profile" className={styles.contactImage} />
          <p>If you&apos;d like to work together or just want to say hi, feel free to reach out!</p>
        </div>

        <div className={styles.rightContact}>
          <a href="mailto:info@bryangreig.com" className={styles.card}>Email<FaEnvelope /></a>
          <a href="tel:+17782461794" className={styles.card}>Call<FaPhone /></a>
          <a href="https://www.linkedin.com/in/bryangreig" target="_blank" rel="noreferrer" className={styles.card}>LinkedIn<FaLinkedin /></a>
        </div>
      </div>
    </section>
  );
}
