import React from 'react'

import './heroDemo.scss'
import logo from '../../assets/EnjoyHeroLogoGrey.svg'

const HeroDemo = () => {
  return (
    <div className = 'heroDemo-container'>
        <div className = 'logo-container'>
            <img src = {logo}></img>
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
