import React from 'react'

import './hero.scss'
import logo from '../../assets/EnjoyHeroLogoGrey.svg'

const HeroDemo = () => {
  return (
    <div className = 'hero-container'>
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
