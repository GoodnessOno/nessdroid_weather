import React from 'react'
import './backgroundvideo.css'
import backgroundVideo from '../../assets/Weather header video.mp4'

const Backgroundvideo = () => {
  return (
    <div>
      <video loop autoPlay muted id='bg-video'>
        <source src={backgroundVideo} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Backgroundvideo
