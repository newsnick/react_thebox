import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect, useMemo, useCallback } from 'react'
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
  const endIndex = useMemo(
    () => Math.min(startIndex + 4, artworks.length),
    [startIndex, artworks.length]
  )
  const selectedArtworks = useMemo(
    () => artworks.slice(startIndex, endIndex),
    [artworks, startIndex, endIndex]
  )
  const [selectedArtwork, setSelectedArtwork] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchArtworks(searchTerm))
  }, [dispatch, searchTerm])

  const handleNextClick = useCallback(
    () => setStartIndex((startIndex + 4) % artworks.length),
    [startIndex, artworks.length]
  )
  const handleBackClick = useCallback(
    () => setStartIndex((startIndex - 4 + artworks.length) % artworks.length),
    [startIndex, artworks.length]
  )
  const handleArtworkClick = useCallback(
    (artwork) => setSelectedArtwork(artwork),
    []
  )
  const closeModal = useCallback(() => setSelectedArtwork(null), [])

  const buttons = ['<< back', 'next >>']

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
            {buttons.map((buttonText, index) => (
              <button
                key={index}
                className={styles.button}
                onClick={index ? handleBackClick : handleNextClick}
              >
                {buttonText}
              </button>
            ))}
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
