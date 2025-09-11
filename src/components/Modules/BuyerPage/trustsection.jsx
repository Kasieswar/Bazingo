import React from 'react';
import { Shield, Award, Truck, Heart, CreditCard, Headphones, RotateCcw, CheckCircle } from 'lucide-react';
import '../../Pages/buyerpage.css';

const TrustSection = () => {
  const trustFeatures = [
    {
      icon: <Shield className="trust-icon" />,
      title: "Secure Payments",
      description: "Your payment information is protected with bank-level security and SSL encryption",
      color: "#667eea"
    },
    {
      icon: <Award className="trust-icon" />,
      title: "Verified Sellers",
      description: "All sellers are thoroughly vetted and verified for quality and authenticity",
      color: "#8b5cf6"
    },
    {
      icon: <Truck className="trust-icon" />,
      title: "Fast Delivery",
      description: "Get your products delivered quickly with real-time tracking updates",
      color: "#10b981"
    },
    {
      icon: <Heart className="trust-icon" />,
      title: "Satisfaction Guarantee",
      description: "Not happy with your purchase? Get a full refund within 30 days",
      color: "#ef4444"
    }
  ];

  const additionalFeatures = [
    {
      icon: <CreditCard />,
      title: "Multiple Payment Options",
      description: "Credit cards, PayPal, digital wallets"
    },
    {
      icon: <Headphones />,
      title: "24/7 Customer Support",
      description: "Always here to help via chat, email, or phone"
    },
    {
      icon: <RotateCcw />,
      title: "Easy Returns",
      description: "Hassle-free return process with prepaid labels"
    },
    {
      icon: <CheckCircle />,
      title: "Quality Assurance",
      description: "Every product meets our high quality standards"
    }
  ];

  return (
    <section className="trust-sectionz">
      <div className="trust-container">
        <div className="trust-headerz">
          <h3 className="section-titlezz">Why Shop with Bazingo?</h3>
          <p className="section-subtitle">
            Join millions of satisfied customers who trust us for their shopping needs
          </p>
        </div>

        <div className="trust-features-main">
          {trustFeatures.map((feature, index) => (
            <div key={index} className="trust-feature-main" style={{'--feature-color': feature.color}}>
              <div className="trust-icon-container">
                {feature.icon}
                <div className="trust-icon-bg"></div>
              </div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
              <div className="trust-feature-decoration"></div>
            </div>
          ))}
        </div>

        <div className="trust-stats">
          <div className="stat-card">
            <div className="stat-number">2M+</div>
            <div className="stat-label">Happy Customers</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">50K+</div>
            <div className="stat-label">Products Sold</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">99.8%</div>
            <div className="stat-label">Satisfaction Rate</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support Available</div>
          </div>
        </div>

        <div className="additional-features">
          <h4 className="additional-title">More Reasons to Choose Bazingo</h4>
          <div className="additional-grid">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="additional-feature">
                <div className="additional-icon">
                  {feature.icon}
                </div>
                <div className="additional-content">
                  <h5>{feature.title}</h5>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="trust-badges">
          <div className="badge-item">
            <span className="badge-text">SSL Secured</span>
          </div>
          <div className="badge-item">
            <span className="badge-text">Money Back Guarantee</span>
          </div>
          <div className="badge-item">
            <span className="badge-text">Trusted by 2M+ Users</span>
          </div>
          <div className="badge-item">
            <span className="badge-text">Award Winning Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;