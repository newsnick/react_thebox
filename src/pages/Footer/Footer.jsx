import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import EmailSubmit from '../../components/EmailSubmit/EmailSubmit'
import styles from '../../styles/Footer/Footer.module.scss'
import logo from '../../assets/browser/images/logothebox.svg'
import { address, socialIcons } from '../../utils'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.connectfooter}>
        <div className={styles.leftfooter}>
          {address.map((item, index) => (
            <p key={index} className={item.className}>
              <span className={styles[item.name]}>{item.name}</span>{' '}
              {item.value}
            </p>
          ))}
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
          <p className={styles.newsletter}>NEWSLETTER:</p>
          <EmailSubmit />
          <p className={styles.social}>SOCIAL:</p>
          <div className={styles.vectors}>
            {socialIcons.map((item, index) => (
              <img
                key={index}
                src={item.src}
                alt={item.alt}
                className={item.className}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
