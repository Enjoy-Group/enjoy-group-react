import React from 'react'
import ReactDOMClient from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'


import App from './App.js'
import './index.css'

const container = document.getElementById('root')

const root = ReactDOMClient.createRoot(container)

root.render( 
    <Router>
        <ParallaxProvider>
            <App />
        </ParallaxProvider>
    </Router>
)