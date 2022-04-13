import React, { useState} from 'react'
import { CgMenu, CgClose } from 'react-icons/cg'
import { VscClose } from 'react-icons/vsc'
import { motion } from 'framer-motion'


import ContactDetails from '../contactDetails/ContactDetails'

import './navbar.scss'

const links = [
  'home',
  'who we are',
  'our work',
  'careers'
]

const Navbar = () => {
  const [ toggle, setToggle ] = useState(false)
  const [ animateClose, setAnimateClose ] = useState({})

  function handleClose(){
    setAnimateClose({width: '0%', opacity: [0.99, 0]})

    setTimeout(() => {
      setToggle(false)
      setAnimateClose({})
    }, 500)
  }

  return (
    <nav className = 'enjoy__navbar'>
        <div className = 'enjoy__navbar-container'>
            <CgMenu color = '#39FF14' size = {64} fontWeight = {100} onClick = {() => setToggle(true)}/>
            {toggle && (
                <motion.div 
                  className = 'enjoy__navbar-container_menu ' 
                  whileInView = {{opacity: [0, 0.99]}} initial = {{opacity: 0}}
                  animate = {animateClose} 
                  transition = {{duration: 0.5, ease: 'easeIn'}}
                  >
                    <div className = 'enjoy__navbar-container_menu-links'>
                        {links.map((link, index) => (
                          <a key = {index}><h1>{link}</h1></a>
                        ))}
                    </div>
                    <div className = 'enjoy__navbar-container_menu-contact'>
                        <h2>get in touch</h2>
                        <ContactDetails />
                    </div>
                    <div className = 'enjoy__navbar-container_menu-close' onClick = {() => handleClose()}>
                        <VscClose color = {'#39FF14'} size = {64} />
                    </div>
                </motion.div>
            )}
        </div>
    </nav>
  )
}

export default Navbar
