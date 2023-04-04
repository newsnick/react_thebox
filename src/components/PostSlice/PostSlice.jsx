import React from 'react'
import styles from '../../styles/PostSlice/PostSlice.module.scss'

const PostSlice = ({ posts }) => {
  return (
    <div className={styles['post-slice']}>
      {posts.map((post) => (
        <div key={post.id} className={styles['post-slice__item']}>
          <img
            src={`https://www.artic.edu/iiif/2/${post.image_id}/full/843,/0/default.jpg`}
            alt={post.title}
            className={styles.thumbnailimage}
          />
          <h2 className={styles.title}>{post.title}</h2>
          <p className={styles.content}>{post.department_title}</p>
        </div>
      ))}
    </div>
  )
}

export default PostSlice

/* import React from 'react'
import FetchApiData from '../../components/FetchApiData/FetchApiData.jsx'

const PostSlice = ({ posts }) => {
  const numPosts = posts.length
  const postsPerPage = 25
  const numPages = Math.ceil(numPosts / postsPerPage)

  const pagePosts = [...Array(numPages)].map((_, i) =>
    posts.slice(i * postsPerPage, (i + 1) * postsPerPage)
  )

  return (
    <div>
      {pagePosts.map((page, i) => (
        <FetchApiData key={i} posts={page} />
      ))}
    </div>
  )
}

export default PostSlice
 */
