import React, { useState } from 'react';
import Header from '../header'
import David from '../../images/David.png'
import { useNavigate } from 'react-router-dom';

function AddGST() {
  const [hasGST, setHasGST] = useState(true);
  const [gstNumber, setGstNumber] = useState('');
  const [panNumber, setPanNumber] = useState('');
  const [currentStep, setCurrentStep] = useState(4);

  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [showSparkles, setShowSparkles] = useState(false);

  const handleGSTToggle = (hasGSTValue) => {
    setHasGST(hasGSTValue);
    if (hasGSTValue) {
      setPanNumber('');
    } else {
      setGstNumber('');
    }
  };

  const handleStartSelling = async () => {
    setIsProcessing(true);
    
    const steps = [
      'Creating account...',
      'Setting up business details...',
      'Adding product details...',
      'Verifying GST details...',
      'Setting up your dashboard...'
    ];
    
    await new Promise(resolve => setTimeout(resolve, 1000));

    setShowSparkles(true);
    
    await new Promise(resolve => setTimeout(resolve, 800));
    
    for (let i = 0; i < steps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 600));
      setCompletedSteps(prev => [...prev, steps[i]]);
    }
    
    await new Promise(resolve => setTimeout(resolve, 800));
    navigate('/seller-dashboard');
  };

  const steps = [
    { number: 1, title: 'Create account', completed: true },
    { number: 2, title: 'Business Details', completed: true },
    { number: 3, title: 'Product Details', completed: true },
    { number: 4, title: 'Add GST', completed: false, current: true }
  ];

  return (
    <div>
      <Header />
      <div className="business-details-container">
        <div className="business-details-wrapper">
          {/* Left Side - GST Details */}
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

            {/* GST Details Form */}
            <div className="business-form">
              <div className="form-header">
                <h2>GST Details</h2>
                <p>Add your existing GST to complete your registration</p>
              </div>

              {/* GST Registration Status */}
              <div className="gst-section">
                <h3 className="section-title">GST Registration Status</h3>
                
                <div className="gst-toggle-options">
                  <div 
                    className={`gst-option ${hasGST ? 'active' : ''}`}
                    onClick={() => handleGSTToggle(true)}
                  >
                    <div className="option-radio">
                      <div className={`radio-circle ${hasGST ? 'checked' : ''}`}>
                        {hasGST && <div className="radio-dot"></div>}
                      </div>
                    </div>
                    <div className="option-content">
                      <span className="option-title">I have GST</span>
                    </div>
                  </div>

                  <div 
                    className={`gst-option ${!hasGST ? 'active' : ''}`}
                    onClick={() => handleGSTToggle(false)}
                  >
                    <div className="option-radio">
                      <div className={`radio-circle ${!hasGST ? 'checked' : ''}`}>
                        {!hasGST && <div className="radio-dot"></div>}
                      </div>
                    </div>
                    <div className="option-content">
                      <span className="option-title">I don't have it</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* GST/PAN Number Input */}
              <div className="number-input-section">
                <h3 className="section-title">
                  {hasGST ? 'GST Number' : 'PAN Number'}
                </h3>
                
                <div className="number-input-group">
                  <input
                    type="text"
                    placeholder={hasGST ? 'GST Number' : 'PAN Number'}
                    value={hasGST ? gstNumber : panNumber}
                    onChange={(e) => hasGST ? setGstNumber(e.target.value) : setPanNumber(e.target.value)}
                    className="number-input"
                  />
                  <div className="input-note">
                    {hasGST ? 'Enter your 15-digit GST number' : 'Enter your 10-digit PAN number'}
                  </div>
                </div>
              </div>

              {/* Start Selling Button */}
              <div className="continue-section">
                <button 
                  className="continue-btn start-selling-btn"
                  onClick={handleStartSelling}
                >
                  Start Selling
                  <i className="fas fa-rocket"></i>
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
                  <span>GST verified sellers get more visibility and trust on BuyLive</span>
                </div>
                <div className="tip-item">
                  <i className="fas fa-check check-icon"></i>
                  <span>Higher search ranking</span>
                </div>
                <div className="tip-item">
                  <i className="fas fa-check check-icon"></i>
                  <span>Verified seller badge</span>
                </div>
                <div className="tip-item">
                  <i className="fas fa-check check-icon"></i>
                  <span>Customer trust</span>
                </div>
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="info-card testimonial">
              <div className="testimonial-header">
                <div className="profile-section">
                  <div className="profile-pic">
                    <img src={David} alt="David S" />
                  </div>
                  <div className="profile-info">
                    <h4>Rohan Mataran</h4>
                    <p>Electronics</p>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <p>
                  Completing GST verification helped me gain 
                  customer trust and increased my sales by 30%
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
        
        {/* Magical Processing Animation */}
        {isProcessing && (
          <div className="magical-overlay">
            <div className="magical-content">
              {/* Gear with Sparkle Burst */}
              <div className="magical-icon-container">
                <div className={`magical-gear ${showSparkles ? 'burst' : ''}`}>
                  <i className="fas fa-cog"></i>
                </div>
                
                {/* Sparkle particles */}
                {showSparkles && (
                  <div className="sparkles">
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className={`sparkle sparkle-${i + 1}`}>
                        <i className="fas fa-star"></i>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <h3 className="magical-title">Setting up your store...</h3>
              
              {/* Magical Steps with Shimmer */}
              <div className="magical-steps">
                {completedSteps.map((step, index) => (
                  <div key={index} className="magical-step">
                    <div className="step-icon">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <span className="shimmer-text">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddGST;