import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  data: [],
  status: 'idle',
  error: null,
}

const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    fetchPlacesStart(state) {
      state.status = 'loading'
    },
    fetchPlacesSuccess(state, action) {
      state.status = 'succeeded'
      state.data = action.payload.data
    },
    fetchPlacesError(state, action) {
      state.status = 'failed'
      state.error = action.payload.error
    },
  },
})

export const { fetchPlacesStart, fetchPlacesSuccess, fetchPlacesError } =
  placesSlice.actions

export const fetchPlaces = () => async (dispatch) => {
  dispatch(fetchPlacesStart())
  try {
    const response = await axios.get('https://api.artic.edu/api/v1/places')
    dispatch(fetchPlacesSuccess(response.data))
    console.log(response.data)
  } catch (error) {
    dispatch(fetchPlacesError({ error: error.message }))
  }
}

export default placesSlice.reducer
