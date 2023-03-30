import React from 'react'
import ReferenceBox from '../../components/ReferenceBox/ReferenceBox'
import styles from '../../styles/References/References.module.css'

const References = () => {
  return (
    <div className={styles.refcontainer}>
      References
      <div className={styles.refbox1}>
        <ReferenceBox content="123" content2="Projects Completed" />
      </div>
      <div className={styles.refbox2}>
        {' '}
        <ReferenceBox content="30" content2="Years in Business" />
      </div>
      <div className={styles.refbox3}>
        <ReferenceBox content="84" content2="Happy Clients" />{' '}
      </div>
      <div className={styles.refbox4}>
        <ReferenceBox content="37" content2="Awards Win" />
      </div>
    </div>
  )
}

export default References
