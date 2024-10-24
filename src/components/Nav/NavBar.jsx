import styles from "./Navbar.module.css";
import { Outlet, Link } from "react-router-dom";

export default function NavBar() {
  return (
  <>
    <nav className={styles.nav}>
      <div>
        <Link to="/dialogs">Профіль</Link>
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
    <Outlet />
  </>
  );
}