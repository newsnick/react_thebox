import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchArtworks } from '../../Redux/reducer/artworkSlice'
import styles from '../../styles/FetchArtworksPart2/FetchArtworksPart2.module.scss'

const FetchArtworksPart2 = () => {
  const dispatch = useDispatch()
  const { artworks, loading, error } = useSelector((state) => state.artworks)

  useEffect(() => {
    dispatch(fetchArtworks({ startIndex: 25, endIndex: 50 }))
  }, [dispatch])

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <div className={styles.thumbnailcontainer}>
      {artworks.slice(25, 50).map((artwork) => (
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
  )
}

export default FetchArtworksPart2
