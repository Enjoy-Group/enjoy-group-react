import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import { client, urlFor } from '../../client'

import './works.scss'

const filters = [
  'view all',
  'category one',
  'category two',
  'category three',
  'category four',
  'category five',
]

const Works = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const query = `*[_type == "project"]`

    client.fetch(query)
      .then((res) => {
        setProjects(res)
        console.log(res)
      })
  }, [])

  return (
    <section className = 'enjoy__works section__margin'>
        <header className = 'enjoy__works-heading'>
            <h1>our work</h1>
        </header>
        <main className = 'enjoy__works-container'>
            <div className = 'enjoy__works-container_filters'>
                {filters.map((filter, index) => (
                  <div className = 'enjoy__works-container_filters-item' key = {index}>
                      <p>{filter}</p>
                  </div>
                ))}
            </div>
            <div className = 'enjoy__works-container_content'>
                {projects?.map((project) => (
                    <motion.div className = 'enjoy__works-container_content-project' key = {project.id} whileHover = {{scale: [1, 1.02]}} transition = {{duration: 0.3}}>
                      <Link to = {`/ourwork/${project.projectName}`}>
                        <div className = 'enjoy__works-container_content-project_img' style = {{backgroundImage: `url(${urlFor(project.projectImage)})`}}>
                            {/* <img src = {urlFor(project?.projectImage)} /> */}
                        </div>
                        <div className = 'enjoy__works-container_content-project_name'>
                            <p>{project.projectName}</p>
                        </div>
                      </Link>
                    </motion.div>

                ))}
            </div>
        </main>
    </section>
  )
}

export default Works
