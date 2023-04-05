import React from 'react'
import styles from '../../styles/RefSummary/RefSummary.module.scss'

const RefSummary = () => {
  return (
    <div className={styles.refsummary}>
      <p className={styles.header}>30 Years Experience</p>
      <p className={styles.content}>
        Our company has been the leading provided construction services to
        clients throughout the USA since 1988.
      </p>
      <button className={styles.refbutton}>Contact Us</button>
    </div>
  )
}

export default RefSummary
