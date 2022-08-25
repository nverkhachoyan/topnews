import React from 'react'
import postImage from '../../assets/posts/post-1.jpeg'

const Post = ({post}) => {
  return (
    <article className={`post ${post.id === 1 ? 'first-post' : ''}`} >
        <h3 className='post-title'>{post.title}</h3>
        {post.id === 1 && <img className='post-image' src={postImage} />}
        <p>{post.body}</p>
    </article>
  )
}

export default Post