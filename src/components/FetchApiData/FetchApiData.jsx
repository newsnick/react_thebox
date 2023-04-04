import React, { useState, useEffect } from 'react'
import styles from '../../styles/FetchApiData/FetchApiData.module.scss'
import axios from 'axios'

const FetchApiData = ({ apiUrl }) => {
  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(4)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(apiUrl)
        if (response.status === 200) {
          console.log('Fetch API ok')
          setPosts(response.data.data.slice(0, 100))
        } else {
          console.log('Fetch API error')
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchPosts()
  }, [apiUrl])

  const lastPost = currentPage * postsPerPage
  const firstPost = lastPost - postsPerPage
  const currentPosts = posts.slice(firstPost, lastPost)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className={styles.thumbnailcontainer}>
      {currentPosts.map((post) => (
        <div key={post.id}>
          <img
            className={styles.thumbnailimage}
            src={`https://www.artic.edu/iiif/2/${post.image_id}/full/843,/0/default.jpg`}
            alt=""
          />
          <h2 className={styles.title}>{post.title}</h2>
          <p className={styles.content}>{post.department_title}</p>
        </div>
      ))}
      <div>
        {Array.from({ length: Math.ceil(posts.length / postsPerPage) }).map(
          (_, index) => (
            <button key={index} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  )
}

export default FetchApiData
