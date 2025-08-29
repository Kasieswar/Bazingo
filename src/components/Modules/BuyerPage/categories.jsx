import React, { useState } from 'react';
import '../../Pages/buyerpage.css';

const CategoriesSection = ({ onCategoryChange }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products', icon: '🛍️' },
    { id: 'electronics', name: 'Electronics', icon: '📱' },
    { id: 'fashion', name: 'Fashion', icon: '👕' },
    { id: 'food', name: 'Food & Beverage', icon: '🍕' },
    { id: 'books', name: 'Books', icon: '📚' },
    { id: 'sports', name: 'Sports', icon: '⚽' },
    { id: 'home', name: 'Home & Garden', icon: '🏠' },
    { id: 'beauty', name: 'Beauty & Health', icon: '💄' }
  ];

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    if (onCategoryChange) {
      onCategoryChange(categoryId);
    }
  };

  return (
    <section className="category-sections">
      <div className="category-containers">
        <h3 className="category-title">Shop by Category</h3>
        <div className="category-grids">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-cardsss ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category.id)}
            >
              <span className="categories-icon">{category.icon}</span>
              <span className="categories-name">{category.name}</span>
              <div className="category-hover-effect"></div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;