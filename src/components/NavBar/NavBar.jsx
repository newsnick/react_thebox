import styles from '../../styles/NavBar/NavBar.module.scss'
import logo from '../../assets/browser/images/logothebox.svg'
import { HashLink as Link } from 'react-router-hash-link'
import { links } from '../../utils'

const NavBar = () => (
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
      {links.map(({ label, to, className }) => (
        <li key={to} className={className}>
          <Link to={to} smooth>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)

export default NavBar
