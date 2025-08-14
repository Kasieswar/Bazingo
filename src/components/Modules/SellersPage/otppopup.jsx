import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function OtpPopup({ isOpen, onClose, phoneNumber, onEdit = () => {} }) {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isResendActive, setIsResendActive] = useState(false);
  const [timer, setTimer] = useState(30);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (isOpen && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            setIsResendActive(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isOpen, timer]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRefs.current[0]?.focus();
      }, 100);
    }
  }, [isOpen]);

  const handleInputChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 3) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResend = () => {
    setIsResendActive(false);
    setTimer(30);
    setOtp(['', '', '', '']);
    console.log('Resending OTP...');
  };

  const handleEdit = () => {
    if (onEdit && typeof onEdit === 'function') {
      onEdit(); 
    }
    onClose();
  };

  const handleVerify = () => {
    const otpString = otp.join('');
    if (otpString.length === 4) {
      console.log('Verifying OTP:', otpString);

      setTimeout(() => {
        navigate('/businessdetails');
        onClose(); 
      }, 1000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="otp-overlay">
      <div className="otp-popup">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        
        <div className="otp-content">
          <h3>Enter 4 digit code sent to your mobile number</h3>
          
          <div className="phone-display">
            <span className="country-flag">🇮🇳</span>
            <span className="phone-number">+91 {phoneNumber}</span>
            <button className="edit-btn" onClick={handleEdit}>✏️ Edit</button>
          </div>

          <div className="otp-inputs">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                value={digit}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="otp-digit"
                maxLength="1"
              />
            ))}
          </div>

          <div className="status-message">
            <span className="success-text">Otp sent successfully on Mobile</span>
          </div>

          <div className="resend-section">
            <span className="resend-text">Didn't receive code ?</span>
            {isResendActive ? (
              <button className="resend-btn active" onClick={handleResend}>
                Resend
              </button>
            ) : (
              <span className="resend-timer">Resend in {timer}s</span>
            )}
          </div>

          <button 
            className="verify-btn" 
            onClick={handleVerify}
            disabled={otp.join('').length !== 4}
          >
            Verify Mobile
          </button>
        </div>
      </div>
    </div>
  );
}

export default OtpPopup;