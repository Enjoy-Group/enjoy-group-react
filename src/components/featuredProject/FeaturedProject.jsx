import React from 'react'
import PropTypes from 'prop-types'
import { urlFor } from '../../client'
import { Link } from 'react-router-dom'

import './featuredProject.scss'
import ButtonMain from '../buttonMain/ButtonMain'

const FeaturedProject = ({project, left}) => {
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
                        <h3>{project?.projectName}</h3>
                    </div>

                    <div className = 'enjoy__featuredProject-container_content-btn'>
                        <Link 
                          to = {`/ourwork/${project.projectName}`} 
                          state = {{
                            image: project.projectImage,
                            description: project.projectDescription
                            }} 
                          >
                            <ButtonMain text = 'more info'/>
                        </Link>
                    </div>
                </div>
                
                <div className = 'enjoy__featuredProject-container_image'>
                    <img src = {urlFor(project?.projectImage?.asset)} alt=  {project?.projectName}/>
                </div>
            </div>
        </div>
    :   <div className = 'enjoy__featuredProject'>
            <div className = 'enjoy__featuredProject-container'>
                <div className = 'enjoy__featuredProject-container_angled'>

                </div>
                
                <div className = 'enjoy__featuredProject-container_content'>
                    <div className = 'enjoy__featuredProject-container_content-logo'>
                        <p>company logo</p>
                    </div>

                    <div className = 'enjoy__featuredProject-container_content-projectName'>
                        <h3>{project?.projectName}</h3>
                    </div>

                    <div className = 'enjoy__featuredProject-container_content-btn'>
                        <Link 
                          to = {`/ourwork/${project.projectName}`} 
                          state = {{
                            image: project.projectImage,
                            description: project.projectDescription
                            }} 
                          >
                            <ButtonMain text = 'more info'/>
                        </Link>
                    </div>
                </div>
                
                <div className = 'enjoy__featuredProject-container_image'>
                    <img src = {urlFor(project?.projectImage?.asset)} alt=  {project?.projectName}/>
                </div>
            </div>
        </div>
  )
}

// FeaturedProject.propTypes = {
//     project: PropTypes.object
// }

export default FeaturedProject
