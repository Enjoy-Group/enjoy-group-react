import React from 'react'

import './heroDemo.scss'
import logo from '../../../assets/EnjoyHeroLogoGrey.svg'
import video from '../../../assets/showreel.mp4'

const HeroDemo = () => {

  // window.onscroll = function () { window.scrollTo(0, 0); };

  return (
    <div className = 'heroDemo-container'>
        <video src = {video} autoPlay muted loop>

        </video>
        <div className = 'logo-container'>
            <img src = {logo}></img>
            <div className = 'logo-scroll-origin'>

            </div>
        </div>
        <div className = 'scroll-container'>
            <div className = 'scroll'>
                <p>scroll</p>
            </div>
        </div>
    </div>
  )
}

export default HeroDemo
