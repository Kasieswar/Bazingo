import React from 'react';
import Navbar from './navbar';

function Dashboard() {
  return (
    <div className="dashboard-layout">
      
      <Navbar />
      
      <div className="dashboard-content">
        <div className="content-wrapper">
          {/* Left Main Content */}
          <div className="main-content">
            {/* Welcome Section */}
            <div className="welcome-section">
              <h1 className="welcome-title">Welcome back, Kasi!</h1>
              <p className="welcome-subtitle">Here's what's happening with your store today.</p>
            </div>

            {/* Stats Cards Row */}
            <div className="stats-row">
              <div className="stat-card">
                <div className="stat-header">
                  <div className="stat-icon">
                    <i className="fas fa-eye"></i>
                  </div>
                  <div className="stat-change positive">0%</div>
                </div>
                <div className="stat-content">
                  <div className="stat-number">0</div>
                  <div className="stat-label">Total Views</div>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-header">
                  <div className="stat-icon">
                    <i className="fas fa-shopping-cart"></i>
                  </div>
                  <div className="stat-change positive">0%</div>
                </div>
                <div className="stat-content">
                  <div className="stat-number">0</div>
                  <div className="stat-label">Total Orders</div>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-header">
                  <div className="stat-icon">
                    <i className="fas fa-question-circle"></i>
                  </div>
                  <div className="stat-change new">0 New</div>
                </div>
                <div className="stat-content">
                  <div className="stat-number">0</div>
                  <div className="stat-label">Inquiries</div>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-header">
                  <div className="stat-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div className="stat-change live">3 Live</div>
                </div>
                <div className="stat-content">
                  <div className="stat-number">3/5</div>
                  <div className="stat-label">Products Live</div>
                </div>
              </div>
            </div>

            
            {/* Premium Upgrade Banner */}
            <div className="upgrade-banner">
              <div>
              <h3 className="upgrade-title">Upgrade to Premium & Get 3x More Leads!</h3>
              <div className="upgrade-features">
                <div className="feature">
                  <i className="fas fa-check"></i>
                  <span>Verified Badge</span>
                </div>
                <div className="feature">
                  <i className="fas fa-check"></i>
                  <span>Priority Support</span>
                </div>
                <div className="feature">
                  <i className="fas fa-check"></i>
                  <span>Featured Listings</span>
                </div>
                <div className="feature">
                  <i className="fas fa-check"></i>
                  <span>Advanced Analytics</span>
                </div>
              </div>
              <button className="upgrade-btn">Upgrade Now</button>
              </div>
              <div className="crown-icon">
                <i className='fas fa-crown'></i>
              </div>
            </div>

            {/* Recent Buyer Messages */}
            <div className="messages-section">
              <div className="section-header">
                <h3 className="section-title">Recent Buyer Messages</h3>
                <button className="view-all-btn">View All</button>
              </div>
              
              <div className="messages-list">
                <div className="message-item">
                  <div className="message-content">
                    <div className="message-header">
                      <span className="sender-name">Priya Sharma</span>
                      <span className="message-time">2 hours ago</span>
                    </div>
                    <p className="message-text">Interested in bulk order of smartphones. Can you provide wholesale pricing for 50 units ?</p>
                  </div>
                </div>

                <div className="message-item">
                  <div className="message-content">
                    <div className="message-header">
                      <span className="sender-name">Amit Patel</span>
                      <span className="message-time">10 hours ago</span>
                    </div>
                    <p className="message-text">Do you have warranty for the gaming laptop? Need it urgently for my office.</p>
                  </div>
                </div>

                <div className="message-item">
                  <div className="message-content">
                    <div className="message-header">
                      <span className="sender-name">Sneha Reddy</span>
                      <span className="message-time">1 day ago</span>
                    </div>
                    <p className="message-text">Can you ship to Bangalore ? What are the delivery charges for headphones?</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Buyer Leads */}
            <div className="buyer-leads-section">
              <div className="section-header">
                <h3 className="section-title">Buyer Leads</h3>
                <button className="update-preferences-btn">Update Preferences</button>
              </div>
              
              <div className="no-leads-content">
                <div className="search-icon">
                  <i className="fas fa-search"></i>
                </div>
                <h4 className="no-leads-title">No Relevant Leads Found</h4>
                <p className="no-leads-text">We're actively searching for buyers matching your products</p>
                <button className="view-recommended-btn">View Recommended Leads</button>
              </div>
            </div>

            {/* Active Services */}
            <div className="active-services-section">
              <div className="section-header">
                <h3 className="section-title">Active Services</h3>
              </div>
              
              <div className="services-grid">
                <div className="service-card">
                  <div className="service-icon sms">
                    <i className="fas fa-sms"></i>
                  </div>
                  <div className="service-content">
                    <h4 className="service-title">SMS Alerts</h4>
                    <span className="service-status active">Active</span>
                  </div>
                  <div className="service-settings">
                    <i className="fas fa-cog"></i>
                  </div>
                </div>

                <div className="service-card">
                  <div className="service-icon tender">
                    <i className="fas fa-file-contract"></i>
                  </div>
                  <div className="service-content">
                    <h4 className="service-title">Tender Alerts</h4>
                    <span className="service-status active">Active</span>
                  </div>
                  <div className="service-settings">
                    <i className="fas fa-cog"></i>
                  </div>
                </div>

                <div className="service-card">
                  <div className="service-icon notifications">
                    <i className="fas fa-bell"></i>
                  </div>
                  <div className="service-content">
                    <h4 className="service-title">Lead Notifications</h4>
                    <span className="service-status active">Active</span>
                  </div>
                  <div className="service-settings">
                    <i className="fas fa-cog"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Products */}
            <div className="products-section">
              <div className="section-header">
                <h3 className="section-title">Your Products</h3>
                <button className="add-product-btn">
                  <i className="fas fa-plus"></i>
                  Add New Product
                </button>
              </div>
              
              <div className="products-grid">
                <div className="product-card">
                  <div className="product-image">
                    <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmV8ZW58MHx8MHx8fDA%3D" alt="Smartphone" />
                    <div className="play-button">
                      <i className="fas fa-play"></i>
                    </div>
                  </div>
                  <div className="product-info">
                    <h4 className="product-name">Smartphone</h4>
                    <span className="product-views">5 Views</span>
                    <div className="product-actions">
                      <i className="fas fa-external-link-alt"></i>
                    </div>
                  </div>
                </div>

                <div className="product-card">
                  <div className="product-image">
                    <img src="https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bluetooth Speaker" />
                    <div className="play-button">
                      <i className="fas fa-play"></i>
                    </div>
                  </div>
                  <div className="product-info">
                    <h4 className="product-name">Bluetooth Speaker</h4>
                    <span className="product-views">3 Views</span>
                    <div className="product-actions">
                      <i className="fas fa-external-link-alt"></i>
                    </div>
                  </div>
                </div>

                <div className="product-card">
                  <div className="product-image">
                    <img src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Headset" />
                    <div className="play-button">
                      <i className="fas fa-play"></i>
                    </div>
                  </div>
                  <div className="product-info">
                    <h4 className="product-name">Headset</h4>
                    <span className="product-views">7 Views</span>
                    <div className="product-actions">
                      <i className="fas fa-external-link-alt"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Action Buttons */}
            <div className="bottom-actions">
              <button className="action-btn primary">
                <i className="fas fa-plus"></i>
                Add New Product
              </button>
              <button className="action-btn secondary">
                <i className="fas fa-chart-line"></i>
                Boost Visibility
              </button>
            </div>
          


          </div>

          {/* Right Sidebar */}
          <div className="right-sidebar">
            {/* Profile Summary */}
            <div className="profile-card">
              <h3 className="card-title">Profile Summary</h3>
              <div className="profile-info">
                <h4 className="profile-name">Kasi Eswar</h4>
                <div className="profile-category">
                  <i className="fas fa-circle"></i>
                  <span>Electronics</span>
                </div>
                
                <div className="profile-details">
                  <div className="detail-row">
                    <span className="detail-label">Phone number :</span>
                    <span className="detail-value">+91 7981189032</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Email :</span>
                    <span className="detail-value">eswar@gmail.com</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Status :</span>
                    <span className="detail-value status-active">Active</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Verification Status */}
            <div className="verification-card">
              <h3 className="card-title">Verification Status</h3>
              <div className="verification-list">
                <div className="verification-item verified">
                  <i className="fas fa-check-circle"></i>
                  <span>Phone Verified</span>
                  <i className="fas fa-check verification-check"></i>
                </div>
                <div className="verification-item verified">
                  <i className="fas fa-check-circle"></i>
                  <span>GST Verified</span>
                  <i className="fas fa-check verification-check"></i>
                </div>
                <div className="verification-item premium">
                  <i className="fas fa-star"></i>
                  <span>Premium Seller</span>
                  <button className="upgrade-badge">Upgrade</button>
                </div>
              </div>
            </div>

            {/* Tips for Success */}
            <div className="tips-card">
              <h3 className="card-title">Tips for Success</h3>
              <div className="tips-list">
                <div className="tip-item">
                  <div className="tip-icon">
                    <i className="fas fa-lightbulb"></i>
                  </div>
                  <div className="tip-content">
                    <h4 className="tip-title">Optimize Product Videos</h4>
                    <p className="tip-text">Use clean background & good lighting for better visibility.</p>
                  </div>
                </div>
                <div className="tip-item">
                  <div className="tip-icon">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <div className="tip-content">
                    <h4 className="tip-title">Boost your Listings</h4>
                    <p className="tip-text">Feature your products, get 3x more views than regular listings.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;