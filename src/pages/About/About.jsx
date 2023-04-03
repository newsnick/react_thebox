import React from 'react'
import styles from '../../styles/About/About.module.scss'
import aboutimg from '../../assets/browser/images/aboutus.svg'

const About = () => {
  return (
    <div className={styles.aboutcontainer} id="about">
      <img src={aboutimg} alt="aboutus" className={styles.aboutimg} />
      <div className={styles.aboutbox}>
        <div className={styles.contentbox}>
          <p className={styles.header}>About us</p>
          <p className={styles.text}>
            For more than 30 years we have been delivering world-class
            construction and we’ve built many lasting relationships along the
            way. <br /> <br /> We’ve matured into an industry leader and trusted
            resource for those seeking quality, innovation and reliability when
            building in the U.S.
          </p>
          <button className={styles.btn}>more on our history</button>
        </div>
      </div>
    </div>
  )
}

export default About
