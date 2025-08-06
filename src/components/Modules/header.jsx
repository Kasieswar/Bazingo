import React from 'react';
import { Search, Bell, ShoppingCart, User } from 'lucide-react';


const BazingoHeader = () => {
  return (
    <header className="bazingo-header">
      <div className="bazingo-container">
        {/* Logo */}
        <div className="bazingo-logo">
          <h1 className="bazingo-logo-text">
            Bazingo
          </h1>
        </div>

        {/* Search Bar */}
        <div className="bazingo-search-container">
          <div className="bazingo-search-wrapper">
            <div className="bazingo-search-icon">
              <Search size={20} color="#003D40" />
            </div>
            <input
              type="text"
              name='search'
              placeholder="Search for products, categories..."
              className="bazingo-search-input"
            />
          </div>
        </div>

        {/* Action Icons */}
        <div className="bazingo-actions">
          <button className="bazingo-icon-button">
            <Bell size={24} />
          </button>
          <button className="bazingo-icon-button">
            <ShoppingCart size={24} />
          </button>
          <button className="bazingo-icon-button">
            <User size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default BazingoHeader;