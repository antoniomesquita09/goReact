import React from 'react'

import PostHeader from './PostHeader.js'

import './styles.scss'

const Post = props => (
  <div className="wrapper content">
    <PostHeader name={props.author} avatar={props.image} />
    <p>{props.text}</p>
  </div>
)

export default Post
