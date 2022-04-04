import React from 'react'

import { Hero, WhoSml, FeaturedProjects, ContactSml } from '../../components'

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
        </main>
    </div>
  )
}

export default HomePage
