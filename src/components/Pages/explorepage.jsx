import React from 'react'
import Header from '../Modules/header'
import Footer from '../Modules/footer'
import ExploreCategories from '../Modules/Explore/explorecategories'
import CTABanner from '../Modules/Explore/ctabanner'
import ExploreHero from '../Modules/Explore/explorehero'

function ExplorePage() {
  return (
    <div>
      <Header />
      <ExploreHero />
      <ExploreCategories />
      <CTABanner />
      <Footer />
    </div>
  )
}

export default ExplorePage
