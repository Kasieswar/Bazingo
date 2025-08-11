import React from 'react'
import Header from '../Modules/header'
import SellerHero from '../Modules/SellersPage/sellerhero'
import Testimonials from '../Modules/testimonials'
import Footer from '../Modules/footer'
import '../Pages/sellerpage.css'
import WhySell from '../Modules/SellersPage/whysell'
import HowItWorks from '../Modules/SellersPage/howitwork'

function sellerpage() {
  return (
    <div>
      <Header />
      <SellerHero />
      <WhySell />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default sellerpage
