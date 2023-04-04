import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchArtworks } from '../../Redux/reducer/artworkSlice'
import styles from '../../styles/ArtworksList/ArtworksList.module.scss'

const SlicedApiList = () => {
  const dispatch = useDispatch()
  const { artworks, loading, error } = useSelector((state) => state.artworks)
  const [startIndex, setStartIndex] = useState(0)
  const endIndex = Math.min(startIndex + 25, artworks.length)
  const slicedArtworks = [
    artworks.slice(0, 25),
    artworks.slice(25, 50),
    artworks.slice(50, 75),
    artworks.slice(75, 100),
  ]

  useEffect(() => {
    dispatch(fetchArtworks())
  }, [dispatch])

  const handleNextClick = () =>
    setStartIndex((startIndex + 25) % artworks.length)
  const handleBackClick = () =>
    setStartIndex(startIndex - 25 < 0 ? artworks.length - 25 : startIndex - 25)

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <>
          <div className={styles.thumbnailcontainer}>
            {slicedArtworks[startIndex / 25].map((artwork) => (
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

export default SlicedApiList
