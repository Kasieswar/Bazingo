import React from 'react'

function quickmatchhero() {
  return (
    <div>
      <section className="quickmatch-hero">
      <div className="hero-container-quick">
        {/* Left Side Content */}
        <div className="hero-text">
          <h2>
            Find Buyers &<br />Sellers Quickly<br />
            with <span>QuickMatch</span>
          </h2>
          <p>
            Post your requirements and get matched with trusted sellers who can fulfill your needs.
          </p>
          <button className="hero-btn">Search Requirements</button>
        </div>

        {/* Right Side Form */}
        <div className="hero-form">
          <h3>Post Requirement</h3>
          <form>
            <input type="text" placeholder="Enter Product name..." />
            <select>
              <option>Electronics</option>
              <option>Furniture</option>
              <option>Kitchen</option>
              <option>Fashion</option>
              <option>Beauty</option>
            </select>
            <input type="text" placeholder="Preferred Delivery Location" />
            <button type="submit">Get Matches</button>
          </form>
        </div>
      </div>
    </section>
    </div>
  )
}

export default quickmatchhero
