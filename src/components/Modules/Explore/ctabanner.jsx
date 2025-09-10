import React from 'react';
import '../../Pages/explorepage.css';
import { MessageCircle, Zap } from 'lucide-react';

const CTABanner = () => {
  return (
    <section className="cta-banner">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-title">
            Didn't Find What You're Looking For?
          </h2>
          <p className="cta-description">
            Let us help you connect with the right suppliers or find exactly what you need
          </p>
          
          <div className="cta-buttons">
            <button className="cta-btn cta-btn-primary">
              <Zap className="cta-btn-icon" />
              Try QuickMatch
            </button>
            <button className="cta-btn cta-btn-secondary">
              <MessageCircle className="cta-btn-icon" />
              Talk to Seller
            </button>
          </div>

          <div className="cta-footer">
            <p className="cta-footer-text">
              Over 95% of our QuickMatch requests get responses within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;