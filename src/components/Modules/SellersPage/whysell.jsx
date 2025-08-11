import React from 'react'
import { FaRocket, FaBoxOpen, FaHandshake, FaChartLine } from "react-icons/fa";

function whysell() {

    const features = [
    {
      icon: (
    <div className="icon-circles" style={{ backgroundColor: "#0284C7" }}>
      <FaRocket color="#fff" size={28} />
    </div>
  ),
      title: "Reach Thousands of Buyers",
      description: "Promote your products to a wide audience."
    },
    {
      icon: (
    <div className="icon-circles" style={{ backgroundColor: "#16A34A" }}>
      <FaBoxOpen color="#fff" size={28} />
    </div>
  ),
      title: "Easy Product Listings",
      description: "Add, update, and manage products effortlessly."
    },
    {
      icon: (
    <div className="icon-circles" style={{ backgroundColor: "#9333EA" }}>
      <FaHandshake color="#fff" size={28} />
    </div>
  ),
      title: "Direct Buyer Contact",
      description: "Chat and connect instantly with potential buyers."
    },
    {
      icon: (
    <div className="icon-circles" style={{ backgroundColor: "#EA580C" }}>
      <FaChartLine color="#fff" size={28} />
    </div>
  ),
      title: "Grow Your Business",
      description: "Get insights and analytics to boost sales."
    }
  ];


  return (
    <div>
      <section className="why-sell-section">
      <h2>Why Sell on BuyLive ?</h2>
      <p className="why-sell-subtitle">
        Discover how BuyLive helps you showcase your products, reach new customers, 
        and boost sales — all through engaging videos.
      </p>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-cards">
            <div>{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
  )
}

export default whysell
