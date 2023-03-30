import React from 'react'
import styles from '../../styles/AssetsBox/AssetsBox.module.scss'
import headset from '../../assets/browser/icons/vectorheadset.svg'
import toolset from '../../assets/browser/icons/vectortoolset.svg'

const AssetsBox = () => {
  return (
    <div className={styles.assetsbox}>
      <div className={styles.box1}>
        <img src={headset} alt="headset" />
        <p className={styles.header}>Best Services</p>
        <p className={styles.para}>
          Nullam senectus porttitor in eget. Eget rutrum leo interdum.
        </p>
      </div>
      <div className={styles.box2}>
        <img src={headset} alt="headset" />
        <p className={styles.header}>Best Teams</p>
        <p className={styles.para}>
          Cursus semper tellus volutpat aliquet lacus.
        </p>
      </div>
      <div className={styles.box3}>
        <img src={toolset} alt="toolset" />
        <p className={styles.header}>Best Designs</p>
        <p className={styles.para}>
          Ultricies at ipsum nunc, tristique nam lectus.
        </p>
      </div>
    </div>
  )
}

export default AssetsBox
