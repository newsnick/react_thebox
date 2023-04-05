import React from 'react'
import styles from '../../styles/BannerBox/BannerBox.module.scss'

const BannerBox = () => {
  return (
    <div className={styles.bannerbox}>
      <div className={styles.bannercontent}>
        <p className={styles.title}>
          Free consultation with exceptional quality
        </p>
        <p className={styles.text}>Just one call away: +84 1102 2703</p>
      </div>
      <button className={styles.refbutton}>Get your consultation</button>
    </div>
  )
}

export default BannerBox
