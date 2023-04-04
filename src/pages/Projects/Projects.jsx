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
import FetchArtworksPart1 from '../../components/FetchArtworksPart1/FetchArtworksPart1'
import FetchArtworksPart2 from '../../components/FetchArtworksPart2/FetchArtworksPart2'
import FetchArtworksPart3 from '../../components/FetchArtworksPart3/FetchArtworksPart3'
import FetchArtworksPart4 from '../../components/FetchArtworksPart4/FetchArtworksPart4'
import SideBar from '../../components/SideBar/SideBar'
import styles from '../../styles/Projects/Projects.module.scss'
import ArtworksList from '../../components/ArtworksList/ArtworksList'

const Projects = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchArtworks({ startIndex: 0, endIndex: 25 })) // fetch first part of artwork data
    dispatch(fetchArtworks({ startIndex: 25, endIndex: 50 })) // fetch second part of artwork data
    dispatch(fetchArtworks({ startIndex: 50, endIndex: 75 })) // fetch third part of artwork data
    dispatch(fetchArtworks({ startIndex: 75, endIndex: 100 })) // fetch fourth part of artwork data
  }, [dispatch])
  return (
    <div className={styles.projectsmain} id="projects">
      <div className={styles.projectscontainer}>
        <div className={styles.projectbox}>
          <div className={styles.sidebar}>
            <p>Projects</p>
            <SideBar />
            <FetchArtworksPart2 />
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
