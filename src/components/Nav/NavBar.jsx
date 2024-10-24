import styles from "./Navbar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <div>
        Профіль
      </div>
      <div>
        Повідомлення
      </div>
      <div>
        Новини
      </div>
      <div>
        Музика
      </div>
      <div>
        Налаштування
      </div>
    </nav>
  );
}