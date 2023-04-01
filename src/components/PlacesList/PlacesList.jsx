import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPlaces } from './placesSlice'
import styles from '../../styles/PlacesList/PlacesList.module.scss'

const PlacesList = () => {
  const dispatch = useDispatch()
  const places = useSelector((state) => state.places.data)

  useEffect(() => {
    dispatch(fetchPlaces())
  }, [dispatch])

  return (
    <div className={styles.thumbnailcontainer}>
      {places.map((place) => (
        <div key={place.id}>
          <img
            className={styles.thumbnailimage}
            src={place.thumbnails}
            alt={place.title}
          />
          <h3>{place.title}</h3>
          <p>{place.description}</p>
        </div>
      ))}
    </div>
  )
}

export default PlacesList
