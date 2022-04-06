import React from 'react'
import { useInView } from 'react-intersection-observer'
import { useParallax } from 'react-scroll-parallax'
import { motion } from 'framer-motion'

import './heroDemo.scss'
import logo from '../../assets/EnjoyHeroLogoGrey.svg'
import video from '../../assets/showreel.mp4'
import { cos } from 'prelude-ls'

const HeroDemo = () => {
  const origin = useParallax({
    scale: [-400, 200],
    translateY: [0, 900],
    
  })

  const { ref, inView } = useInView();

  console.log(ref)

  return (
    <>
    <div className = 'heroDemo-container1'>
        <div className = 'video-container'  >
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
              transition = {{duration: 0.5}}
              >
            </motion.img>
            <div 
              className = 'logo-scroll-origin1' 
              ref = {origin.ref}
              // animate = {inView ? {opacity: [1, 0], scale: [1, 100]} : {opacity: [0,1]}}
              // transition = {{duration: 0.3}}
              >

            </div>
        </motion.div>
        <div className = 'scroll-container1'>
            <motion.div className = 'scroll1'  animate = {inView ? {opacity: [1, 0] } : {opacity: [0,1]}}
              transition = {{duration: 0.5}}>
                <p>scroll</p>
            </motion.div>
        </div>
    </div>
    <div ref = {ref} style = {{height: '1px', position: 'absolute', top: '101vh'}}>{ inView ? 'yes' : 'no'}</div>
    </>
  )
}

export default HeroDemo
