import React from "react";
import { FaVideo, FaComments, FaChartLine, FaRocket } from "react-icons/fa";

const FeatureCTA = () => {
  const features = [
    {
      icon: <FaVideo />,
      text: "Display your products through short videos and reels to attract more buyers with visual impact.",
      color: "#ffafbd"
    },
    {
      icon: <FaComments />,
      text: "Talk directly to potential buyers via chat or message and build trust instantly.",
      color: "#a1c4fd"
    },
    {
      icon: <FaChartLine />,
      text: "List your business and products for free and gain access to real-time engagement analytics.",
      color: "#84fab0"
    }
  ];

  return (
    <section className="feature-cta-section">
      {/* Features */}
      <div className="features-container">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div
              className="feature-icon"
              style={{ background: feature.color }}
            >
              {feature.icon}
            </div>
            <p>{feature.text}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="cta-banner">
        <h2>Start Selling on BuyLive Today!</h2>
        <button className="cta-button">
          Start Selling <FaRocket className="rocket-icon" />
        </button>
      </div>
    </section>
  );
};

export default FeatureCTA;

