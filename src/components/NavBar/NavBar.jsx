import styles from '../../styles/NavBar/NavBar.module.scss'
import logo from '../../assets/browser/images/logothebox.svg'

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navleft}>
        <img src={logo} alt="logo" />
        <p className={styles.logoname}>
          <span className={styles.italic}>The</span>Box
        </p>
      </div>

      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Projects</li>
        <li>Services</li>
        <li className={styles.lastchild}>Contact Us</li>
      </ul>
    </nav>
  )
}

export default NavBar
