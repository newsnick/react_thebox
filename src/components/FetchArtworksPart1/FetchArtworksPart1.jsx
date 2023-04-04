import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchArtworks } from '../../Redux/reducer/artworkSlice'
import styles from '../../styles/FetchArtworksPart1/FetchArtworksPart1.module.scss'

const FetchArtworksPart1 = () => {
  const dispatch = useDispatch()
  const { artworks, loading, error } = useSelector((state) => state.artworks)
  const selectedArtworks = artworks.slice(0, 25)

  useEffect(() => {
    dispatch(fetchArtworks({ startIndex: 0, endIndex: 25 }))
  }, [dispatch])

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
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
      )}
    </div>
  )
}

export default FetchArtworksPart1
