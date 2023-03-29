import styles from '../../styles/NavBar/NavBar.module.scss'

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Projects</li>
        <li>Services</li>
        <li className={styles.lastchild}>Contact Us</li>
      </ul>
    </div>
  )
}

export default NavBar
