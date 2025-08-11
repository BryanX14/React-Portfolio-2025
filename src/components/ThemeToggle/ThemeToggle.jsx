// src/components/ThemeToggle.jsx
import { FaSun, FaMoon } from 'react-icons/fa';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button className={styles.themeToggleFloating} onClick={toggleTheme}>
      {theme === 'light' ? <FaMoon /> : <FaSun />}
    </button>
  )
}