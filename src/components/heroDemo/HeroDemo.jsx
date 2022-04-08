import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useInViewEffect } from 'react-hook-inview'
import { useParallax } from 'react-scroll-parallax'
import { motion } from 'framer-motion'

import './heroDemo.scss'
import logo from '../../assets/EnjoyHeroLogoGrey.svg'
import video from '../../assets/showreel.mp4'
import { cos } from 'prelude-ls'

const HeroDemo = ({isInView}) => {
  const [ disableObserver, setDisableObserver ] = useState(false)

  const origin = useParallax({
    scale: [-400, 200],
    opacity: [4, 0],
    translateY: [0, 900],
    translateX: [300, -900],    
  })

  const { ref, inView } = useInView({
    if(isInView){
      this.trackVisibility = false
    }

  });
  const { ref: refEnd, inView: inViewEnd, entry } = useInView({
  });


  return (
    <>
    <div className = 'heroDemo-container1'>
        <div className = 'video-container'  style = {inViewEnd ? {position: 'absolute', top: '70vh'} : {position: 'fixed'}}>
          <video src = {video} autoPlay muted loop>

          </video>
        </div>
        <motion.div 
          className = 'logo-container1'
          // animate = { inView ? { opacity: [1,0]} : {opacity: [0,1]}}
          // transition = {{duration: 0.1}}
          >
            <motion.img 
              src = {logo}
              animate = { inView ? {opacity: [1, 0], scale: [1, 5]} : {opacity: [0, 1], scale: [5, 1]}}
              transition = {{duration: 0.3}}
              style = {!inViewEnd ? {position: 'fixed'} : {position: 'absolute'}}
              >
            </motion.img>
            <div 
              className = 'logo-scroll-origin1' 
              ref = {origin.ref}
              // style = {inViewEnd && {display: 'none'}}
              // animate = {inView ? {opacity: [1, 0], scale: [1, 100]} : {opacity: [0,1]}}
              // transition = {{duration: 0.3}}
              >

            </div>
        </motion.div>
        <div className = 'scroll-container1' style = {{position: 'fixed', top: '50%', zIndex: 1}}>
            <motion.div className = 'scroll1'  
              animate = {inView ? {opacity: [1, 0], scale: [1, 2] } : {opacity: [0,1], scale: [2,1]}}
              transition = {{duration: 0.5}}
              style = {inViewEnd && {display: 'none'}}
              >
                <p>scroll</p>
            </motion.div>
        </div>
    </div>
    <div ref = {ref} style = {{height: '1px', position: 'absolute', top: '115vh', color: 'white'}}></div>
    <div ref = {refEnd} style = {{height: '10000px', position: 'absolute', top: '170vh', color: 'white'}}></div>
    </>
  )
}

export default HeroDemo
