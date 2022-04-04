import React from 'react'

import { Hero, WhoSml, FeaturedProjects } from '../../components'

const HomePage = () => {
  return (
    <div className = 'enjoy__homePage'>
        <header>
            <Hero />
        </header>
        <main>
            <WhoSml />
            <FeaturedProjects />
        </main>
    </div>
  )
}

export default HomePage
