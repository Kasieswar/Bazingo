import React, { useEffect, useRef } from 'react'
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";

function Sellerhero() {

    const phoneInputRef = useRef(null);

  useEffect(() => {
    if (phoneInputRef.current) {
      intlTelInput(phoneInputRef.current, {
        initialCountry: "in",
        preferredCountries: ["in", "us", "gb"],
        separateDialCode: true,
      });
    }
  }, []);


  return (
    <div>
      <section className="community-hero">
      <div className="hero-container-community">
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
