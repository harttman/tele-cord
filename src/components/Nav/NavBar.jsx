import styles from "./Navbar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <div>
        <a href="/profile">Профіль</a>
      </div>
      <div>
        <a href="/dialogs">Діалоги</a>
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