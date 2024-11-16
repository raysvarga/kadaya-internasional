import React from 'react'
import Navbar from '../components/atoms/Navbar'
import Header from '../components/molecules/Header'
import AboutPict from '../assets/img/about.jpg'
import AboutContainer from '../components/molecules/AboutContainer'

const About = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <div className='mt-5'>
        <img className="w-full" src={AboutPict} alt="" />
    </div>
    <AboutContainer/>
    </>
  )
}

export default About