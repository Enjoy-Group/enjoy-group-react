import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import Aos from 'aos'
import 'aos/dist/aos.css'

import { FeaturedProject } from '..'
import { client } from '../../client'

import './featuredProjects.scss'

const FeaturedProjects = () => {
  const [projects, setProjects] = useState([])
  
  useEffect(()=> {
    Aos.init({duration: 2000, disabled: true})
    
    const query = '*[_type == "featuredProjects"]{featuredProjects[]->}'

    client.fetch(query)
      .then((res) => setProjects(res[0].featuredProjects))
  }, [])

  return (
    <section className = 'enjoy__featuredProjects'>
        <div className = 'enjoy__featuredProjects-heading'>
            <h3 className = 'section__heading'>featured projects</h3>
        </div>
    
        <div className = 'enjoy__featuredProjects-content'>
            {projects?.map((project, index) => (
              index%2 === 0 
                ? (<div className = 'enjoy__featuredProjects-content_project' 
                      key = {index}
                      data-aos = 'fade-right'
                      >
                      
                        <FeaturedProject project = {project} />
                   </div>)
                : (
                   <div className = 'enjoy__featuredProjects-content_project' 
                      key = {index}
                      data-aos = 'fade-left'
                      >
                      <FeaturedProject project = {project} left/>
                   </div>)
            ))}
        </div>

        <motion.div 
          className = 'enjoy__featuredProjects-btn' 
          role = 'button' 
          whileHover = {{background: 'linear-gradient(153deg, #102a0b, transparent)'}}
          transition = {{duration: 0.5, ease: 'easeIn'}}
        >
            <p>view all work</p>
        </motion.div>
    </section>
  )
}

export default FeaturedProjects
