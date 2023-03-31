import React from 'react'
import styles from '../../styles/SideBar/SideBar.module.scss'

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <ol>
        <li>All</li>
        <li>Commercial</li>
        <li>Presidential</li>
        <li>Other</li>
      </ol>
    </div>
  )
}

export default SideBar
