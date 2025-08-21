import React from 'react';
import Navbar from './navbar';
import './buyerleads.css'

function BuyerLeads() {
  return (
    <div className="dashboard-layout">
      
      <Navbar />
      
      <div className="dashboard-content">
        <div className="content-wrapper">
          {/* Left Main Content */}
          <div className="main-content">
            {/* Buyer Leads Header */}
            <div className="leads-header">
              <h1 className="leads-title">Buyer Leads</h1>
              <p className="leads-subtitle">View and respond to real - time buying inquiries from potential customers</p>
            </div>

            {/* Filter Controls */}
            <div className="leads-filters">
              <div className="filter-row">
                <div className="filter-group">
                  <label className="filter-label">Location</label>
                  <div className="select-wrapper">
                    <select className="filter-select">
                      <option>Recommended</option>
                      <option>Mumbai</option>
                      <option>Delhi</option>
                      <option>Bangalore</option>
                    </select>
                    <i className="fas fa-chevron-down select-icon"></i>
                  </div>
                </div>

                <div className="filter-group">
                  <label className="filter-label">Category</label>
                  <div className="select-wrapper">
                    <select className="filter-select">
                      <option>Electronics</option>
                      <option>Mobile Phones</option>
                      <option>Laptops</option>
                      <option>Accessories</option>
                    </select>
                    <i className="fas fa-chevron-down select-icon"></i>
                  </div>
                </div>

                <div className="filter-group">
                  <label className="filter-label">Lead Type</label>
                  <div className="select-wrapper">
                    <select className="filter-select">
                      <option>All types</option>
                      <option>Bulk Order</option>
                      <option>Retail</option>
                      <option>Business</option>
                    </select>
                    <i className="fas fa-chevron-down select-icon"></i>
                  </div>
                </div>

                <div className="filter-group">
                  <label className="filter-label">Order Value</label>
                  <div className="select-wrapper">
                    <select className="filter-select">
                      <option>All values</option>
                      <option>Below ₹10,000</option>
                      <option>₹10,000 - ₹50,000</option>
                      <option>Above ₹50,000</option>
                    </select>
                    <i className="fas fa-chevron-down select-icon"></i>
                  </div>
                </div>
              </div>

              <div className="search-row">
                <div className="verified-checkbox">
                  <input type="checkbox" id="verified" className="checkbox-input" />
                  <label htmlFor="verified" className="checkbox-label">Only verified buyers</label>
                </div>

                <div className="time-filter">
                  <div className="select-wrapper">
                    <select className="filter-select">
                      <option>Last 24 hrs</option>
                      <option>Last 7 days</option>
                      <option>Last 30 days</option>
                    </select>
                    <i className="fas fa-chevron-down select-icon"></i>
                  </div>
                </div>

                <div className="search-container">
                  <input 
                    type="text" 
                    placeholder="Search keywords..."
                    className="search-input"
                  />
                  <button className="search-btn">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Leads List */}
            <div className="leads-list">
              {/* Lead Item 1 */}
              <div className="lead-card">
                <div className="lead-header">
                  <div className="company-info">
                    <div className="company-avatar">
                      <span>PE</span>
                    </div>
                    <div className="company-details">
                      <h3 className="company-name">Priya Electronics</h3>
                      <div className="location-info">
                        <i className="fas fa-map-marker-alt location-icon"></i>
                        <span className="location-text">Mumbai, Maharashtra</span>
                        <span className="verified-badge">Verified</span>
                      </div>
                    </div>
                  </div>
                  <div className="lead-actions">
                    <button className="contact-btn">
                      <i className="fas fa-phone"></i>
                      Contact Buyer
                    </button>
                    <button className="shortlist-btn">
                      <i className="fas fa-bookmark"></i>
                      Shortlist
                    </button>
                  </div>
                </div>
                
                <div className="lead-content">
                  <div className="requirement-info">
                    <h4 className="requirement-title">Requirement: Bulk Smartphones</h4>
                    <p className="requirement-desc">
                      Looking for 100 units of Android smartphones in the price range of ₹15,000-30,000. 
                      Need immediate delivery within 7 days.
                    </p>
                  </div>
                  
                  <div className="lead-meta">
                    <div className="meta-item">
                      <i className="fas fa-clock"></i>
                      <span>4 hours ago</span>
                    </div>
                    <div className="meta-item">
                      <i className="fas fa-rupee-sign"></i>
                      <span>₹ 15,00,000</span>
                      <span className="order-type bulk">Bulk Order</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lead Item 2 */}
              <div className="lead-card">
                <div className="lead-header">
                  <div className="company-info">
                    <div className="company-avatar">
                      <span>TS</span>
                    </div>
                    <div className="company-details">
                      <h3 className="company-name">TechCorp Solutions</h3>
                      <div className="location-info">
                        <i className="fas fa-map-marker-alt location-icon"></i>
                        <span className="location-text">Bangalore, Karnataka</span>
                        <span className="verified-badge">Verified</span>
                      </div>
                    </div>
                  </div>
                  <div className="lead-actions">
                    <button className="contact-btn">
                      <i className="fas fa-phone"></i>
                      Contact Buyer
                    </button>
                    <button className="shortlist-btn">
                      <i className="fas fa-bookmark"></i>
                      Shortlist
                    </button>
                  </div>
                </div>
                
                <div className="lead-content">
                  <div className="requirement-info">
                    <h4 className="requirement-title">Requirement: Gaming Laptops</h4>
                    <p className="requirement-desc">
                      Need 25 high-performance gaming laptops for our development team. Budget 
                      ₹80,000 - 1,00,000 per unit.
                    </p>
                  </div>
                  
                  <div className="lead-meta">
                    <div className="meta-item">
                      <i className="fas fa-clock"></i>
                      <span>12 hours ago</span>
                    </div>
                    <div className="meta-item">
                      <i className="fas fa-rupee-sign"></i>
                      <span>₹ 22,50,000</span>
                      <span className="order-type business">Business</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lead Item 3 */}
              <div className="lead-card">
                <div className="lead-header">
                  <div className="company-info">
                    <div className="company-avatar">
                      <span>ARS</span>
                    </div>
                    <div className="company-details">
                      <h3 className="company-name">Amit Retail Store</h3>
                      <div className="location-info">
                        <i className="fas fa-map-marker-alt location-icon"></i>
                        <span className="location-text">Delhi, Delhi</span>
                        <span className="verified-badge">Verified</span>
                      </div>
                    </div>
                  </div>
                  <div className="lead-actions">
                    <button className="contact-btn">
                      <i className="fas fa-phone"></i>
                      Contact Buyer
                    </button>
                    <button className="shortlist-btn">
                      <i className="fas fa-bookmark"></i>
                      Shortlist
                    </button>
                  </div>
                </div>
                
                <div className="lead-content">
                  <div className="requirement-info">
                    <h4 className="requirement-title">Requirement: Wireless Headphones</h4>
                    <p className="requirement-desc">
                      Looking for premium wireless headphones for retail. Need 50 units with good 
                      profit margins.
                    </p>
                  </div>
                  
                  <div className="lead-meta">
                    <div className="meta-item">
                      <i className="fas fa-clock"></i>
                      <span>18 hours ago</span>
                    </div>
                    <div className="meta-item">
                      <i className="fas fa-rupee-sign"></i>
                      <span>₹ 2,50,000</span>
                      <span className="order-type retail">Retail</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Load More Button */}
            <div className="load-more-container">
              <button className="load-more-btn">Load More Leads</button>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="right-sidebar">
            {/* Tips for Converting Leads */}
            <div className="tips-card">
              <h3 className="card-title">Tips for Converting Leads</h3>
              <div className="tips-list">
                <div className="tip-item">
                  <i className="fas fa-check tip-check"></i>
                  <span>Timely response increases chances of closing the deal</span>
                </div>
                <div className="tip-item">
                  <i className="fas fa-check tip-check"></i>
                  <span>Include best price and quantity-based offers to attract buyers</span>
                </div>
                <div className="tip-item">
                  <i className="fas fa-check tip-check"></i>
                  <span>Buyers trust sellers who mention exact delivery timelines</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyerLeads;