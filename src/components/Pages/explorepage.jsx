import React from 'react'
import Header from '../Modules/header'
import Footer from '../Modules/footer'
import CTABanner from '../Modules/Explore/ctabanner'
import ExploreHero from '../Modules/Explore/explorehero'
import ExploreProducts from '../Modules/Explore/exploreproducts'

function ExplorePage() {
  return (
    <div>
      <Header />
      <ExploreHero />
      <ExploreProducts />
      <CTABanner />
      <Footer />
    </div>
  )
}

export default ExplorePage
