import React from 'react'
import styles from '../../styles/Welcome/Welcome.module.scss'
import bgimage from '../../assets/browser/images/bgimage.svg'

const Welcome = () => {
  return (
    <div>
      <img className={styles.bgimage} src={bgimage} alt="" />
    </div>
  )
}

export default Welcome
