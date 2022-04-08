import React from 'react'
import { FiPhone } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'
import { HiOutlineLocationMarker } from 'react-icons/hi'

import './contactDetails.scss'

const ContactDetails = props => {
  return (
    <div className = 'enjoy__contacDetails'>
        <div className = 'enjoy__contactDeails-phoneAndEmail'>
            <p><FiPhone color = '#39FF14' />+012 345 6789</p>
            <p><AiOutlineMail color = '#39FF14' />info@theenjoygroup.com</p>
        </div>

        <div className = 'enjoy__contactDetails-address'>
            <p><HiOutlineLocationMarker color = '#39FF14' size = {24} />Adress Line 1, Address Line 2, City, Code</p>
        </div>
    </div>
  )
}

export default ContactDetails
