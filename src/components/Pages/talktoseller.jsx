import React from 'react'
import Header from '../Modules/header'
import TrustedSellers from '../Modules/trustedsellers'
import Testimonials from '../Modules/testimonials'
import Footer from '../Modules/footer'
import '../Pages/talktoseller.css'
import SellerAssistSection from '../Modules/sellerassistsection'

function talktoseller() {
  return (
    <div>
      <Header />
      <TrustedSellers />
      <SellerAssistSection />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default talktoseller
