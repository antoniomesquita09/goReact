import React from 'react'

import './styles.scss'

const PostHeader = props => (
  <div className="post-header-container">
    <img src={props.avatar} alt="avatar" className="avatar" />
    <h2>{props.name}</h2>
  </div>
)

export default PostHeader
