import React from 'react'
import PropTypes from 'prop-types'

import './buttonMain.scss'

const ButtonMain = ({text, marginRight, marginLeft }) => {
  function renderButton(){
    if(marginRight){
      console.log('right')
      return (
        <div className = 'enjoy__buttonMain' role = 'button' style = {{marginRight: 'auto'}}>
            <p>{text}</p>
        </div>
      )
    } 
    if(marginLeft){
      console.log('left')
      return (
        <div className = 'enjoy__buttonMain' role = 'button' style = {{marginleft: 'auto'}}>
            <p>{text}</p>
        </div>
      )
    } 
    if(!marginRight && !marginLeft){
      return (
        <div className = 'enjoy__buttonMain' role = 'button'>
            <p>{text}</p>
        </div>
      )
    }
  }
  return (
    <>
    {renderButton()}
    </>
  )
}

ButtonMain.propTypes = {
  text: PropTypes.string
}

export default ButtonMain
