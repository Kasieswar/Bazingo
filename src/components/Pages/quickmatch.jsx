import React from 'react'
import QuickMatchHero from '../Modules/Quickmatch/quickmatchhero'
import Header from '../Modules/header'
import Footer from '../Modules/footer'
import './quickmatch.css'
import SuggestedMatches from '../Modules/Quickmatch/suggestedmatches'
import Testimonials from '../Modules/testimonials'
import HowItWorks from '../Modules/Quickmatch/howitworks'

function quickmatch() {
  return (
    <div>
        <Header />
        <QuickMatchHero />
        <SuggestedMatches />
        <HowItWorks />
        <Testimonials />
        <Footer />
    </div>
  )
}

export default quickmatch
