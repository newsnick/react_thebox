import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from '../../styles/SideBar/SideBar.module.scss'
import FetchArtworksPart1 from '../../components/FetchArtworksPart1/FetchArtworksPart1'
import FetchArtworksPart2 from '../../components/FetchArtworksPart2/FetchArtworksPart2'
import FetchArtworksPart3 from '../../components/FetchArtworksPart3/FetchArtworksPart3'
import FetchArtworksPart4 from '../../components/FetchArtworksPart4/FetchArtworksPart4'
import { item } from '../../utils.js'

const SideBar = (props) => {
  // const [showComponents, setShowComponents] = useState([
  //   false,
  //   false,
  //   false,
  //   false,
  // ])
  const [showComponents, setShowComponents] = useState([, , , ,])
  const [artworks, setArtworks] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://api.example.com/artworks')
      setArtworks(response.data)
    }

    fetchData()
  }, [])

  // const toggleShowComponent = (index) => {
  //   setShowComponents((prevShowComponents) =>
  //     prevShowComponents.map((val, i) => (i === index ? !val : val))
  //   )
  // }

  const toggleShowComponent = (index) => {
    setShowComponents((prevShowComponents) =>
      prevShowComponents.map((val, i) =>
        i === index ? !Boolean(val) : Boolean(val)
      )
    )
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
