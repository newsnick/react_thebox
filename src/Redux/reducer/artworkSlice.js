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
  async (searchTerm) => {
    const { data } = await axios.get(
      `https://api.artic.edu/api/v1/artworks/search?q=${searchTerm}&fields=image_id,title,department_title`
    )

    const artworks = data.data.map((artwork) => {
      const imageId = artwork.image_id || '0'

      const imageUrl = `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`

      return { ...artwork, image_id: imageId, imageUrl }
    })

    return artworks
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
