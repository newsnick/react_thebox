import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import styles from '../../styles/Projects/Projects.module.scss'

const Projects = () => {
  return (
    <div className={styles.projectscontainer}>
      <div className={styles.projectsmain}>
        <div className={styles.sidebar}>
          <p>Projects</p>
          <SideBar />
        </div>
        <div className={styles.projectsbox}>
          <div className={styles.project1}></div>
        </div>
      </div>
    </div>
  )
}

export default Projects
