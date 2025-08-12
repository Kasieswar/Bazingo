import React from 'react'
import Header from '../Modules/header'
import SellerHero from '../Modules/SellersPage/sellerhero'
import Testimonials from '../Modules/testimonials'
import Footer from '../Modules/footer'
import '../Pages/sellerpage.css'
import WhySell from '../Modules/SellersPage/whysell'
import HowItWorks from '../Modules/SellersPage/howitwork'
import TestimonialFaq from '../Modules/SellersPage/testimonialfaq'
import FeatureCTA from '../Modules/SellersPage/Featurecta'


function sellerpage() {
  return (
    <div>
      <Header />
      <SellerHero />
      <WhySell />
      <HowItWorks />
      <TestimonialFaq />
      <Testimonials />
      <FeatureCTA />
      <Footer />
    </div>
  )
}

export default sellerpage
