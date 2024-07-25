import React from 'react'
import logo from '../../assets/NESSDROID LOGO WORD.png'
import { Weather, Backgroundvideo, Rating } from '../../components'
import './home.css'

const Home = () => {
  return (
    <div>
      <Backgroundvideo />
      <div className='home-image'>
        <img src={logo} alt="Nessdroid logo- a set of circuit styled letters that spell out Nesssdroid" />
      </div>
      <Weather />
      <Rating />
    </div>
  )
}

export default Home
