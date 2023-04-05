import React from 'react'
import styles from '../../styles/AdsBanner/AdsBanner.module.scss'
import banner from '../../assets/browser/images/banner.svg'
import BannerBox from '../BannerBox/BannerBox'

const AdsBanner = () => {
  return (
    <div>
      <img className={styles.banner} src={banner} alt="banner" />
      <BannerBox />
    </div>
  )
}

export default AdsBanner
