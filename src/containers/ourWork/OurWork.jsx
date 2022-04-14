import React, { useEffect, useState} from 'react'

import { ContactSml, Footer, Works } from '../../components'

import { client, urlFor } from '../../client'

import './ourWork.scss'

const OurWork = () => {
  return (
    <div className = 'enjoy__ourWork'>
        <main>
            <Works />
            <ContactSml />
            <Footer />
        </main>
    </div>
  )
}

export default OurWork
