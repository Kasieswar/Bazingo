import React, { useState } from 'react';
import Header from '../header'
import Kinky from '../../images/Kinky.png'
import { useNavigate } from 'react-router-dom';

function ProductDetails() {
  const navigate = useNavigate();
  const [productNames, setProductNames] = useState(['', '', '']);
  const [videos, setVideos] = useState([null, null, null]);
  const [currentStep, setCurrentStep] = useState(3); // Since we're on step 3

  const handleProductNameChange = (index, value) => {
    const newProductNames = [...productNames];
    newProductNames[index] = value;
    setProductNames(newProductNames);
  };

  const handleVideoUpload = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const newVideos = [...videos];
      newVideos[index] = file;
      setVideos(newVideos);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (index, e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('video/')) {
      const newVideos = [...videos];
      newVideos[index] = file;
      setVideos(newVideos);
    }
  };

  const handleContinue = () => {
    console.log('Product Names:', productNames);
    console.log('Videos:', videos);
    navigate('/gstdetails');
  };

  const steps = [
    { number: 1, title: 'Create account', completed: true },
    { number: 2, title: 'Business Details', completed: true },
    { number: 3, title: 'Product Details', completed: false, current: true },
    { number: 4, title: 'Add GST', completed: false }
  ];

  return (
    <div>
      <Header />
      <div className="business-details-container">
        <div className="business-details-wrapper">
          {/* Left Side - Product Details */}
          <div className="form-section">
            {/* Progress Steps */}
            <div className="progress-steps">
              {steps.map((step, index) => (
                <div key={step.number} className="step-item">
                  <div className={`step-circle ${step.completed ? 'completed' : ''} ${step.current ? 'current' : ''}`}>
                    {step.completed ? <i className="fas fa-check"></i> : step.number}
                  </div>
                  <span className="step-title">{step.title}</span>
                  {index < steps.length - 1 && <div className="step-line"></div>}
                </div>
              ))}
            </div>

            {/* Product Details Form */}
            <div className="business-form">
              <div className="form-header">
                <h2>Product Details</h2>
                <p>Tell us what products or services to create your free showcase</p>
              </div>

              {/* Product Names */}
              <div className="product-names-section">
                <h3 className="section-title">
                  Product/Service Names ( Add atleast 3)
                </h3>
                
                <div className="product-inputs">
                  {productNames.map((name, index) => (
                    <div key={index} className="product-input-group">
                      <input
                        type="text"
                        placeholder={`Product ${index + 1}`}
                        value={name}
                        onChange={(e) => handleProductNameChange(index, e.target.value)}
                        className="product-input"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Photos/Videos */}
              <div className="product-videos-section">
                <h3 className="section-title">Product Videos</h3>
                
                <div className="video-uploads">
                  {[1, 2, 3].map((num, index) => (
                    <div 
                      key={num} 
                      className="video-upload-box"
                      onDragOver={handleDragOver}
                      onDrop={(e) => handleDrop(index, e)}
                    >
                      <input
                        type="file"
                        accept="video/*"
                        onChange={(e) => handleVideoUpload(index, e)}
                        className="video-input"
                        id={`video-${num}`}
                      />
                      
                      <label htmlFor={`video-${num}`} className="video-upload-label">
                        <div className="upload-icon">
                          <i className="fas fa-camera"></i>
                        </div>
                        <div className="upload-text">
                          <strong>Add Video {num}</strong>
                          <p>Click or drag to upload</p>
                        </div>
                      </label>
                      
                      {videos[index] && (
                        <div className="uploaded-video-info">
                          <i className="fas fa-check-circle"></i>
                          <span>{videos[index].name}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Continue Button */}
              <div className="continue-section">
                <button 
                  className="continue-btn"
                  onClick={handleContinue}
                >
                  Continue to Next Step
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Info Cards */}
          <div className="info-section">
            {/* Pro Tips Card */}
            <div className="info-card pro-tips">
              <div className="card-header">
                <div className="card-icon">
                  <i className="fas fa-camera"></i>
                </div>
                <h3>Pro Tips</h3>
              </div>
              <div className="card-content">
                <div className="tip-item">
                  <i className="fas fa-check check-icon"></i>
                  <span>Use natural lighting when possible</span>
                </div>
                <div className="tip-item">
                  <i className="fas fa-check check-icon"></i>
                  <span>Keep backgrounds clean and simple</span>
                </div>
                <div className="tip-item">
                  <i className="fas fa-check check-icon"></i>
                  <span>Show your product clearly</span>
                </div>
                <div className="tip-item">
                  <i className="fas fa-check check-icon"></i>
                  <span>Phone camera works great</span>
                </div>
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="info-card testimonial">
              <div className="testimonial-header">
                <div className="profile-section">
                  <div className="profile-pic">
                    <img src={Kinky} alt="Kinky" />
                  </div>
                  <div className="profile-info">
                    <h4>Kinky Selfida</h4>
                    <p>Kids & Toys store owner</p>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <p>
                  BuyLive helped me grow my business online. 
                  The onboarding process was smooth and their 
                  support team is amazing!
                </p>
                <div className="rating">
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
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

export default ProductDetails;