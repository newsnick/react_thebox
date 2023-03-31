import React from 'react'
import { connect } from 'react-redux'

const ReferenceIcon = (props) => {
  return (
    <div>
      <img src={props.content} alt={props.content2} />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  content: ownProps.content,
  content2: ownProps.content2,
})

export default connect(mapStateToProps)(ReferenceIcon)
