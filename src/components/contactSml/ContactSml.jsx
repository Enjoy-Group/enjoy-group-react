import react, { useEffect, useState } from 'react'
import { FiPhone } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'
import { HiOutlineLocationMarker } from 'react-icons/hi'

import { ContactDetails } from '..'

import './contactSml.scss'
import { client } from '../../client'

const ContactSml = ({dark}) => {
  const [contact, setContact] = useState([])

  useEffect(() => {
    const query = '*[_type == "contactDetails"]'

    client.fetch(query)
    .then((res) => {
        setContact(res[0])
    })
  }, [])

  return (
    <section className = 'enjoy__contactSml' style = { dark ? {background: '#000'} : {background: 'var(--color-offBlack)'}}>
        <div className = 'enjoy__contactSml-container'>
            <div className = 'enjoy__contactSml-left'>
                <div className = 'enjoy__contactSml-left_heading'>
                    <h2>let's connect</h2>
                </div>

                <div className = 'enjoy__contactSml-left_content'>
                    <div className = 'enjoy__contactSml-left_content-phoneAndEmail'>
                        <p><FiPhone color = '#39FF14' size = {24} />{contact.contactNumber}</p>
                        <p><AiOutlineMail color = '#39FF14' size = {24} />{contact.email}</p>
                    </div>

                    <div className = 'enjoy__contactSml-left_content-address'>
                        <p><HiOutlineLocationMarker color = '#39FF14' size = {24} />{contact.address}</p>
                    </div>
                    {/* <ContactDetails /> */}
                </div>
            </div>

            <div className = 'enjoy__contactSml-right'>
                <form className = 'enjoy__contactSml-right_form'>
                    <div className = 'enjoy__contactSml-right_form-name'>
                        <input placeholder = 'First Name' type = 'text' required />
                        <input placeholder = 'Surname' type = 'text' required/>
                    </div>

                    <div className = 'enjoy__contactSml-right_form-details'>
                        <input placeholder = 'Email Address' type = 'email' required />
                        <input placeholder = 'Company(Optional)' type = 'text' />
                    </div>

                    <div className = 'enjoy__contactSml-right_form-message'>
                        <textarea placeholder = 'Start Typing'>

                        </textarea>
                    </div>

                    <div className = 'enjoy__constactSml-right_form-submit'>
                        <input type = 'submit' value = 'send message' />
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default ContactSml
