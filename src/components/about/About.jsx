import React from 'react'
import './about.css'

const About = () => {
  return (
    <div className='about'>
      <h3>This is a weather app that allows you to check the weather of any city in the world in real time.
        <br />
        It uses the OpenWeatherMap API to fetch the weather data.
        <br />
        <br />
      It is built using React and the OpenWeatherMap API.
      Technologies used include HTML, CSS, JavaScript, React, and the OpenWeatherMap API.
      <br />
      <br />
      This app is made by <a href='https://github.com/GoodnessOno'>Goodness Ononogbu</a> a front-end developer.
      It is open source and available on <a href="https://github.com/GoodnessOno/nessdroid_weather">Github</a>
      Feel free to contribute or use it as you like.
      </h3>
    </div>
  )
}

export default About
