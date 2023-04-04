/* import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchArtworks } from '../../Redux/reducer/artworkSlice'

const FetchArtworksPart4 = ({ slicedArtworks }) => {
  const { loading, error } = useSelector((state) => state.artworksPart4)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchArtworks({ startIndex: 75, endIndex: 100 }))
  }, [dispatch])

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <>
          {slicedArtworks.map((artwork) => (
            <div key={artwork.id}>
              <h2>{artwork.title}</h2>
              <img
                src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
                alt={artwork.artist_title}
              />
              <p>{artwork.department_title}</p>
            </div>
          ))}
        </>
      )}
    </div>
  )
}

export default FetchArtworksPart4
 */

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchArtworks } from '../../Redux/reducer/artworkSlice'
import styles from '../../styles/FetchArtworksPart4/FetchArtworksPart4.module.scss'

const FetchArtworksPart4 = () => {
  const dispatch = useDispatch()
  const { artworks, loading, error } = useSelector((state) => state.artworks)
  const selectedArtworks = artworks.slice(75, 100)

  useEffect(() => {
    dispatch(fetchArtworks({ startIndex: 75, endIndex: 100 }))
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

export default FetchArtworksPart4
