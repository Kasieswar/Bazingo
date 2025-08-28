import React, { useState } from 'react';
import Header from '../header'
import Kinky from '../../images/Kinky.png'
import { useNavigate } from 'react-router-dom';

function BusinessDetails() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    pincode: '',
    city: '',
    state: '',
    email: ''
  });

  const [currentStep, setCurrentStep] = useState(2);
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleVerifyEmail = () => {
    if (formData.email) {
      setIsEmailVerified(true);
      console.log('Verifying email:', formData.email);
    }
  };

  const handleLater = () => {
    console.log('Clicked Later');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleContinue = () => {
    const requiredFields = ['fullName', 'businessName', 'pincode', 'city', 'state', 'email'];
    const isFormValid = requiredFields.every(field => formData[field].trim() !== '');
    
    if (isFormValid) {
      navigate('/productdetails');
    } else {
      alert('Please fill in all required fields');
    }
  };

  const steps = [
    { number: 1, title: 'Create account', completed: true },
    { number: 2, title: 'Business Details', completed: false, current: true },
    { number: 3, title: 'Product Details', completed: false },
    { number: 4, title: 'Add GST', completed: false }
  ];

  return (
    <div>
      <Header />
      <div className="business-details-container">
        <div className="business-details-wrapper">
          {/* Left Side - Form */}
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

            {/* Form */}
            <div className="business-form">
              <div className="form-header">
                <h2>Business Details</h2>
                <p>Tell us about your business to get started</p>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Full Name */}
                <div className="form-group">
                  <div className="input-with-icon">
                    <i className="fas fa-user input-icon"></i>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Enter your Full Name*"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                {/* Business Name */}
                <div className="form-group">
                  <div className="input-with-icon">
                    <i className="fas fa-building input-icon"></i>
                    <input
                      type="text"
                      name="businessName"
                      placeholder="Enter Business / Company / Shop Name*"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                {/* Location Row */}
                <div className="form-row">
                  <div className="form-group">
                    <div className="input-with-icon">
                      <i className="fas fa-map-pin input-icon"></i>
                      <input
                        type="text"
                        name="pincode"
                        placeholder="Pincode*"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="input-with-icon">
                      <i className="fas fa-city input-icon"></i>
                      <input
                        type="text"
                        name="city"
                        placeholder="City*"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="input-with-icon">
                      <i className="fas fa-map input-icon"></i>
                      <input
                        type="text"
                        name="state"
                        placeholder="State*"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="form-group">
                  <div className="input-with-icon email-group">
                    <i className="fas fa-envelope input-icon"></i>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email*"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={isEmailVerified ? 'verified' : ''}
                    />
                    <div className="email-buttons">
                      <button 
                        type="button" 
                        className="verify-btn-email"
                        onClick={handleVerifyEmail}
                        disabled={!formData.email || isEmailVerified}
                      >
                        {isEmailVerified ? <><i className="fas fa-check"></i> Verified</> : 'Verify'}
                      </button>
                      <button type="button" className="later-btn" onClick={handleLater}>
                        Later
                      </button>
                    </div>
                  </div>
                </div>
              </form>
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
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h3>Pro Tips</h3>
              </div>
              <div className="card-content">
                <div className="tip-item">
                  <i className="fas fa-check check-icon"></i>
                  <span>Use your legal business name for better trust</span>
                </div>
                <div className="tip-item">
                  <i className="fas fa-check check-icon"></i>
                  <span>Verify your email to receive important updates</span>
                </div>
                <div className="tip-item">
                  <i className="fas fa-check check-icon"></i>
                  <span>Accurate location helps customers find you</span>
                </div>
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="info-card testimonils">
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

export default BusinessDetails;