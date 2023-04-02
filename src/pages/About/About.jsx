import React from 'react'
import styles from '../../styles/About/About.module.scss'
import aboutimg from '../../assets/browser/images/aboutus.svg'

const About = () => {
  return (
    <div className={styles.aboutcontainer} id="about">
      <img src={aboutimg} alt="aboutus" className={styles.aboutimg} />
    </div>
  )
}

export default About
