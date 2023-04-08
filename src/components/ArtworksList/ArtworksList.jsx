import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import styles from '../../styles/ArtworksList/ArtworksList.module.scss'
import { fetchArtworks } from '../../Redux/reducer/artworkSlice'

const ArtworkModal = ({ artwork, closeModal }) => (
  <div className={styles.modalBackdrop} onClick={closeModal}>
    <div className={styles.modalContainer}>
      <button className={styles.closeButton} onClick={closeModal}>
        X
      </button>
      <img
        className={styles.modalImage}
        src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
        alt={artwork.artist_title}
      />
      <h2 className={styles.modalTitle}>{artwork.title}</h2>
      <p className={styles.modalContent}>{artwork.department_title}</p>
    </div>
  </div>
)

const ArtworksList = ({ searchTerm = '' }) => {
  const { artworks, loading, error } = useSelector((state) => state.artworks)
  const [startIndex, setStartIndex] = useState(0)
  const endIndex = Math.min(startIndex + 4, artworks.length)
  const selectedArtworks = artworks.slice(startIndex, endIndex)
  const [selectedArtwork, setSelectedArtwork] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchArtworks(searchTerm))
  }, [dispatch, searchTerm])

  const handleNextClick = () =>
    setStartIndex((startIndex + 4) % artworks.length)
  const handleBackClick = () =>
    setStartIndex((startIndex - 4 + artworks.length) % artworks.length)
  const handleArtworkClick = (artwork) => setSelectedArtwork(artwork)
  const closeModal = () => setSelectedArtwork(null)

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {artworks.length > 0 && (
        <>
          <div className={styles.thumbnailcontainer}>
            {selectedArtworks.map((artwork) => (
              <div
                key={artwork.id}
                className={styles.artwork}
                onClick={() => handleArtworkClick(artwork)}
              >
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
          {selectedArtwork && (
            <ArtworkModal artwork={selectedArtwork} closeModal={closeModal} />
          )}
        </>
      )}
    </div>
  )
}

export default ArtworksList
