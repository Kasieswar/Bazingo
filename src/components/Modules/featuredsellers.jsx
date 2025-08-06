import React from 'react'
import { FaStore } from 'react-icons/fa';
import Sarah from '../images/Sara.png'
import David from '../images/David.png'
import Anna from '../images/Anna.png'

const sellers = [
  {
    name: 'Sarah P.',
    category: 'Kitchen',
    image: Sarah, 
  },
  {
    name: 'David S.',
    category: 'Furniture',
    image: David,
  },
  {
    name: 'Anna R.',
    category: 'Beauty',
    image: Anna,
  },
];

function featuredsellers() {
    
  return (
    <div>
      <section className="featured-sellers-section">
      <h2 className="section-title">Featured Sellers</h2>
      <p className="section-subtitle">Explore stores from top-rated sellers</p>

      <div className="sellerss-grid">
        {sellers.map((seller, index) => (
          <div className="sellers-card" key={index}>
            <img src={seller.image} alt={seller.name} className="sellers-image" />
            <h3 className="sellers-name">{seller.name}</h3>
            <p className="sellers-category">{seller.category}</p>
            <button className="store-button">
              View Store <FaStore />
            </button>
          </div>
        ))}
      </div>
    </section>
    </div>
  )
}

export default featuredsellers
