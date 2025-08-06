import React from 'react'
import { FaClipboardList, FaSearch, FaHandshake } from 'react-icons/fa';
import '../../Pages/quickmatch.css'

function howitworks() {
  return (
    <div className='how-section'>
      <div className="how-container">
        <h2 className="how-heading">How Our Bazingo Matching Platform Works</h2>
        <p className="how-subheading">Connect with verified sellers across India in three simple steps</p>

        <div className="steps-container">
          <div className="step-card">
            <div className="icon-circle"><FaClipboardList /></div>
            <h3>Post Your Requirement</h3>
            <p>Fill in what you're looking for and where it should be delivered.</p>
            <div className="step-number">1</div>
          </div>
          <div className="step-card">
            <div className="icon-circle"><FaSearch /></div>
            <h3>Get Seller Matches</h3>
            <p>We’ll instantly show you sellers who offer what you need.</p>
            <div className="step-number">2</div>
          </div>
          <div className="step-card">
            <div className="icon-circle"><FaHandshake /></div>
            <h3>Compare and Connect</h3>
            <p>Review seller profiles, compare, and start a chat instantly.</p>
            <div className="step-number">3</div>
          </div>
        </div>
</div>
        <div className="metrics-container">
          <div className="metric-card">
            <h3>5,000+</h3>
            <p>Matches Made</p>
          </div>
          <div className="metric-card">
            <h3>10,000+</h3>
            <p>Trusted by Users</p>
          </div>
          <div className="metric-card">
            <h3>30+</h3>
            <p>Supporting Cities</p>
          </div>
        
      </div>
    </div>
  )
}

export default howitworks
