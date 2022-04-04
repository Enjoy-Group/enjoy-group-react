import React from 'react'
import { Route, Routes } from 'react-router'

import { HomePage } from './containers'
import { Navbar } from './components'

import './App.css'

const App = () => {
  return (
    <div className = 'app'>
        <Navbar />
        <div className = 'routes'>
            <Routes>
                <Route path = '/' element = {<HomePage />}></Route>
            </Routes>
        </div>
    </div>
  )
}

export default App
