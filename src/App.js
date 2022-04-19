import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'

import { client } from './client'
import { HomePage, OurWork, Project } from './containers'
import { Navbar } from './components'

import './App.scss'

const App = () => {
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
    <div className = 'app'>
        <Navbar />
        <div className = 'routes'>
            <Routes>
                <Route path = '/home' element = {<HomePage />}></Route>
                <Route path = '/ourwork' element = {<OurWork projects = {projects} />}></Route>
                    <Route path = '/ourwork/:projectName' element = {<Project />}></Route>
            </Routes>
        </div>
    </div>
  )
}

export default App
