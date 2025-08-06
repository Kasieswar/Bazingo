import React, { useState } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    quote: 'I got a premium sofa very quickly and its quality was awesome.',
    name: 'Satya S.',
  },
  {
    quote: 'I found the perfect blender in minutes!',
    name: 'Shekar W.',
  },
  {
    quote: 'The kids toys collection is huge and budget-friendly!',
    name: 'Anjali R.',
  },
  {
    quote: 'Very smooth checkout experience and fast delivery!',
    name: 'Rahul T.',
  },
];

function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);

  const showPrev = () => {
    setStartIndex((prev) =>
      prev === 0 ? testimonials.length - 2 : prev - 2
    );
  };

  const showNext = () => {
    setStartIndex((prev) =>
      prev + 2 >= testimonials.length ? 0 : prev + 2
    );
  };

  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + 2
  );

  return (
    <div className="testimonial-section">
      <h2 className="testimonial-title">User Testimonials</h2>
      <p className="testimonial-subtitle">See what our users are saying</p>

      <div className="testimonial-slider">
        <FaChevronLeft className="nav-arrow left" onClick={showPrev} />

        {visibleTestimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <FaQuoteLeft className="quote-icon" />
            <p className="testimonial-text">{t.quote}</p>
            <p className="testimonial-name">{t.name}</p>
          </div>
        ))}

        <FaChevronRight className="nav-arrow right" onClick={showNext} />
      </div>
    </div>
  );
}

export default Testimonials;
