import React from 'react'

function herosectionvideo() {
  return (
    <div>
    <section className="hero-section">
      <div className="hero-container">
        {/* Content positioned on the right */}
        <div className="hero-content">
          <h1 className="hero-title">
            Discover Trending Products<br />
            Through Short Videos
          </h1>
          
          <p className="hero-description">
            Watch reels, explore products, and connect directly with sellers – all in one place.
          </p>
          
          <div className="heros-features">
            <div className="feature-items">
              <span className="feature-icons">🎬</span>
              <span className="feature-texts">Watch Product Reels</span>
            </div>
            
            <div className="feature-items">
              <span className="feature-icons">🛍️</span>
              <span className="feature-texts">Get Real Insights Before You Buy</span>
            </div>
            
            <div className="feature-items">
              <span className="feature-icons">💬</span>
              <span className="feature-texts">Talk Directly to the Seller</span>
            </div>
          </div>
          
          <div className="hero-buttons">
            <button className="btn-primary">
              Explore Products
            </button>
            <button className="btn-secondary">
              Talk to Seller
            </button>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default herosectionvideo
