import React from 'react'
import { FaUtensils, FaCouch, FaHeadphones, FaTshirt, FaSoap } from 'react-icons/fa';
import { GiBabyBottle } from 'react-icons/gi';  

const categories = [
  { icon: <FaUtensils size={70} />, label: 'Kitchen' },
  { icon: <FaCouch size={70} />, label: 'Furniture' },
  { icon: <FaHeadphones size={70} />, label: 'Electronics' },
  { icon: <GiBabyBottle size={70} />, label: 'Kids & Toys' },
  { icon: <FaTshirt size={70} />, label: 'Fashion' },
  { icon: <FaSoap size={70} />, label: 'Beauty' },
];


function Categories() {
    return (
        <div>
            <section className="category-section">
            <h2 className="category-title">Explore by Category</h2>
            <p className="category-subtitle">Find what you need, faster. Browse products by popular categories</p>

            <div className="category-grid">
                {categories.map((cat, index) => (
                <div key={index} className="category-card">
                    <div className="category-icon">{cat.icon}</div>
                    <h3 className="category-label">{cat.label}</h3>
                </div>
                ))}
            </div>
            </section>
        </div>
    )
}

export default Categories
