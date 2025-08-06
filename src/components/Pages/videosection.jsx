import React from 'react'
import Header from '../Modules/header'
import Herosectionvideo from '../Modules/herosectionvideo'
import Trendingnow from '../Modules/trendingnow'
import Categories from '../Modules/categories'
import Testimonials from '../Modules/testimonials'
import Featuredsellers from '../Modules/featuredsellers'
import Footer from '../Modules/footer'
import ScrollToTop from '../Modules/scrolltotop'
import './videosection.css'

function videosection() {
  return (
    <div>
      <Header />
      <Herosectionvideo />
      <Trendingnow />
      <Categories />
      <Testimonials />
      <Featuredsellers />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default videosection
