import React from 'react'
import logo from '../../assets/NESSDROID LOGO WORD.png'
import { Weather, Backgroundvideo, Rating, About, Creator, Footer } from '../../components'
import './home.css'

const Home = () => {
  return (
    <div>
      <Backgroundvideo />
      <div className='home-image'>
        <img src={logo} alt="Nessdroid logo- a set of circuit styled letters that spell out Nesssdroid" />
        <h2>NESSDROID WEATHER APP</h2>
      </div>
      <About />
      <Weather />
      <Creator />
      <Rating />
      <Footer />
    </div>
  )
}

export default Home
