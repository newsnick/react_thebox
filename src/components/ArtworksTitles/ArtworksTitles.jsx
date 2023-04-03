import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchArtworks } from '../../Redux/reducer/artworkSlice2'
import styles from '../../styles/ArtworksTitles/ArtworksTitles.module.scss'

const ArtworkTitles = () => {
  const dispatch = useDispatch()
  const { artworks, loading, error } = useSelector((state) => state.artworks)
  const [startIndex, setStartIndex] = useState(0)
  const endIndex = Math.min(startIndex + 1, artworks.length)

  const selectedArtworks = artworks.length
    ? artworks.slice(startIndex, endIndex)
    : []

  /*   useEffect(() => {
    dispatch(fetchArtworks())
  }, [dispatch]) */
  useEffect(() => {
    dispatch(fetchArtworks())
      .then((response) => console.log(response.payload))
      .catch((error) => console.log(error))
  }, [dispatch])

  const handleNextClick = () =>
    setStartIndex((startIndex + 1) % artworks.length)
  const handleBackClick = () =>
    setStartIndex(startIndex - 1 < 0 ? artworks.length - 1 : startIndex - 1)

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <>
          <div className={styles.thumbnailcontainer}>
            {/* {selectedArtworks.map((artwork) => (
              <div key={artwork.id} className={styles.artwork}>
                <h2 className={styles.title}>{artwork.title}</h2>
                <p className={styles.content}>{artwork.description}</p>
              </div>
            ))} */}
            {selectedArtworks.map((artwork) => (
              <div key={artwork.id} className={styles.artwork}>
                <h2 className={styles.title}>{artwork.title}</h2>
                <p className={styles.content}>{artwork.artist_display}</p>
              </div>
            ))}
          </div>

          <div className={styles.buttonscontainer}>
            <button className={styles.button} onClick={handleBackClick}>
              &larr; back
            </button>
            <button className={styles.button} onClick={handleNextClick}>
              next &rarr;
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default ArtworkTitles
