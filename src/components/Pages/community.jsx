import React from 'react'
import './community.css'
import CommunityHero from '../Modules/Community/communityhero'
import Header from '../Modules/header'
import Footer from '../Modules/footer'
import Testimonials from '../Modules/testimonials'
import MentorsSection from '../Modules/Community/mentorssection'
import CommunitySection from '../Modules/Community/communitysection'


function community() {
  return (
    <div>
       <Header />
        <CommunityHero />
        <MentorsSection />
        <CommunitySection />
        <Testimonials />
        <Footer />
    </div>
  )
}

export default community
