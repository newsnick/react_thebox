import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { useCallback } from 'react'

const initialState = {
  artworks: [],
  loading: false,
  error: null,
}

export const fetchArtworks = createAsyncThunk(
  'artworks/fetchArtworks',
  async () => {
    const { data } = await axios.get('https://api.artic.edu/api/v1/artworks')
    return data.data
  }
)

export const artworksReducer = createSlice({
  name: 'artworks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArtworks.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchArtworks.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.artworks = action.payload
      })
      .addCase(fetchArtworks.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export const useFetchArtworks = () => {
  const dispatch = useDispatch()
  const memoizedFetchArtworks = useCallback(() => {
    dispatch(fetchArtworks())
  }, [dispatch])

  return memoizedFetchArtworks
}

export default artworksReducer.reducer
