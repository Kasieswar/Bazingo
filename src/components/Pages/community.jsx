import React from 'react'
import './community.css'
import CommunityHero from '../Modules/Community/communityhero'
import Header from '../Modules/header'
import Footer from '../Modules/footer'
import Testimonials from '../Modules/testimonials'

function community() {
  return (
    <div>
       <Header />
        <CommunityHero />
        <Testimonials />
        <Footer />
    </div>
  )
}

export default community
