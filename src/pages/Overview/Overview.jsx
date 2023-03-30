import React from 'react'
import styles from '../../styles/Overview/Overview.module.scss'
import AssetsBox from '../../components/AssetsBox/AssetsBox'

const Overview = () => {
  return (
    <div className={styles.overviewcontainer}>
      <div className={styles.upperoverview}>
        <p className={styles.title}>Our Reputation</p>
      </div>
      <AssetsBox />
    </div>
  )
}

export default Overview
