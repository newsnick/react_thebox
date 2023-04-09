import React from 'react'
import { useSelector } from 'react-redux'
import styles from '../../styles/ReferenceBox/ReferenceBox.module.scss'
import rectangle from '../../assets/browser/icons/rectanglevertical.svg'

const ReferenceBox = (props) => {
  const { content, content2 } = useSelector((state) => ({
    content: props.content,
    content2: props.content2,
  }))

  return (
    <div className={styles.referencebox}>
      <p className={styles.digits}>{content}</p>

      <div className={styles.bottom}>
        <img src={rectangle} alt="rectangle" />
        <p className={styles.content}>{content2}</p>
      </div>
    </div>
  )
}

export default ReferenceBox
