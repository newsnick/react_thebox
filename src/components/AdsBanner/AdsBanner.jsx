import React from 'react'
import styles from '../../styles/AdsBanner/AdsBanner.module.scss'
import banner from '../../assets/browser/images/banner.svg'

const AdsBanner = () => {
  return (
    <div>
      <img className={styles.banner} src={banner} alt="banner" />
    </div>
  )
}

export default AdsBanner
