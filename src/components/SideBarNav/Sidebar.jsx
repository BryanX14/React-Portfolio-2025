import { useState } from "react";
import { FaBars, FaTimes, FaHome, FaUser, FaBriefcase, FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";


export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const getLinkClass = ({ isActive }) =>
    `${styles.link} ${isActive ? styles.active : ""}`;

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button className={styles.hamburger} onClick={toggleSidebar} aria-label="Toggle menu">
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar Drawer */}
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <div className={styles.sidebarTop}>
            <h2 className={styles.logo}>BG<span className={styles.logoDot}>.</span></h2>
          </div>
        <div className={styles.sidebarContent}>
          <nav className={styles.sidebarNav}>
            <ul>
              <li>
                <NavLink to="/" end className={getLinkClass} onClick={toggleSidebar}>
                  <FaHome /> Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={getLinkClass} onClick={toggleSidebar}>
                  <FaUser /> About
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className={getLinkClass} onClick={toggleSidebar}>
                  <FaBriefcase /> Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={getLinkClass} onClick={toggleSidebar}>
                  <FaEnvelope /> Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <div className={styles.hiddenSocial}>
      <ul className={styles.mobileSocials}>
        <li>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </li>
      </ul>
      </div>

        <footer className={styles.sidebarFooter}>
          <p>© {new Date().getFullYear()} Built by Bryan Greig</p>
        </footer>
        </div>
      </aside>
    </>
  );
}
