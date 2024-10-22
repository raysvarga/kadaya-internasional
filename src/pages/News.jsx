import React from 'react'
import Navbar from '../components/atoms/Navbar'
import Header from '../components/molecules/Header'
import NewsCategorySelection from '../components/atoms/NewsCategorySelection'

const News = () => {
  return (
    <>
    <div className='px-5'>
    <Navbar/>
    <Header/>
    <NewsCategorySelection/>
    </div>
    </>
  )
}

export default News