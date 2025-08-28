import React from 'react';
import { TrendingUp, Shield, Truck, Package, Award, Clock } from 'lucide-react';
import '../../Pages/buyerpage.css';

const BuyerHero = () => {
  return (
    <section className="buyer-hero">
      <div className="buyer-hero-container">
        <div className="buyer-hero-content">
          <h2 className="buyer-hero-title">Discover Amazing Products</h2>
          <p className="buyer-hero-subtitle">Shop from thousands of verified sellers worldwide</p>
          <div className="buyer-hero-stats">
            <div className="buyer-stat-item">
              <TrendingUp className="buyer-stat-icon" />
              <div>
                <span className="buyer-stat-number">50K+</span>
                <span className="buyer-stat-label">Products</span>
              </div>
            </div>
            <div className="buyer-stat-item">
              <Shield className="buyer-stat-icon" />
              <div>
                <span className="buyer-stat-number">100%</span>
                <span className="buyer-stat-label">Secure</span>
              </div>
            </div>
            <div className="buyer-stat-item">
              <Truck className="buyer-stat-icon" />
              <div>
                <span className="buyer-stat-number">Fast</span>
                <span className="buyer-stat-label">Delivery</span>
              </div>
            </div>
          </div>
        </div>
        <div className="buyerhero-visual">
          <div className="buyerfloating-cards">
            <div className="floatings-card card-1">
              <Package className="cards-icon" />
              <span>Quality Products</span>
            </div>
            <div className="floatings-card card-2">
              <Award className="cards-icon" />
              <span>Verified Sellers</span>
            </div>
            <div className="floatings-card card-3">
              <Clock className="cards-icon" />
              <span>Quick Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyerHero;