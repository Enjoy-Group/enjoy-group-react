import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import createScrollSnap from 'scroll-snap'
import { useParallax, useParallaxController } from 'react-scroll-parallax'
import { motion } from 'framer-motion'

import './heroDemo.scss'
import logo from '../../assets/EnjoyHeroLogoGrey.svg'
import video from '../../assets/showreel.mp4'
import { cos } from 'prelude-ls'


const HeroDemo = ({isInView}) => {
  // const hero = document.getElementById('hero')

  // console.log(hero)

  // const { bind, unbind } = createScrollSnap(hero, {
  //   snapDestinationY: '90%',
  //   timeout: 0,
  //   duration: 300,
  //   threshold: 1,
  // }, () => console.log('element snapped'))

  const origin = useParallax({
    scale: [-100, 90],
    opacity: [20, 0],
    // shouldDisableScalingTranslations: true,
    // easing: [0.8, 0.1 , 1, 1],
    // shouldAlwaysCompleteAnimation: true
    // translateY: [990, 900],
    // translateX: [300, -900],    
  })

  const { ref, inView } = useInView({
    if(isInView){
      this.trackVisibility = false
    }
  });
  const { ref: refEnd, inView: inViewEnd, entry } = useInView({});
  const { ref: refTop, inView: inViewTop } = useInView({});


  return (
    <>
    <div className = 'heroDemo-container1' id = 'hero'>
        <div className = 'video-container'  style = {inViewEnd ? {position: 'absolute', top: '65vh'} : {position: 'fixed'}}>
          <video src = {video} autoPlay muted loop>

          </video>
        </div>
        <motion.div 
          className = 'logo-container1'
          // animate = { inView ? { opacity: [1,0]} : {opacity: [0,1]}}
          // transition = {{duration: 0.5}}
          >
            <motion.img 
              src = {logo}
              animate = { inView ? {opacity: [1, 0], scale: [1, 5]} : {opacity: [0, 1], scale: [5, 1]}}
              transition = {{duration: 0.4}}
              style = {!inViewEnd ? {position: 'fixed'} : {position: 'absolute'}}
              >
            </motion.img>
            <div 
              className = 'logo-scroll-origin1' 
              ref = {origin.ref}
              style = {inView ? {position: 'absolute'} : {position: 'fixed'}}
              // animate = {inView ? {opacity: [1, 0], scale: [1, 100]} : {opacity: [0,1]}}
              // transition = {{duration: 0.3}}
              >
                {/* {inView && (() => parallax.destroy )} */}
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
    <div ref = {refTop} style = {{height: '1px', position: 'absolute', top: '3px', color: 'white'}}></div>
    <div ref = {ref} style = {{height: '10000px', position: 'absolute', top: '130vh', color: 'white'}}></div>
    <div ref = {refEnd} style = {{height: '10000px', position: 'absolute', top: '165vh', color: 'white'}}></div>
    </>
  )
}

export default HeroDemo
