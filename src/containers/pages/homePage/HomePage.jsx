import React from 'react'

import { Hero, WhoSml } from '../../../containers'

const HomePage = () => {
  return (
    <div className = 'enjoy__homePage'>
        <header>
            <Hero />
        </header>
        <main>
            <WhoSml />
        </main>
    </div>
  )
}

export default HomePage
