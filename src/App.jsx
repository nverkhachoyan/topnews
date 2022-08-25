import React from 'react'

import './App.css'
import Header from './features/Header/Header'
import BreakingNews from './features/BreakingNews/BreakingNews'
import NewsWithPicture from './components/NewsWithPicture'
import NewsAside from './features/NewsAside/NewsAside'

const App = () => {
  return (
    <>
    <div className='app-container'>
    <Header />
      <main className='news-container'>
        <BreakingNews />
        <NewsWithPicture />
        <NewsAside />
      </main>
    </div>
    </>
  )
}

export default App