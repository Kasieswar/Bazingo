import React, { useEffect, useRef, useState } from 'react'
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import OtpPopup from './otppopup'; 

function Sellerhero() {
  const phoneInputRef = useRef(null);
  const itiInstanceRef = useRef(null);
  const [showOtpPopup, setShowOtpPopup] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [editPhoneNumber, setEditPhoneNumber] = useState(''); 
  useEffect(() => {
    if (phoneInputRef.current && !itiInstanceRef.current) {
      if (itiInstanceRef.current) {
        itiInstanceRef.current.destroy();
      }
      
      itiInstanceRef.current = intlTelInput(phoneInputRef.current, {
        initialCountry: "in",
        preferredCountries: ["in", "us", "gb"],
        separateDialCode: true,
        autoPlaceholder: "aggressive",
        nationalMode: false,
        formatOnDisplay: true,
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
      });
    }

    return () => {
      if (itiInstanceRef.current) {
        itiInstanceRef.current.destroy();
        itiInstanceRef.current = null;
      }
    };
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault(); 
    
    // Get the phone number value
    const phoneValue = phoneInputRef.current.value.trim();
    
    // Basic validation - check if phone number is entered
    if (!phoneValue) {
      alert('Please enter your mobile number');
      return;
    }

    // Clean the phone number (remove all non-digits)
    const cleanPhoneNumber = phoneValue.replace(/\D/g, '');
    
    // Basic validation for Indian phone numbers (10 digits) or international (7-15 digits)
    if (cleanPhoneNumber.length >= 7 && cleanPhoneNumber.length <= 15) {
      // Store both clean and original phone number
      setPhoneNumber(cleanPhoneNumber);
      setEditPhoneNumber(phoneValue); // Store original format for editing
      setShowOtpPopup(true);
      
      // Get full international number if intl-tel-input is available
      let fullNumber = phoneValue;
      if (itiInstanceRef.current) {
        try {
          fullNumber = itiInstanceRef.current.getNumber();
        } catch (error) {
          console.log('Error getting number:', error);
        }
      }
      
      // Here you would typically send the OTP to the phone number
      console.log('Sending OTP to:', fullNumber);
    } else {
      alert('Please enter a valid phone number (7-15 digits)');
    }
  };

  const handleCloseOtpPopup = () => {
    setShowOtpPopup(false);
  };

  const handleEditPhone = () => {
    // When edit is clicked, populate the input with the stored phone number
    if (phoneInputRef.current && editPhoneNumber) {
      phoneInputRef.current.value = editPhoneNumber;
      // Focus the input field
      setTimeout(() => {
        phoneInputRef.current.focus();
      }, 100);
    }
  };

  return (
    <div>
      <section className="seller-hero">
        <div className="hero-container-seller">
          {/* Left Side */}
          <div className="hero-texts">
            <h2>
              Reach Thousands of <br />
              <span>Buyers</span> with Just a Reel
            </h2>
            <p>
              List your products, connect directly with customers, and grow your business effortlessly on BuyLive.
            </p>
            
            <button className="primary-hero-btn">Start Selling</button>
            <button className="secondary-hero-btn">How it Works</button>
          </div>

          {/* Right Side */}
          <div className="registration-forms">
            <h3>Free Registration / Sign In</h3>
            {/* Added onSubmit handler here */}
            <form className="phone-form" onSubmit={handleFormSubmit}>
              <input
                ref={phoneInputRef}
                type="tel"
                placeholder="Enter your mobile number"
                required
              />
              <button type="submit" className="start-selling">
                Start Selling 🚀
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* OTP Popup - Fixed component name */}
      <OtpPopup 
        isOpen={showOtpPopup}
        onClose={handleCloseOtpPopup}
        phoneNumber={phoneNumber}
        onEdit={handleEditPhone}
      />
    </div>
  )
}

export default Sellerhero