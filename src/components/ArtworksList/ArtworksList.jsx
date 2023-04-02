import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchArtworks } from './artworkSlice'
import styles from '../../styles/ArtworksList/ArtworksList.module.scss'

const ArtworksList = () => {
  const dispatch = useDispatch()
  const { artworks, loading, error } = useSelector((state) => state.artworks)
  const [startIndex, setStartIndex] = useState(0)
  const endIndex = Math.min(startIndex + 4, artworks.length)
  const selectedArtworks = artworks.slice(startIndex, endIndex)

  useEffect(() => {
    dispatch(fetchArtworks())
  }, [dispatch])

  const handleNextClick = () =>
    setStartIndex((startIndex + 4) % artworks.length)
  const handleBackClick = () =>
    setStartIndex(startIndex - 4 < 0 ? artworks.length - 4 : startIndex - 4)

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <>
          <div className={styles.thumbnailcontainer}>
            {selectedArtworks.map((artwork) => (
              <div key={artwork.id} className={styles.artwork}>
                <img
                  className={styles.thumbnailimage}
                  src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
                  alt={artwork.artist_title}
                />
                <h2 className={styles.title}>{artwork.title}</h2>
                <p className={styles.content}>{artwork.department_title}</p>
              </div>
            ))}
          </div>
          <div className={styles.buttonscontainer}>
            <button className={styles.button} onClick={handleBackClick}>
              &lt; back
            </button>
            <button className={styles.button} onClick={handleNextClick}>
              next &gt;
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default ArtworksList
