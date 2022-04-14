import React from 'react'
import { Route, Routes } from 'react-router'

import { HomePage, OurWork } from './containers'
import { Navbar } from './components'

import './App.scss'

const App = () => {
  return (
    <div className = 'app'>
        <Navbar />
        <div className = 'routes'>
            <Routes>
                <Route path = '/' element = {<HomePage />}></Route>
                <Route path = '/ourwork' element = {<OurWork />}></Route>
                  <Route path = '/ourwork/:projectName' element = {<Project />}></Route>
            </Routes>
        </div>
    </div>
  )
}

export default App
