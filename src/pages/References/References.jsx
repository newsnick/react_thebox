import React from 'react'
import ReferenceBox from '../../components/ReferenceBox/ReferenceBox'
import styles from '../../styles/References/References.module.css'
import iconcup from '../../assets/browser/icons/iconcup.svg'
import icondocument from '../../assets/browser/icons/icondocument.svg'
import iconmap from '../../assets/browser/icons/iconmap.svg'
import iconshakehands from '../../assets/browser/icons/iconshakehands.svg'
import ReferenceIcon from '../../components/ReferenceIcon/ReferenceIcon'
import AdsBanner from '../../components/AdsBanner/AdsBanner'

const References = () => {
  return (
    <div className={styles.refcontainer}>
      References
      <div className={styles.refbox1}>
        <ReferenceBox content="123" content2="Projects Completed" />
      </div>
      <div className={styles.refbox2}>
        <ReferenceBox content="30" content2="Years in Business" />
      </div>
      <div className={styles.refbox3}>
        <ReferenceBox content="84" content2="Happy Clients" />{' '}
      </div>
      <div className={styles.refbox4}>
        <ReferenceBox content="37" content2="Awards Win" />
      </div>
      <div className={styles.iconcup}>
        <ReferenceIcon content={iconcup} content2="iconcup" />
      </div>
      <div className={styles.icondocument}>
        <ReferenceIcon content={icondocument} content2="icondocument" />
      </div>
      <div className={styles.iconshakehands}>
        <ReferenceIcon content={iconshakehands} content2="iconshakehands" />
      </div>
      <div className={styles.iconmap}>
        <ReferenceIcon content={iconmap} content2="iconmap" />
      </div>
      <div className={styles.adscontainer}>
        <AdsBanner />
      </div>
    </div>
  )
}

export default References
