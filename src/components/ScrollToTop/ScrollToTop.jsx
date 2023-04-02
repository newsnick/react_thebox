import React, { useState, useEffect } from 'react'
import styles from '../../styles/ScrollToTop/ScrollToTop.module.scss'
import { FaArrowCircleUp } from 'react-icons/fa'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div
      className={`${styles.scrollToTop} ${isVisible ? styles.visible : ''}`}
      onClick={handleScrollToTop}
    >
      <div className={styles.scrollText}>
        <p>Back to Home</p>
        <FaArrowCircleUp className={styles.icon} />
      </div>
    </div>
  )
}
