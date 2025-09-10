import React from 'react';
import { ChevronRight, Home, Sparkles, Zap, Star } from 'lucide-react';
import '../../Pages/explorepage.css';

const ExploreHero = () => {
  return (
    <section className="heros-section">
      {/* Animated Background Elements */}
      <div className="background-decorations">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
        <div className="floating-orb orb-4"></div>
        <div className="floating-orb orb-5"></div>
        
        {/* Animated Particles */}
        <div className="particle particle-1"><Sparkles size={16} /></div>
        <div className="particle particle-2"><Zap size={14} /></div>
        <div className="particle particle-3"><Star size={12} /></div>
        <div className="particle particle-4"><Sparkles size={18} /></div>
        <div className="particle particle-5"><Star size={10} /></div>

        {/* 3D Geometric Shapes */}
        <div className="geometric-shape shape-1"></div>
        <div className="geometric-shape shape-2"></div>
        <div className="geometric-shape shape-3"></div>
      </div>
                    
      <div className="containerss">
        

        {/* Hero Content */}
        <div className="heros-content">
          <div className="heroes-badge">
            <Sparkles className="badges-icon" />
            <span>Discover Amazing Products</span>
          </div>
          
          <h1 className="heroes-title">
            <span className="title-line">Explore Our</span>
            <span className="title-line title-highlight">Premium Categories</span>
            <div className="title-underline"></div>
          </h1>
          
          <p className="heroes-description">
            Dive into a world of premium products from verified suppliers. 
            <br />
            <span className="description-highlight">Your perfect product awaits in our curated collection</span>
          </p>
          
          <div className="heroes-stats">
            <div className="statz-item">
              <div className="statz-number">10K+</div>
              <div className="statz-label">Products</div>
            </div>
            <div className="statz-divider"></div>
            <div className="statz-item">
              <div className="statz-number">500+</div>
              <div className="statz-label">Categories</div>
            </div>
            <div className="statz-divider"></div>
            <div className="statz-item">
              <div className="statz-number">24/7</div>
              <div className="statz-label">Support</div>
            </div>
          </div>
          
          <div className="heroes-actions">
            <button className="cta-button primary">
              <span>Start Exploring</span>
              <ChevronRight className="button-icon" />
            </button>
            <button className="cta-button secondary">
              <span>View Catalog</span>
            </button>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default ExploreHero;