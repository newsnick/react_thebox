/* import React, { useState, useEffect } from 'react'
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
    dispatch(fetchArtworks({ startIndex: 0, endIndex: 25 }))
    dispatch(fetchArtworks({ startIndex: 25, endIndex: 50 }))
    dispatch(fetchArtworks({ startIndex: 50, endIndex: 75 }))
    dispatch(fetchArtworks({ startIndex: 75, endIndex: 100 }))
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
 */

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from '../../styles/SideBar/SideBar.module.scss'
import FetchArtworksPart1 from '../../components/FetchArtworksPart1/FetchArtworksPart1'
import FetchArtworksPart2 from '../../components/FetchArtworksPart2/FetchArtworksPart2'
import FetchArtworksPart3 from '../../components/FetchArtworksPart3/FetchArtworksPart3'
import FetchArtworksPart4 from '../../components/FetchArtworksPart4/FetchArtworksPart4'
import { item } from '../../utils.js'

const SideBar = (props) => {
  const [showComponents, setShowComponents] = useState([
    false,
    false,
    false,
    false,
  ])
  const [artworks, setArtworks] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://api.example.com/artworks')
      setArtworks(response.data)
    }

    fetchData()
  }, [])

  const toggleShowComponent = (index) => {
    const updatedComponents = showComponents.map((val, i) =>
      i === index ? !val : false
    )
    setShowComponents(updatedComponents)
  }

  const items = [
    {
      text: props.text,
      onClick: () => toggleShowComponent(0),
      component: showComponents[0] && (
        <FetchArtworksPart1 artworks={artworks.slice(0, 25)} />
      ),
    },
    {
      text: props.text,
      onClick: () => toggleShowComponent(1),
      component: showComponents[1] && (
        <FetchArtworksPart2 artworks={artworks.slice(25, 50)} />
      ),
    },
    {
      text: props.text3,
      onClick: () => toggleShowComponent(2),
      component: showComponents[2] && (
        <FetchArtworksPart3 artworks={artworks.slice(50, 75)} />
      ),
    },
    {
      text: props.text4,
      onClick: () => toggleShowComponent(3),
      component: showComponents[3] && (
        <FetchArtworksPart4 artworks={artworks.slice(75, 100)} />
      ),
    },
    {
      text: 'Other',
      onClick: () => {},
      component: null,
    },
  ]

  return (
    <div className={styles.sidebar}>
      <ol>
        {items.map((item, index) => (
          <li key={index}>
            {item.text}
            <a onClick={item.onClick}>Artworks part{index + 1}</a>
            {item.component}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default SideBar
