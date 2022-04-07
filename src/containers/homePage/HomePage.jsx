import React from 'react'

import { Hero, HeroDemo, WhoSml, FeaturedProjects, ContactSml, TrustedBy, Footer } from '../../components'

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
            <Footer />
        </main>
    </div>
  )
}

export default HomePage
