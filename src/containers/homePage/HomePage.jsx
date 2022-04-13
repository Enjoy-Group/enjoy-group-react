import React from 'react'
import { useInView } from 'react-hook-inview'

import { Hero, HeroDemo, WhoSml, FeaturedProjects, ContactSml, TrustedBy, Footer } from '../../components'

const HomePage = () => {
  const { ref, inView } = useInView();
  
  return (
    <div className = 'enjoy__homePage'>
        <header>
            <HeroDemo isInView = {inView}/>
            {/* <Hero /> */}
        </header>
        <main ref = {ref}>
            <div ref = {ref}></div>
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
