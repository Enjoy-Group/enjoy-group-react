import React from 'react'
import { useParams } from 'react-router'
import { useLocation } from 'react-router-dom'

import { urlFor } from '../../client'
import './project.scss'

const Project = () => {
  const { projectName } = useParams();
  const location = useLocation();
  const { image, description} = location.state

  console.log(image)

  return (
    <article className = 'enjoy__project'>
        <header className = 'enjoy__project-heading'>
            <h1>{projectName}</h1>
        </header>
        <main className = 'enjoy__project-container'>
            <p>{description}</p>
            <img src = {urlFor(image)} alt = {projectName} />
        </main>
    </article>
  )
}

export default Project
