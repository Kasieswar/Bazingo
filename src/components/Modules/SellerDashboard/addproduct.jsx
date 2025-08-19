import React, { useState } from 'react';
import Navbar from './navbar';
import './dashboard.css';
import './addproduct.css';

function AddProduct() {
  const [formData, setFormData] = useState({
    productName: '',
    price: '',
    description: '',
    category: '',
    subcategory: '',
    tags: '',
    visibility: 'live'
  });

  const [videoFile, setVideoFile] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setVideoFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="dashboard-layout">
      <Navbar />
      
      <div className="dashboard-content">
        <div className="content-wrapper">
          {/* Left Main Content */}
          <div className="main-content">
            {/* Page Header */}
            <div className="add-product-header">
              <h1 className="page-title">Add New Product</h1>
              <p className="page-subtitle">Fill in your product using Video or just Content to attract more buyer!</p>
            </div>

            {/* Product Form Card */}
            <div className="product-form-card">
              <form onSubmit={handleSubmit} className="product-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="productName">
                      Product Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="productName"
                      name="productName"
                      placeholder="Enter product or service name"
                      value={formData.productName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="price">
                      Price ($ per unit / service) <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="price"
                      name="price"
                      placeholder="0.00"
                      value={formData.price}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="description">
                    Product Description <span className="required">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    placeholder="Describe your product in detail..."
                    rows="5"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                <div className="form-group upload-section">
                  <label>
                    Upload Product Reel or Video <span className="required">*</span>
                  </label>
                  <div className="upload-area">
                    <div className="upload-content">
                      <i className="fas fa-video upload-icon"></i>
                      <p className="upload-text">Upload Video File</p>
                      <p className="upload-subtext">Drag and drop your videos here, or click to browse</p>
                      <p className="upload-formats">Supports: MP4, MOV (Max 100MB)</p>
                      <input
                        type="file"
                        accept="video/*"
                        onChange={handleFileUpload}
                        className="file-input"
                        id="videoUpload"
                      />
                      <button type="button" className="choose-file-btn" onClick={() => document.getElementById('videoUpload').click()}>
                        Choose File
                      </button>
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="category">
                      Category <span className="required">*</span>
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Category</option>
                      <option value="electronics">Electronics</option>
                      <option value="clothing">Clothing</option>
                      <option value="home">Home & Garden</option>
                      <option value="sports">Sports</option>
                      <option value="books">Books</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="subcategory">Subcategory</label>
                    <select
                      id="subcategory"
                      name="subcategory"
                      value={formData.subcategory}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Subcategory</option>
                      <option value="smartphones">Smartphones</option>
                      <option value="laptops">Laptops</option>
                      <option value="accessories">Accessories</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="tags">Add Tags / Keywords</label>
                  <input
                    type="text"
                    id="tags"
                    name="tags"
                    placeholder="Add tag press enter to add tags"
                    value={formData.tags}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label>Visibility Options</label>
                  <div className="radio-group">
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="visibility"
                        value="live"
                        checked={formData.visibility === 'live'}
                        onChange={handleInputChange}
                      />
                      <span className="radio-text">Live Now</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="visibility"
                        value="draft"
                        checked={formData.visibility === 'draft'}
                        onChange={handleInputChange}
                      />
                      <span className="radio-text">Save as Draft</span>
                    </label>
                  </div>
                </div>

                <div className="form-actions">
                  <button type="submit" className="save-product-btn">Save Product</button>
                  <button type="button" className="cancel-product-btn">Cancel</button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="right-sidebar">
            {/* Video Guidelines Card */}
            <div className="guideline-card">
              <div className="guideline-header">
                <i className="fas fa-play-circle"></i>
                <span>Video Guidelines</span>
              </div>
              <div className="guideline-content">
                <div className="guideline-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Maximum file size 100MB</span>
                </div>
                <div className="guideline-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Supported formats: MP4, MOV</span>
                </div>
                <div className="guideline-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Recommended resolution: 1080p</span>
                </div>
                <div className="guideline-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Keep videos under 60 seconds</span>
                </div>
              </div>
            </div>

            {/* Important Note Card */}
            <div className="note-card">
              <div className="note-header">
                <i className="fas fa-exclamation-triangle"></i>
                <span>Important Note</span>
              </div>
              <div className="note-content">
                <p>This platform does not allow photo uploads. Only Product Reel/Video files are supported for showcasing products.</p>
              </div>
            </div>

            {/* Tips Card */}
            <div className="tips-card-product">
              <div className="tips-header-product">
                <i className="fas fa-lightbulb"></i>
                <span>Tips for Product Videos</span>
              </div>
              <div className="tips-content-product">
                <div className="tip-item-product">
                  <i className="fas fa-check"></i>
                  <span>Use clean lighting and backgrounds</span>
                </div>
                <div className="tip-item-product">
                  <i className="fas fa-check"></i>
                  <span>Show key features clearly</span>
                </div>
                <div className="tip-item-product">
                  <i className="fas fa-check"></i>
                  <span>Keep it under 60 seconds for better engagement</span>
                </div>
              </div>
            </div>

            {/* Need Help Card */}
            <div className="help-card">
              <div className="help-header">
                <i className="fas fa-question-circle"></i>
                <span>Need Help?</span>
              </div>
              <div className="help-content">
                <div className="help-item">
                  <i className="fas fa-video"></i>
                  <span>Video Creation Tips</span>
                </div>
                <div className="help-item">
                  <i className="fas fa-question"></i>
                  <span>FAQ</span>
                </div>
                <div className="help-item">
                  <i className="fas fa-headset"></i>
                  <span>Contact Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;