import {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchPosts } from './breakingNewsSlice'
import Post from './Post'
import './BreakingNews.css'

const BreakingNews = () => {
  const {status, posts, error} = useSelector(state => state.breakingNews)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, []);

  const renderPosts = () => {
    if (status === 'loading') {
      return 'Loading...'
    }
    else if (status === 'success') {
      return posts.map(post => (
          <Post key={post.id} post={post} />
      ))
    }
    else if (status === 'failed') {
      return 'Failed to fetch posts.'
    }
  }

  return (
    <section className='breaking-news'>
      <h2 className='section-heading'>Breaking News</h2>
      {renderPosts()}
    </section>
  )
}

export default BreakingNews