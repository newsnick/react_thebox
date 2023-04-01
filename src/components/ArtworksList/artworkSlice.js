import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  artworks: [],
  loading: false,
  error: null,
}

export const artworksSlice = createSlice({
  name: 'artworks',
  initialState,
  reducers: {
    fetchArtworksStart: (state) => {
      state.loading = true
      state.error = null
    },
    fetchArtworksSuccess: (state, action) => {
      state.loading = false
      state.error = null
      state.artworks = action.payload
    },
    fetchArtworksFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const {
  fetchArtworksStart,
  fetchArtworksSuccess,
  fetchArtworksFailure,
} = artworksSlice.actions

export const fetchArtworks = () => async (dispatch) => {
  dispatch(fetchArtworksStart())
  try {
    const response = await axios.get('https://api.artic.edu/api/v1/artworks')
    dispatch(fetchArtworksSuccess(response.data.data))
    console.log(response.data.data)
  } catch (error) {
    dispatch(fetchArtworksFailure(error.message))
  }
}

export default artworksSlice.reducer
