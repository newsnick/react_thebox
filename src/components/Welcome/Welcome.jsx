import React from 'react'
import styles from '../../styles/Welcome/Welcome.module.scss'
import bgimage from '../../assets/browser/images/bgimage.svg'
import ArtworksTitles from '../ArtworksTitles/ArtworksTitles'

const Welcome = () => {
  return (
    <>
      <div className={styles.headermain}>
        <p className={styles.header}>
          Building things <br /> is our mission.
        </p>
      </div>

      <img className={styles.bgimage} src={bgimage} alt="" />
      <div className={styles.artworkcontainer}>
        <div className={styles.artworkstitle}>
          {' '}
          <ArtworksTitles />
        </div>
      </div>
    </>
  )
}

export default Welcome
