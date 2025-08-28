import React, { useState } from 'react';
import Navbar from './navbar';
import './products.css';
import { Link } from 'react-router-dom';

function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [categoryFilter, setCategoryFilter] = useState('All Categories');

  const products = [
    {
      id: 1,
      name: 'Smartphone',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmV8ZW58MHx8MHx8fDA%3D',
      views: 5,
      inquiries: 0,
      isLive: true,
      lastUpdated: 'few minutes ago'
    },
    {
      id: 2,
      name: 'Bluetooth Speaker',
      image: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      views: 3,
      inquiries: 0,
      isLive: true,
      lastUpdated: 'few minutes ago'
    },
    {
      id: 3,
      name: 'Headset',
      image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      views: 7,
      inquiries: 0,
      isLive: true,
      lastUpdated: 'few minutes ago'
    }
  ];

  return (  
    <div className="dashboard-layout">
      <Navbar />
      
      <div className="products-page-content">
        <div className="products-container">
          {/* Header Section */}
          <div className="products-header">
            <div className="header-text">
              <h1 className="page-title">My Products</h1>
              <p className="page-subtitle">Manage your product listings and track their performance</p>
            </div>
            <Link to="/add-product" className='links'>
            <button className="add-product-header-btn">
              <i className="fas fa-plus"></i>
              Add New Product
            </button></Link>
          </div>

          {/* Search and Filters */}
          <div className="filters-section">
            <div className="search-containerss">
              <div className="search-input-wrapperss">
                <i className="fas fa-search search-icon"></i>
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="searches-inputs"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div className="filter-buttons">
              <div className="filter-dropdown">
                <select 
                  className="filter-select"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option>All Status</option>
                  <option>Live</option>
                  <option>Draft</option>
                  <option>Pending</option>
                </select>
                <i className="fas fa-chevron-down dropdown-icon"></i>
              </div>
              
              <div className="filter-dropdown">
                <select 
                  className="filter-select"
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                >
                  <option>All Categories</option>
                  <option>Electronics</option>
                  <option>Mobile</option>
                  <option>Audio</option>
                </select>
                <i className="fas fa-chevron-down dropdown-icon"></i>
              </div>
            </div>
          </div>

          {/* Catalog Optimization */}
          <div className="catalog-optimization">
            <div className="optimization-header">
              <h3 className="optimization-title">Catalog Optimization</h3>
              <div className="catalog-score">
                <span className="score-label">Catalog Score:</span>
                <div className="score-bar">
                  <div className="score-progress" style={{width: '76%'}}></div>
                </div>
                <span className="score-value">76%</span>
              </div>
            </div>
            
            <div className="optimization-cards">
              <div className="optimization-card">
                <div className="card-icon video">
                  <i className="fas fa-video"></i>
                </div>
                <div className="card-content">
                  <h4 className="card-title">Add more Product videos</h4>
                  <p className="card-description">Boost visibility by 40%</p>
                </div>
              </div>
              
              <div className="optimization-card">
                <div className="card-icon description">
                  <i className="fas fa-file-alt"></i>
                </div>
                <div className="card-content">
                  <h4 className="card-title">Complete Descriptions</h4>
                  <p className="card-description">Improve search ranking</p>
                </div>
              </div>
              
              <div className="optimization-card">
                <div className="card-icon category">
                  <i className="fas fa-tags"></i>
                </div>
                <div className="card-content">
                  <h4 className="card-title">Add Categories</h4>
                  <p className="card-description">Better Product discovery</p>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="products-grid-section">
            <div className="products-grid">
              {products.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-image-container">
                    <img src={product.image} alt={product.name} className="product-images" />
                    <div className="live-badge">
                      <i className="fas fa-circle"></i>
                      LIVE
                    </div>
                    <div className="play-button">
                      <i className="fas fa-play"></i>
                    </div>
                  </div>
                  
                  <div className="product-details">
                    <h4 className="product-name">{product.name}</h4>
                    
                    <div className="product-stats">
                      <div className="stat-item">
                        <i className="fas fa-eye stat-icon"></i>
                        <span className="stat-value">{product.views} views</span>
                      </div>
                      <div className="stat-item">
                        <i className="fas fa-question-circle stat-icon inquiry"></i>
                        <span className="stat-value">{product.inquiries} Inquiries</span>
                      </div>
                    </div>
                    
                    <div className="product-actions">
                      <button className="action-btn edit">
                        <i className="fas fa-edit"></i>
                      </button>
                      <button className="action-btn delete">
                        <i className="fas fa-trash"></i>
                      </button>
                      <div className="update-time">
                        Updated {product.lastUpdated}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Add New Product Card */}
              <Link className='links' to="/add-product"> <div className="add-product-card">
                <div className="add-product-content">
                  <div className="add-icon">
                    <i className="fas fa-plus"></i>
                  </div>
                  <h4 className="add-title">Add New Product</h4>
                  <p className="add-description">Create a new product listing to reach more customers</p>
                </div>
              </div> </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;