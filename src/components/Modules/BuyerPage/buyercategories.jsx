import React, { useState } from 'react';
import '../../Pages/buyerpage.css';

const CategoriesSection = ({ onCategoryChange }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  
    const categories = [
  { id: 'all', name: 'All Products', subtitle: 'Everything & More', icon: 'fas fa-shopping-bag' },
  { id: 'electronics', name: 'Technology', subtitle: 'Electronics & Gadgets', icon: 'fas fa-mobile-alt' },
  { id: 'fashion', name: 'Fashion', subtitle: 'Clothing & Accessories', icon: 'fas fa-tshirt' },
  { id: 'food', name: 'Food', subtitle: 'Gourmet & Dining', icon: 'fas fa-utensils' },
  { id: 'health', name: 'Health', subtitle: 'Wellness & Beauty', icon: 'fas fa-heartbeat' },
  { id: 'sports', name: 'Sports & Fitness', subtitle: 'Equipment & Gear', icon: 'fas fa-dumbbell' },
  { id: 'books', name: 'Books', subtitle: 'Education & Media', icon: 'fas fa-book' },
  { id: 'travel', name: 'Travel', subtitle: 'Luggage & Gear', icon: 'fas fa-plane' },
  { id: 'pets', name: 'Pets', subtitle: 'Supplies & Care', icon: 'fas fa-paw' },
  { id: 'home', name: 'Home & Garden', subtitle: 'Decor & Furniture', icon: 'fas fa-home' },
  { id: 'art', name: 'Art', subtitle: 'Crafts & Supplies', icon: 'fas fa-palette' },
  { id: 'baby', name: 'Baby & Kids', subtitle: 'Toys & Essentials', icon: 'fas fa-baby' }
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
        <h3 className="category-titless">Shop by Categories</h3>
        <div className="category-grids">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-cardsss ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category.id)}
            >
              <i className={`categories-icon ${category.icon}`}></i>
              <div>
                <span className="categories-name">{category.name}</span>
                <div className="category-subtitle-text">{category.subtitle}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;