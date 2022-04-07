import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

import './buttonMain.scss'

const ButtonMain = ({text, marginRight, marginLeft }) => {
  const [animateDiv, setAnimateDiv] = useState({})
  const [animateText, setAnimateText] = useState({})

  function onHoverStartAnimate(){
    setAnimateText({marginLeft: 0, boxShadow: 'rgb(24 24 24) 0px 0px 0px 0px', scale: 0.9, width: 'auto' });
    setAnimateDiv({scale: 1.2})
  }

  function onHoverExitAnimate(){
    setAnimateText({marginLeft: '50px', boxShadow: 'rgb(24 24 24) 0px 0px 0px 10px', scale: 1, width: '100px' })
    setAnimateDiv({scale: 1, justifyContent: 'unset'})
  }

  return (
    <motion.div
      className = 'enjoy__buttonMain' role = 'button'
      onHoverStart = {onHoverStartAnimate}
      onHoverEnd = {onHoverExitAnimate}
      animate = {animateDiv}
      transition = {{duration: 0.3, ease: 'easeInOut'}}
      id = 'button'
      >
        <motion.p
          animate = {animateText}
          transition = {{duration: 0.3, ease: 'easeInOut'}}
          id = 'button-text'
        >
          {text}</motion.p>
    </motion.div>
  )
}

ButtonMain.propTypes = {
  text: PropTypes.string
}

export default ButtonMain
