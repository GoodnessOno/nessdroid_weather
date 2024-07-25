import React from 'react'
import './creator.css'
import myImage from '../../assets/MY PERSONAL PORTRAIT.jpg'

const Creator = () => {
  return (
    <div className='creator'>
        <div className='creator-title'>
            <h1>About the Web Developer</h1>
        </div>
      <div className='creator-image'>
        <img src={myImage} alt="myImage" className='myImage' />
      </div>
      <div className='creator-text'>
        <h2>Hi, I'm <span>Goodness Ononogbu</span></h2>
        <h3>A Frontend Web Developer</h3>
        <p>I have been transforming rdeas into reality and crafting digital experiences since 2023 and this is one of my projects
            Your feedback and rating on your experience using this weather tool will be very helpful for my personal development
        </p>
        <button><a href="https://goodnessononogbuportfolio.vercel.app/">Visit my portfolio</a></button>
      </div>
    </div>
  )
}

export default Creator
