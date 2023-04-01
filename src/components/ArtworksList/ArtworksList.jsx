import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchArtworks } from './artworkSlice.js'
import styles from '../../styles/ArtworksList/ArtworksList.module.scss'
import axios from 'axios'

const ArtworksList = () => {
  const dispatch = useDispatch()
  const { artworks, loading, error } = useSelector((state) => state.artworks)

  useEffect(() => {
    dispatch(fetchArtworks())
  }, [dispatch])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  // Shuffle the artworks array

  const shuffledArtworks = [...artworks].sort(() => 0.5 - Math.random())

  // Take the first 4 artworks from the shuffled array
  const selectedArtworks = shuffledArtworks.slice(0, 4)

  return (
    <div className={styles.thumbnailcontainer}>
      {selectedArtworks.map((artwork) => (
        <div key={artwork.id} className={styles.artwork}>
          <img
            className={styles.thumbnailimage}
            src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
            alt={artwork.artist_title}
          />
          <h2>{artwork.title}</h2>
          <p>{artwork.department_title}</p>
        </div>
      ))}
    </div>
  )
}

export default ArtworksList
