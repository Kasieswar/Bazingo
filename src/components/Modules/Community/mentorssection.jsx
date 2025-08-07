import React, { useRef } from 'react'

import Sara from '../../images/Sara.png';
import David from '../../images/David.png';
import Saria from '../../images/Saria.png';
import Kinky from '../../images/Kinky.png';
import Rohan from '../../images/Rohan.png';
import Deeya from '../../images/Deeya.png';

const mentors = [
  {
    name: 'Sarah P.',
    category: '🍳 Kitchen',
    description: 'High-quality home appliances',
    img: Sara,
  },
  {
    name: 'David S.',
    category: '🪑 Furniture',
    description: 'Excellent Furniture',
    img: David,
  },
  {
    name: 'Rohan Mahran',
    category: '💡 Electronics',
    description: 'Cool Electronics & Gadgets available',
    img: Rohan,
  },
  {
    name: 'Deeya Pania',
    category: '💄 Beauty',
    description: 'All Premium beauty products available',
    img: Deeya
  },
  {
    name: 'Saria Ashan',
    category: '👗 Fashion',
    description: 'Good quality & Trendy Fashions',
    img: Saria,
  },
  {
    name: 'Kinky Selfida',
    category: '🧸 Kids & Toys',
    description: 'Playful toys for kids',
    img: Kinky,
  },
];


function Mentorssection() {

    const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };


  return (
    <div>
      <section className="mentors-section">
      <h2>Community Mentors</h2>
      <p>Meet Our Seller Mentors / Helpful Members You Can Trust</p>

        <div className="scroll-button left" onClick={scrollLeft}>‹</div>
        <div className="scroll-button right" onClick={scrollRight}>›</div>
      
      <div className="mentors-scroll" ref={scrollRef}>
        {mentors.map((mentor, index) => (
          <div className="mentor-card" key={index}>
            <img src={mentor.img} alt={mentor.name} />
            <h3>{mentor.name}</h3>
            <p className="category">{mentor.category}</p>
            <p className="desc">{mentor.description}</p>
            <button>Message</button>
          </div>
        ))}
      </div>
    </section>
    </div>
  )
}

export default Mentorssection
