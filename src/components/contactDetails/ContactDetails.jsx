import React, { useEffect, useState } from 'react'
import { FiPhone } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'
import { HiOutlineLocationMarker } from 'react-icons/hi'

import { client } from '../../client'

import './contactDetails.scss'

const ContactDetails = ()=> {
  const [contact, setContact] = useState([])

  useEffect(() => {
    const query = '*[_type == "contactDetails"]'
    console.log('test')
    client.fetch(query)
      .then((res) => {
          setContact(res[0])
      })
  }, [])

  return (
    <div className = 'enjoy__contacDetails'>
        <div className = 'enjoy__contactDeails-phoneAndEmail'>
            <p><FiPhone color = '#39FF14' size = {24} />{contact.contactNumber}</p>
            <p><AiOutlineMail color = '#39FF14' size = {24} />{contact.email}</p>
        </div>

        <div className = 'enjoy__contactDetails-address'>
            <p><HiOutlineLocationMarker color = '#39FF14' size = {24} />{contact.address}</p>
        </div>
    </div>
  )
}

export default ContactDetails
