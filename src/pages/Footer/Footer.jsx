import React from 'react'
import styles from '../../styles/Footer/Footer.module.scss'
import { HashLink as Link } from 'react-router-hash-link'
import logo from '../../assets/browser/images/logothebox.svg'
import EmailSubmit from '../../components/EmailSubmit/EmailSubmit'
import facebook from '../../assets/browser/icons/vectorfb.svg'
import instagram from '../../assets/browser/icons/vectorinsta.svg'
import twitter from '../../assets/browser/icons/vectortwitter.svg'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.connectfooter}>
        <div className={styles.leftfooter}>
          <p className={styles.values}>
            <span className={styles.name1}>ADDRESS:</span> 6391 Elgin St.
            Celina, Delaware 10299
          </p>
          <p className={styles.values}>
            <span className={styles.name2}>PHONE:</span> +84 1102 2703
          </p>
          <p className={styles.values}>
            <span className={styles.name3}>EMAIL:</span> hello@thebox.com
          </p>
          <div className={styles.logo}>
            <Link to="#/" smooth>
              <img src={logo} alt="logo" />
            </Link>
            <Link to="#/" smooth>
              <p className={styles.logoname}>
                <span className={styles.italic}>The</span>Box
              </p>
            </Link>
          </div>
        </div>
        <div className={styles.rightfooter}>
          <p className={styles.name4}>NEWSLETTER:</p>
          <EmailSubmit />
          <p className={styles.name5}>SOCIAL:</p>
          <div className={styles.vectors}>
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={twitter} alt="twitter" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
