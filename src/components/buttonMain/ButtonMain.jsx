import React from 'react'
import PropTypes from 'prop-types'

import './buttonMain.scss'

const ButtonMain = ({text}) => {
  return (
    <div className = 'enjoy__buttonMain'>
        <p>{text}</p>
    </div>
  )
}

ButtonMain.propTypes = {
  text: PropTypes.string
}

export default ButtonMain
