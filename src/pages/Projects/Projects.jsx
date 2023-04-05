/* import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import styles from '../../styles/Projects/Projects.module.scss'
import ArtworksList from '../../components/ArtworksList/ArtworksList'
import FetchApiData from '../../components/FetchApiData/FetchApiData'

const Projects = () => {
  return (
    <div className={styles.projectsmain} id="projects">
      <div className={styles.projectscontainer}>
        <div className={styles.projectbox}>
          <div className={styles.sidebar}>
            <p>Projects</p>
            <SideBar />
            <FetchApiData apiUrl="https://api.artic.edu/api/v1/artworks?limit=100" />
          </div>

          <div className={styles.project}>
            <ArtworksList />
            <div className={styles.project1}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects */
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchArtworks } from '../../Redux/reducer/artworkSlice'
import SideBar from '../../components/SideBar/SideBar'
import styles from '../../styles/Projects/Projects.module.scss'
import ArtworksList from '../../components/ArtworksList/ArtworksList'

const Projects = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchArtworks({ startIndex: 0, endIndex: 25 }))
    dispatch(fetchArtworks({ startIndex: 25, endIndex: 50 }))
    dispatch(fetchArtworks({ startIndex: 50, endIndex: 75 }))
    dispatch(fetchArtworks({ startIndex: 75, endIndex: 100 }))
  }, [dispatch])
  return (
    <div className={styles.projectsmain} id="projects">
      <div className={styles.projectscontainer}>
        <div className={styles.projectbox}>
          <div className={styles.sidebar}>
            <p>Projects</p>
            <SideBar />
            {/* <FetchApiData apiUrl="https://api.artic.edu/api/v1/artworks?limit=100" /> */}
          </div>

          <div className={styles.project}>
            <ArtworksList />
            <div className={styles.project1}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
