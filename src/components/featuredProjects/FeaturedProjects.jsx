import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

import { FeaturedProject } from '..'

import './featuredProjects.scss'
import testImage from '../../assets/trees.jpeg'

const projects = [
  {
    name: 'project name',
    image: {testImage}
  },
  {
    name: 'project name',
    image: {testImage}
  },
  {
    name: 'project name',
    image: {testImage}
  },
]

const FeaturedProjects = ({projects}) => {
  return (
    <section className = 'enjoy__featuredProjects'>
        <div className = 'enjoy__featuredProjects-heading'>
            <h3 className = 'section__heading'>featured projects</h3>
        </div>

        <div className = 'enjoy__featuredProjects-content'>
            <div className = 'enjoy__featuredProjects-content_project'>
                <FeaturedProject name = 'project name' image = {testImage} />
            </div>
            <div className = 'enjoy__featuredProjects-content_project'>
                <FeaturedProject name = 'project name' image = {testImage} left/>
            </div>
            <div className = 'enjoy__featuredProjects-content_project'>
                <FeaturedProject name = 'project name' image = {testImage} />
            </div>
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

FeaturedProjects.propTypes = {

}

export default FeaturedProjects
