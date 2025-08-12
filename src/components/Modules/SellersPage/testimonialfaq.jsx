import React, { useState } from 'react'
import Sarah from '../../images/Sara.png'
import David from '../../images/David.png'

function Testimonialfaq() {

    const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Is it free to list products ?",
      answer: "Yes, listing products on BuyLive is completely free."
    },
    {
      question: "How do I receive orders ?",
      answer: "You will receive orders directly through your BuyLive seller dashboard."
    },
    {
      question: "Can I manage listings myself ?",
      answer: "Yes, you can add, edit, and remove product listings at any time."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  return (
    <div>
      <section className="testimonials-faqs-section">
      {/* Left: Testimonials */}
      <div className="testimonial">
        <h2>What Sellers Are Saying</h2>
        <p className="subtitle">
          Hear how real sellers transformed their businesses with BuyLive.
        </p>
        <div className="testimonials-cardss">
          <div className="testimonial-cardd">
            <div>
            <img
              src= { Sarah }
              alt="Sarah P."
              className="testimonial-image"
            />
            <h4 className="testimonials-names">Sarah P.</h4>
            </div>
            <p className="testimonials-texts">
              I’m reaching more customers than ever. It’s Fantastic!
            </p>
            
          </div>
          <div className="testimonial-cardd">
            <div>
            <img
              src= { David }
              alt="David S."
              className="testimonial-image"
            />
            <h4 className="testimonials-names">David S.</h4>
            </div>
            <p className="testimonials-texts">
              I have increased my sales by using Bazingo
            </p>
            
          </div>
        </div>
      </div>

      {/* Right: FAQs */}
      <div className="faqs">
        <h2>FAQs for Sellers</h2>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {faq.question}
              <span className="arrow">{activeIndex === index ? "▲" : "▼"}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
    </div>
  )
}

export default Testimonialfaq
