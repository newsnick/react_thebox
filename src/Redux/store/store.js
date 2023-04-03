import { configureStore } from '@reduxjs/toolkit'
import artworksReducer from '../reducer/artworkSlice.js'
import placesReducer from '../../components/PlacesList/placesSlice'

export const store = configureStore({
  reducer: {
    artworks: artworksReducer,
    places: placesReducer,
  },
})
