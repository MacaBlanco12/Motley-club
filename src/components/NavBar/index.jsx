import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <Link to="/"><img src="/assets/logo.jpg" alt="Motley Club" className={styles.logo} /></Link>

        <nav className={styles.nav}>
          <ul>
            <li><Link to="/category/hamburguesas">Hamburguesas</Link></li>
            <li><Link to="/category/papas">Papas</Link></li>
            <li><Link to="/category/kids">Kids</Link></li>
            <li><Link to="/category/parapicar">Picoteo</Link></li>
          </ul>
        </nav>

        <CartWidget />
      </div>
    </header>
  )
}

export default NavBar;
