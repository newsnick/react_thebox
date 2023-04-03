import React, { useState } from 'react'

const ImagePreview = ({ imageUrl }) => {
  const [showPreview, setShowPreview] = useState(false)

  const handleImageClick = () => {
    setShowPreview(!showPreview)
  }

  return (
    <>
      <img
        src={imageUrl}
        alt="Artwork"
        onClick={handleImageClick}
        style={{ cursor: 'pointer' }}
      />
      {showPreview && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1000,
          }}
        >
          <img src={imageUrl} alt="Artwork" style={{ maxWidth: '90vw' }} />
          <button onClick={handleImageClick}>Close</button>
        </div>
      )}
    </>
  )
}

export default ImagePreview
