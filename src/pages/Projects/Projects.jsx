import styles from '../../styles/Projects/Projects.module.scss'
import SidebarTwo from '../../components/SideBarTwo/SideBarTwo.jsx'

const Projects = () => {
  return (
    <div className={styles.projectsmain} id="projects">
      <div className={styles.projectscontainer}>
        <div className={styles.sidebar}>
          <p>Projects</p>
          <SidebarTwo />

          <div className={styles.project}>
            <div className={styles.project1}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
