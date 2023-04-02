import styles from '../../styles/NavBar/NavBar.module.scss'

import logo from '../../assets/browser/images/logothebox.svg'
import { HashLink as Link } from 'react-router-hash-link'

export default function NavBar() {
  return (
    <nav className={styles.navbar} id="/">
      <div className={styles.navleft}>
        <Link to="#/">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="#/">
          <p className={styles.logoname}>
            <span className={styles.italic}>The</span>Box
          </p>
        </Link>
      </div>

      <ul>
        <li>
          <Link to="#/" smooth>
            Home
          </Link>
        </li>
        <li>
          <Link to="#about" smooth>
            About Us
          </Link>
        </li>
        <li>
          <Link to="#projects" smooth>
            Projects
          </Link>
        </li>
        <li>
          <Link to="#services" smooth>
            Services
          </Link>
        </li>
        <li className={styles.lastchild}>
          <Link to="#contact" smooth>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  )
}
