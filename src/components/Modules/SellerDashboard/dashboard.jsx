import React from 'react';
import Navbar from './navbar';
import './dashboard.css'

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
            <div className="stats-rows">
              <div className="stats-cards">
                <div className="stats-headers">
                  <div className="stats-icons">
                    <i className="fas fa-eye"></i>
                  </div>
                  <div className="stats-change positive">0%</div>
                </div>
                <div className="stats-contents">
                  <div className="stats-numbers">0</div>
                  <div className="stats-labels">Total Views</div>
                </div>
              </div>

              <div className="stats-cards">
                <div className="stats-headers">
                  <div className="stats-icons">
                    <i className="fas fa-shopping-cart"></i>
                  </div>
                  <div className="stats-change positive">0%</div>
                </div>
                <div className="stats-contents">
                  <div className="stats-numbers">0</div>
                  <div className="stats-labels">Total Orders</div>
                </div>
              </div>

              <div className="stats-cards">
                <div className="stats-headers">
                  <div className="stats-icons">
                    <i className="fas fa-question-circle"></i>
                  </div>
                  <div className="stats-change new">0 New</div>
                </div>
                <div className="stats-contents">
                  <div className="stats-numbers">0</div>
                  <div className="stats-labels">Inquiries</div>
                </div>
              </div>

              <div className="stats-cards">
                <div className="stats-headers">
                  <div className="stats-icons">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div className="stats-change live">3 Live</div>
                </div>
                <div className="stats-contents">
                  <div className="stats-numbers">3/5</div>
                  <div className="stats-labels">Products Live</div>
                </div>
              </div>
            </div>

            
            {/* Premium Upgrade Banner */}
            <div className="upgrade-banners">
              <div>
              <h3 className="upgrade-titles">Upgrade to Premium & Get 3x More Leads!</h3>
              <div className="upgrades-features">
                <div className="features">
                  <i className="fas fa-check"></i>
                  <span>Verified Badge</span>
                </div>
                <div className="features">
                  <i className="fas fa-check"></i>
                  <span>Priority Support</span>
                </div>
                <div className="features">
                  <i className="fas fa-check"></i>
                  <span>Featured Listings</span>
                </div>
                <div className="features">
                  <i className="fas fa-check"></i>
                  <span>Advanced Analytics</span>
                </div>
              </div>
              <button className="upgrade-btns">Upgrade Now</button>
              </div>
              <div className="crown-icons">
                <i className='fas fa-crown'></i>
              </div>
            </div>

            {/* Recent Buyer Messages */}
            <div className="messages-sections">
              <div className="section-headers">
                <h3 className="section-titles">Recent Buyer Messages</h3>
                <button className="view-all-btns">View All</button>
              </div>
              
              <div className="messages-lists">
                <div className="message-items">
                  <div className="message-contents">
                    <div className="message-headers">
                      <span className="sender-names">Priya Sharma</span>
                      <span className="message-times">2 hours ago</span>
                    </div>
                    <p className="message-texts">Interested in bulk order of smartphones. Can you provide wholesale pricing for 50 units ?</p>
                  </div>
                </div>

                <div className="message-items">
                  <div className="message-contents">
                    <div className="message-headers">
                      <span className="sender-names">Amit Patel</span>
                      <span className="message-times">10 hours ago</span>
                    </div>
                    <p className="message-texts">Do you have warranty for the gaming laptop? Need it urgently for my office.</p>
                  </div>
                </div>

                <div className="message-items">
                  <div className="message-contents">
                    <div className="message-headers">
                      <span className="sender-names">Sneha Reddy</span>
                      <span className="message-times">1 day ago</span>
                    </div>
                    <p className="message-texts">Can you ship to Bangalore ? What are the delivery charges for headphones?</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Buyer Leads */}
            <div className="buyer-leads-sections">
              <div className="section-headers">
                <h3 className="section-titles">Buyer Leads</h3>
                <button className="update-preferences-btns">Update Preferences</button>
              </div>
              
              <div className="no-leads-contents">
                <div className="search-icons">
                  <i className="fas fa-search"></i>
                </div>
                <h4 className="no-leads-titles">No Relevant Leads Found</h4>
                <p className="no-leads-texts">We're actively searching for buyers matching your products</p>
                <button className="view-recommended-btns">View Recommended Leads</button>
              </div>
            </div>

            {/* Active Services */}
            <div className="active-services-sections">
              <div className="section-headers">
                <h3 className="section-titles">Active Services</h3>
              </div>
              
              <div className="services-grids">
                <div className="service-cards">
                  <div className="service-icons sms">
                    <i className="fas fa-sms"></i>
                  </div>
                  <div className="service-contents">
                    <h4 className="service-titles">SMS Alerts</h4>
                    <span className="services-status active">Active</span>
                  </div>
                  <div className="services-settings">
                    <i className="fas fa-cog"></i>
                  </div>
                </div>

                <div className="service-cards">
                  <div className="service-icons tender">
                    <i className="fas fa-file-contract"></i>
                  </div>
                  <div className="service-contents">
                    <h4 className="service-titles">Tender Alerts</h4>
                    <span className="services-status active">Active</span>
                  </div>
                  <div className="services-settings">
                    <i className="fas fa-cog"></i>
                  </div>
                </div>

                <div className="service-cards">
                  <div className="service-icons notifications">
                    <i className="fas fa-bell"></i>
                  </div>
                  <div className="service-contents">
                    <h4 className="service-titles">Lead Notifications</h4>
                    <span className="services-status active">Active</span>
                  </div>
                  <div className="services-settings">
                    <i className="fas fa-cog"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Products */}
            <div className="products-sections">
              <div className="section-headers">
                <h3 className="section-titles">Your Products</h3>
                <button className="add-product-btns">
                  <i className="fas fa-plus"></i>
                  Add New Product
                </button>
              </div>
              
              <div className="products-grids">
                <div className="product-cards">
                  <div className="product-images">
                    <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmV8ZW58MHx8MHx8fDA%3D" alt="Smartphone" />
                    <div className="play-buttons">
                      <i className="fas fa-play"></i>
                    </div>
                  </div>
                  <div className="product-infos">
                    <h4 className="product-names">Smartphone</h4>
                    <span className="products-views">5 Views</span>
                    <div className="products-actions">
                      <i className="fas fa-external-link-alt"></i>
                    </div>
                  </div>
                </div>

                <div className="product-cards">
                  <div className="product-images">
                    <img src="https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bluetooth Speaker" />
                    <div className="play-buttons">
                      <i className="fas fa-play"></i>
                    </div>
                  </div>
                  <div className="product-infos">
                    <h4 className="product-names">Bluetooth Speaker</h4>
                    <span className="products-views">3 Views</span>
                    <div className="products-actions">
                      <i className="fas fa-external-link-alt"></i>
                    </div>
                  </div>
                </div>

                <div className="product-cards">
                  <div className="product-images">
                    <img src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Headset" />
                    <div className="play-buttons">
                      <i className="fas fa-play"></i>
                    </div>
                  </div>
                  <div className="product-infos">
                    <h4 className="product-names">Headset</h4>
                    <span className="products-views">7 Views</span>
                    <div className="products-actions">
                      <i className="fas fa-external-link-alt"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Action Buttons */}
            <div className="bottoms-actions">
              <button className="action-btns primarys">
                <i className="fas fa-plus"></i>
                Add New Product
              </button>
              <button className="action-btns secondarys">
                <i className="fas fa-chart-line"></i>
                Boost Visibility
              </button>
            </div>
          


          </div>

          {/* Right Sidebar */}
          <div className="right-sidebar">
            {/* Profile Summary */}
            <div className="profile-cards">
              <h3 className="card-titles">Profile Summary</h3>
              <div className="profile-infos">
                <h4 className="profile-names">Kasi Eswar</h4>
                <div className="profile-categorys">
                  <i className="fas fa-circle"></i>
                  <span>Electronics</span>
                </div>
                
                <div className="profiles-details">
                  <div className="detail-rows">
                    <span className="detail-labels">Phone number :</span>
                    <span className="detail-values">+91 7981189032</span>
                  </div>
                  <div className="detail-rows">
                    <span className="detail-labels">Email :</span>
                    <span className="detail-values">eswar@gmail.com</span>
                  </div>
                  <div className="detail-rows">
                    <span className="detail-labels">Status :</span>
                    <span className="detail-values status-active">Active</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Verification Status */}
            <div className="verification-cards">
              <h3 className="card-titles">Verification Status</h3>
              <div className="verification-lists">
                <div className="verification-items verified">
                  <i className="fas fa-check-circle"></i>
                  <span>Phone Verified</span>
                  <i className="fas fa-check verification-checks"></i>
                </div>
                <div className="verification-items verified">
                  <i className="fas fa-check-circle"></i>
                  <span>GST Verified</span>
                  <i className="fas fa-check verification-checks"></i>
                </div>
                <div className="verification-items premium">
                  <i className="fas fa-star"></i>
                  <span>Premium Seller</span>
                  <button className="upgrade-badges">Upgrade</button>
                </div>
              </div>
            </div>

            {/* Tips for Success */}
            <div className="tips-cards">
              <h3 className="card-titles">Tips for Success</h3>
              <div className="tips-lists">
                <div className="tip-items">
                  <div className="tip-icons">
                    <i className="fas fa-lightbulb"></i>
                  </div>
                  <div className="tip-contents">
                    <h4 className="tip-titles">Optimize Product Videos</h4>
                    <p className="tip-texts">Use clean background & good lighting for better visibility.</p>
                  </div>
                </div>
                <div className="tip-items">
                  <div className="tip-icons">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <div className="tip-contents">
                    <h4 className="tip-titles">Boost your Listings</h4>
                    <p className="tip-texts">Feature your products, get 3x more views than regular listings.</p>
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