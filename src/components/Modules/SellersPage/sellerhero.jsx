import React, { useEffect, useRef } from 'react'
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";

function Sellerhero() {

    const phoneInputRef = useRef(null);
  const itiInstanceRef = useRef(null);

  useEffect(() => {
    if (phoneInputRef.current && !itiInstanceRef.current) {
      // Destroy any existing instance first
      if (itiInstanceRef.current) {
        itiInstanceRef.current.destroy();
      }
      
      // Initialize with more specific options
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


  return (
    <div>
      <section className="seller-hero">
      <div className="hero-container-seller">
        {/* Left Side */}
        <div className="hero-texts">
          <h2>
            Reach Thousands of <br />
            <span>Buyers</span>  with Just a Reel
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
            <form className="phone-form">
                <input
                    ref={phoneInputRef}
                    type="tel"
                    placeholder="Enter your mobile number"
                />
                <button type="submit" className="start-selling">Start Selling 🚀</button>
                </form>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Sellerhero
