import React from 'react'
import PropTypes from 'prop-types'

import './featuredProject.scss'
import ButtonMain from '../buttonMain/ButtonMain'

const FeaturedProject = ({name, image, left}) => {

  return (
    left 
    ?   <div className = 'enjoy__featuredProject' id = 'projectLeft'>
            <div className = 'enjoy__featuredProject-container' 
            >
                <div className = 'enjoy__featuredProject-container_angled' 
                    style = {{transform: 'skewX(17deg)', borderTopRightRadius: '20px', borderBottomRightRadius: '50px 40px', borderTopLeftRadius: '0', borderBottomLeftRadius: '0' }}>
                    
                </div>
                <div className = 'enjoy__featuredProject-container_content'>
                    <div className = 'enjoy__featuredProject-container_content-logo'>
                        <p>company logo</p>
                    </div>

                    <div className = 'enjoy__featuredProject-container_content-projectName'>
                        <h3>{name}</h3>
                    </div>

                    <div className = 'enjoy__featuredProject-container_content-btn'>
                        <ButtonMain text = 'more info' />
                    </div>
                </div>
                
                <div className = 'enjoy__featuredProject-container_image'>
                    <img src = {image} alt=  {name}/>
                </div>
            </div>
        </div>
    :   <div className = 'enjoy__featuredProject'>
            <div className = 'enjoy__featuredProject-container'>
                <div className = 'enjoy__featuredProject-container_angled'></div>
                <div className = 'enjoy__featuredProject-container_content'>
                    <div className = 'enjoy__featuredProject-container_content-logo'>
                        <p>company logo</p>
                    </div>

                    <div className = 'enjoy__featuredProject-container_content-projectName'>
                        <h3>{name}</h3>
                    </div>

                    <div className = 'enjoy__featuredProject-container_content-btn'>
                        <ButtonMain text = 'more info'/>
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
