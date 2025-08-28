import React, { useState } from 'react';
import Navbar from './navbar';
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

  const [uploadMethod, setUploadMethod] = useState('file'); // 'file' or 'link'
  const [videoLink, setVideoLink] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUploadMethodChange = (method) => {
    setUploadMethod(method);
    setVideoLink(''); // Clear link when switching methods
  };

  const handleVideoLinkChange = (e) => {
    setVideoLink(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    const submissionData = {
      ...formData,
      uploadMethod,
      videoLink: uploadMethod === 'link' ? videoLink : null
    };
    console.log('Form submitted:', submissionData);
  };

  return (
    <div className="dashboard-layout">
      <Navbar />
      
      <div className="dashboard-content">
        <div className="content-wrapper">
          {/* Main Content */}
          <div className="main-content">
            {/* Page Header */}
            <div className="page-header">
              
              <h1 className="page-title">Add New Product</h1>
              <p className="page-subtitle">List a new product using video or reel content to attract more buyers.</p>
            </div>

            {/* Add Product Form */}
            <div className="add-product-form-container">
              <form onSubmit={handleSubmit} className="add-product-form">
                {/* Product Name and Price Row */}
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">
                      Product Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="productName"
                      className="form-input"
                      placeholder="Enter product or service name"
                      value={formData.productName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">
                      Price (₹ per unit / service) <span className="required">*</span>
                    </label>
                    <input
                      type="number"
                      name="price"
                      className="form-input"
                      placeholder="0.00"
                      value={formData.price}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                {/* Product Description */}
                <div className="form-group">
                  <label className="form-label">
                    Product Description <span className="required">*</span>
                  </label>
                  <textarea
                    name="description"
                    className="form-textarea"
                    placeholder="Describe your product in detail..."
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    required
                  ></textarea>
                </div>

                {/* Upload Video Section */}
                <div className="form-group">
                  <label className="form-label">
                    Upload Product Reel or Video <span className="required">*</span>
                  </label>
                  
                  {/* Upload Method Toggle */}
                  <div className="upload-method-toggle">
                    <button 
                      type="button" 
                      className={`toggle-btn ${uploadMethod === 'file' ? 'active' : ''}`}
                      onClick={() => handleUploadMethodChange('file')}
                    >
                      <i className="fas fa-upload"></i>
                      Upload File
                    </button>
                    <button 
                      type="button" 
                      className={`toggle-btn ${uploadMethod === 'link' ? 'active' : ''}`}
                      onClick={() => handleUploadMethodChange('link')}
                    >
                      <i className="fas fa-link"></i>
                      Add Link
                    </button>
                  </div>

                  {uploadMethod === 'file' ? (
                    <div className="video-upload-area">
                      <div className="video-upload-icon">
                        <i className="fas fa-video"></i>
                      </div>
                      <h4 className="upload-title">Upload Video File</h4>
                      <p className="upload-subtitle">Drag and drop your videos here, or click to browse</p>
                      <p className="upload-format">Supports: MP4, MOV (Max 100mb)</p>
                      <button type="button" className="choose-file-btn">Choose File</button>
                    </div>
                  ) : (
                    <div className="video-link-area">
                      <div className="video-link-icon">
                        <i className="fas fa-link"></i>
                      </div>
                      <h4 className="link-title">Add Instagram Reel or YouTube Shorts Link</h4>
                      <p className="link-subtitle">Paste your Instagram Reel or YouTube Shorts URL below</p>
                      <input
                        type="url"
                        className="video-link-input"
                        placeholder="https://www.instagram.com/reel/... or https://youtube.com/shorts/..."
                        value={videoLink}
                        onChange={handleVideoLinkChange}
                        required={uploadMethod === 'link'}
                      />
                      <p className="link-format">Supported: Instagram Reels, YouTube Shorts</p>
                    </div>
                  )}
                </div>

                {/* Category and Subcategory Row */}
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">
                      Category <span className="required">*</span>
                    </label>
                    <select
                      name="category"
                      className="form-select"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Category</option>
                      <option value="electronics">Electronics</option>
                      <option value="fashion">Fashion</option>
                      <option value="home">Home & Garden</option>
                      <option value="sports">Sports</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Subcategory</label>
                    <select
                      name="subcategory"
                      className="form-select"
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

                {/* Add Tags */}
                <div className="form-group">
                  <label className="form-label">Add Tags / Keywords</label>
                  <input
                    type="text"
                    name="tags"
                    className="form-input"
                    placeholder="Add tags, uses to add tags"
                    value={formData.tags}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Visibility Options */}
                <div className="form-group">
                  <label className="form-label">Visibility Options</label>
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

                {/* Form Actions */}
                <div className="form-actions">
                  <button type="submit" className="save-product-btn">
                    Save Product
                  </button>
                  <button type="button" className="cancel-btn">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="right-sidebarss">
            {/* Video Guidelines */}
            <div className="guideline-card">
              <div className="guideline-header">
                <i className="fas fa-play-circle guideline-icon"></i>
                <h3 className="card-titles">Video Guidelines</h3>
              </div>
              <div className="guideline-list">
                <div className="guideline-item">
                  <i className="fas fa-check guideline-check"></i>
                  <span>Maximum file size: 100MB</span>
                </div>
                <div className="guideline-item">
                  <i className="fas fa-check guideline-check"></i>
                  <span>Supported formats: MP4, MOV</span>
                </div>
                <div className="guideline-item">
                  <i className="fas fa-check guideline-check"></i>
                  <span>Recommended duration: 15-60 seconds</span>
                </div>
                <div className="guideline-item">
                  <i className="fas fa-check guideline-check"></i>
                  <span>Resolution: 720p or higher</span>
                </div>
              </div>
            </div>

            {/* Important Note */}
            <div className="note-card">
              <div className="note-header">
                <i className="fas fa-exclamation-triangle note-icon"></i>
                <h3 className="card-titles">Important Note</h3>
              </div>
              <p className="note-text">
                This platform does not allow photo uploads. Only Product Videos/Reels are supported for showcasing products.
              </p>
            </div>

            {/* Tips for Product Videos */}
            <div className="tips-card">
              <div className="tips-header">
                <i className="fas fa-lightbulb tips-icon"></i>
                <h3 className="card-titles">Tips for Product Videos</h3>
              </div>
              <div className="tips-list">
                <div className="tip-item">
                  <i className="fas fa-check tip-check"></i>
                  <span>Use clean lighting and backgrounds.</span>
                </div>
                <div className="tip-item">
                  <i className="fas fa-check tip-check"></i>
                  <span>Show key features clearly</span>
                </div>
                <div className="tip-item">
                  <i className="fas fa-check tip-check"></i>
                  <span>Keep it under 60 seconds for better engagement</span>
                </div>
              </div>
            </div>

            {/* Need Help */}
            <div className="help-card">
              <h3 className="card-titles">Need Help?</h3>
              <div className="help-options">
                <div className="help-option">
                  <i className="fas fa-video help-icon"></i>
                  <span>Video Creation Tips</span>
                </div>
                <div className="help-option">
                  <i className="fas fa-question-circle help-icon"></i>
                  <span>FAQ</span>
                </div>
                <div className="help-option">
                  <i className="fas fa-headset help-icon"></i>
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