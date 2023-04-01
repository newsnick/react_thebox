/* import React, { useEffect, useState } from 'react'
import { createStore } from 'redux'
import { Provider, useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

const initialState = { data: null }

const allArtworksUrl = 'https://api.artic.edu/api/v1/artworks'

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, data: action.payload }
    default:
      return state
  }
}

const store = createStore(reducer)

const ArtworksCards = () => {
  const [artworks, setArtworks] = useState([])
  const data = useSelector((state) => state.data)
  const dispatch = useDispatch()

  const fetchArtworks = async (url) => {
    try {
      const { data } = await axios(url)
      setArtworks(data.artworks)
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    fetchArtworks(allArtworksUrl)
  }, [])

  return <div>{JSON.stringify(data)}</div>
}

const Artworks = () => {
  const artworks = useSelector((state) => state.data?.artworks) || []
  return (
    <div>
      {artworks.map((singleArtwork) => {
        console.log(singleArtwork)
        return <h4>single artwork</h4>
      })}
    </div>
  )
}

export default Artworks
 */

import React, { useEffect, useState } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider, useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import thunk from 'redux-thunk'

const allArtworksUrl = 'https://api.artic.edu/api/v1/artworks'

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
        const { data } = await axios(allArtworksUrl)
        dispatch({ type: 'FETCH_DATA', payload: data.artworks })
        console.log(data)
      } catch (error) {
        console.log(error.response)
      } finally {
        setIsLoading(false)
      }
    }
    fetchArtworks()
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Artworks />
    </div>
  )
}

const Artworks = () => {
  const artworks = useSelector((state) => state.data?.artworks) || []
  if (artworks.length === 0) {
    return <div>Loading artworks...</div>
  }
  return (
    <div>
      {artworks.map((allArtworksUrl) => {
        console.log(allArtworksUrl)
        return <h4>single artwork</h4>
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
