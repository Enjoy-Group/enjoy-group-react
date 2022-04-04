import React from 'react'

import { Hero, WhoSml, FeaturedProjects, ContactSml, TrustedBy } from '../../components'

const HomePage = () => {
  return (
    <div className = 'enjoy__homePage'>
        <header>
            <Hero />
        </header>
        <main>
            <WhoSml />
            <FeaturedProjects />
            <ContactSml />
            <TrustedBy />
        </main>
    </div>
  )
}

export default HomePage
