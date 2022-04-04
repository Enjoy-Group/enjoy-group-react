import React from 'react'
import PropTypes from 'prop-types'

import './featuredProject.scss'
import ButtonMain from '../buttonMain/ButtonMain'

const FeaturedProject = ({name, image, angle}) => {
  return (
    <div className = 'enjoy__featuredProject'>
        <div className = 'enjoy__featuredProject-container'>
            <div className = 'enjoy__featuredProject-container_content'>
                <div className = 'enjoy__featuredProject-container_content-logo'>
                    <p>company logo</p>
                </div>

                <div className = 'enjoy__featuredProject-container_content-projectName'>
                    <h3>{name}</h3>
                </div>

                <div className = 'enjoy__featuredProject-container_content-btn'>
                    <ButtonMain text = 'project info'/>
                </div>
            </div>
            
            <div className = 'enjoy__featuredProject-container_image'>
                <img src = {image} alt=  {name}/>
            </div>
        </div>
    </div>
  )
}

FeaturedProject.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string
}

export default FeaturedProject
