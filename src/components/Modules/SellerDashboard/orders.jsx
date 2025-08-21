import React from 'react';
import Navbar from './navbar';
import './orders.css'

function Orders() {
  return (
    <div className="dashboard-layout">
      
      <Navbar />
      
      <div className="dashboard-content">
        <div className="content-wrapper">
          {/* Left Main Content */}
          <div className="main-contents">
            {/* Orders Header */}
            <div className="orders-header">
              <h1 className="orders-title">Orders</h1>
              <p className="orders-subtitle">Track and manage all your buyer orders from pending to fulfilled</p>
            </div>

            {/* Search and Filters */}
            <div className="orders-controls">
              <div className="search-container">
                <i className="fas fa-search search-icon"></i>
                <input 
                  type="text" 
                  placeholder="Search by Product, Buyer, Order"
                  className="search-input"
                />
              </div>
              
              <div className="filter-controls">
                <div className="filter-dropdown">
                  <select className="filter-select">
                    <option>All Orders</option>
                    <option>Pending</option>
                    <option>Shipped</option>
                    <option>Delivered</option>
                  </select>
                  <i className="fas fa-chevron-down dropdown-icon"></i>
                </div>
                
                <div className="filter-dropdown">
                  <select className="filter-select">
                    <option>Newest First</option>
                    <option>Oldest First</option>
                  </select>
                  <i className="fas fa-chevron-down dropdown-icon"></i>
                </div>
                
                <div className="date-filter">
                  <input type="text" placeholder="dd-mm-yyyy" className="date-input" />
                  <i className="fas fa-calendar calendar-icon"></i>
                </div>
              </div>
            </div>

            {/* Orders Table */}
            <div className="orders-table-container">
              <table className="orders-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Product</th>
                    <th>Buyer</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="order-row">
                    <td className="order-id">#BZ-2024-001</td>
                    <td className="product-info">
                      <div className="product-name">Smartphone</div>
                      <div className="product-qty">Qty: 1</div>
                    </td>
                    <td className="buyer-name">Priya Sharma</td>
                    <td className="order-date">15 July, 2025</td>
                    <td>
                      <span className="status-badge pending">Pending</span>
                    </td>
                    <td className="actions-cell">
                      <button className="action-btn view-btn">
                        <i className="fas fa-eye"></i>
                      </button>
                      <button className="action-btn edit-btn">
                        <i className="fas fa-edit"></i>
                      </button>
                      <button className="action-btn download-btn">
                        <i className="fas fa-download"></i>
                      </button>
                    </td>
                  </tr>
                  
                  <tr className="order-row">
                    <td className="order-id">#BZ-2024-002</td>
                    <td className="product-info">
                      <div className="product-name">Bluetooth Speaker</div>
                      <div className="product-qty">Qty: 1</div>
                    </td>
                    <td className="buyer-name">Sneha Gupta</td>
                    <td className="order-date">13 July, 2025</td>
                    <td>
                      <span className="status-badge shipped">Shipped</span>
                    </td>
                    <td className="actions-cell">
                      <button className="action-btn view-btn">
                        <i className="fas fa-eye"></i>
                      </button>
                      <button className="action-btn edit-btn">
                        <i className="fas fa-edit"></i>
                      </button>
                      <button className="action-btn download-btn">
                        <i className="fas fa-download"></i>
                      </button>
                    </td>
                  </tr>
                  
                  <tr className="order-row">
                    <td className="order-id">#BZ-2024-003</td>
                    <td className="product-info">
                      <div className="product-name">Headset</div>
                      <div className="product-qty">Qty: 1</div>
                    </td>
                    <td className="buyer-name">Amit Patel</td>
                    <td className="order-date">10 July, 2025</td>
                    <td>
                      <span className="status-badge delivered">Delivered</span>
                    </td>
                    <td className="actions-cell">
                      <button className="action-btn view-btn">
                        <i className="fas fa-eye"></i>
                      </button>
                      <button className="action-btn edit-btn">
                        <i className="fas fa-edit"></i>
                      </button>
                      <button className="action-btn download-btn">
                        <i className="fas fa-download"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="right-sidebar">
            {/* Order Tips */}
            <div className="tips-card">
              <h3 className="card-title">
                <i className="fas fa-lightbulb tip-icon"></i>
                Order Tips
              </h3>
              <div className="tips-list">
                <div className="tip-item">
                  <i className="fas fa-check tip-check"></i>
                  <span>Use clean formatting for invoices</span>
                </div>
                <div className="tip-item">
                  <i className="fas fa-check tip-check"></i>
                  <span>Update order status quickly</span>
                </div>
                <div className="tip-item">
                  <i className="fas fa-check tip-check"></i>
                  <span>Message buyers to confirm dispatch</span>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="summary-card">
              <h3 className="card-title">Order Summary</h3>
              
              <div className="summary-item">
                <div className="summary-icon total-orders">
                  <i className="fas fa-shopping-cart"></i>
                </div>

                <div className="summary-content">
                  <div className="summary-label">Total Orders</div>
                  <div className="summary-sublabel">All time</div>
                </div>

                <div>
                  <div className="summary-number">24</div>
                </div>
              </div>

              <div className="summary-item">
                <div className="summary-icon pending-orders">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="summary-content">
                  <div className="summary-label">Pending</div>
                  <div className="summary-sublabel">Needs Attention</div>
                </div>
                <div>
                  <div className="summary-number">3</div>
                </div>
              </div>

              <div className="summary-item">
                <div className="summary-icon delivered-orders">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="summary-content">
                  <div className="summary-label">Delivered</div>
                  <div className="summary-sublabel">Complete</div>
                </div>
                <div>
                  <div class="summary-number">-</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;