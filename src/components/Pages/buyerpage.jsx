import React, { useState } from 'react'
import Header from '../Modules/header'
import Footer from '../Modules/footer'
import BuyerHero from '../Modules/BuyerPage/buyerhero'
import CategoriesSection from '../Modules/BuyerPage/categories'
import ProductsGrid from '../Modules/BuyerPage/productsgrid'

function BuyerPage() {
  // State for category and search
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Handler for category changes
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  // Handler for search changes
  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <Header onSearchChange={handleSearchChange} />
      <BuyerHero />
      <CategoriesSection 
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />
      {/* <ProductsGrid 
        activeCategory={activeCategory}
        searchQuery={searchQuery}
      /> */}
      <Footer />
    </div>
  )
}

export default BuyerPage