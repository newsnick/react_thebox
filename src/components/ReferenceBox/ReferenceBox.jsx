import React from 'react'
import { connect } from 'react-redux'
import styles from '../../styles/ReferenceBox/ReferenceBox.module.scss'
import rectangle from '../../assets/browser/icons/rectanglevertical.svg'

const ReferenceBox = (props) => {
  return (
    <div className={styles.referencebox}>
      <p className={styles.digits}>{props.content}</p>

      <div className={styles.bottom}>
        <img src={rectangle} alt="rectangle" />
        <p className={styles.content}>{props.content2}</p>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  content: ownProps.content,
  content2: ownProps.content2,
})

export default connect(mapStateToProps)(ReferenceBox)
