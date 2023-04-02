import React, { useEffect, useState } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider, useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import thunk from 'redux-thunk'

const ARTWORKS_URL = 'https://api.artic.edu/api/v1/artworks'

const initialState = { data: [] }

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, data: action.payload }
    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(thunk))

const ArtworksCards = () => {
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const { data } = await axios(ARTWORKS_URL)
        dispatch({ type: 'FETCH_DATA', payload: data.artworks })
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchArtworks()
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return <Artworks />
}

const Artworks = () => {
  const artworks = useSelector((state) => state.data) || []

  if (artworks.length === 0) {
    return <div>Loading artworks...</div>
  }

  return (
    <div>
      {artworks.map((artwork) => {
        console.log(artwork)
        return <h4>Single artwork</h4>
      })}
    </div>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <ArtworksCards />
    </Provider>
  )
}
