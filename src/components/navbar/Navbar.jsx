import React from 'react'
import { FiMenu } from 'react-icons/fi'
import { CgMenu } from 'react-icons/cg'
import { IoMenuOutline } from 'react-icons/io5'

import './navbar.scss'

const Navbar = () => {
  return (
    <nav className = 'enjoy__navbar'>
        <div className = 'enjoy__navbar-container'>
            <CgMenu color = '#39FF14' size = {64} fontWeight = {100}/>
        </div>
    </nav>
  )
}

export default Navbar
