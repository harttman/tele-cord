import styles from "../styles/Header.module.css";
import logo from "../assets/logo.jpg";

export default function Header() {
  return (
    <div className={styles.header}>
      <img src={logo} alt="not Found" />
      <div className={`${styles.header} ${styles.content}`}>
        <s>! TeleCord !</s>
      </div>
    </div>
  );
}