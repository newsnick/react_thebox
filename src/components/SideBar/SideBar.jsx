import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styles from '../../styles/SideBar/SideBar.module.scss'
import { fetchArtworks } from '../../Redux/reducer/artworkSlice'
import FetchArtworksPart1 from '../../components/FetchArtworksPart1/FetchArtworksPart1'
import FetchArtworksPart2 from '../../components/FetchArtworksPart2/FetchArtworksPart2'
import FetchArtworksPart3 from '../../components/FetchArtworksPart3/FetchArtworksPart3'
import FetchArtworksPart4 from '../../components/FetchArtworksPart4/FetchArtworksPart4'

const SideBar = (props) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchArtworks({ startIndex: 0, endIndex: 25 })) // fetch first part of artwork data
    dispatch(fetchArtworks({ startIndex: 25, endIndex: 50 })) // fetch second part of artwork data
    dispatch(fetchArtworks({ startIndex: 50, endIndex: 75 })) // fetch third part of artwork data
    dispatch(fetchArtworks({ startIndex: 75, endIndex: 100 })) // fetch fourth part of artwork data
  }, [dispatch])
  const [showComponent, setShowComponent] = useState(false)
  const [showComponent2, setShowComponent2] = useState(false)
  const [showComponent3, setShowComponent3] = useState(false)
  const [showComponent4, setShowComponent4] = useState(false)

  return (
    <div className={styles.sidebar}>
      <ol>
        <li>
          {props.text}
          <a onClick={() => setShowComponent(!showComponent)}>Artworks part1</a>
          {showComponent && <FetchArtworksPart1 />}
        </li>
        <li>
          {props.text}
          <a onClick={() => setShowComponent2(!showComponent2)}>
            Artworks part2
          </a>
          {showComponent2 && <FetchArtworksPart2 />}
        </li>
        <li>
          {props.text3}
          <a onClick={() => setShowComponent3(!showComponent3)}>
            Artworks part3
          </a>
          {showComponent3 && <FetchArtworksPart3 />}
        </li>
        <li>
          {props.text4}
          <a onClick={() => setShowComponent4(!showComponent4)}>
            Artworks part4
          </a>
          {showComponent4 && <FetchArtworksPart4 />}
        </li>
        <li>Other</li>
      </ol>
    </div>
  )
}

export default SideBar
