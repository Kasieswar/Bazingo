import React from 'react'
import rafiki from '../../images/rafiki.png'

function communityhero() {
  return (
    <div>
      <section className="community-hero">
      <div className="hero-container-community">
        {/* Left Side Content */}
        <div className="hero-texts">
          <h2>
            Join the BuyLive<br />
            <span>Community</span>
          </h2>
          <p>
            Learn, share, and grow together — with other buyers and sellers.
          </p>
          
            <button className="primary-hero-btn">Start a Discussion</button>
            <button className="secondary-hero-btn">Browse Forums</button>
          
        </div>

        {/* Right Side illustration */}
        <div className="illustration">
          <img src={rafiki} alt="Illustration" />
        </div>
      </div>
    </section>
    </div>
  )
}

export default communityhero
