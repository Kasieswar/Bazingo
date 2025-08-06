import React, { useState } from 'react'
import sellersData from '../../Data/sellers.json';
import SellerCard from './sellercard';
import '../../Pages/quickmatch.css';

const categories = ['All', 'Kitchen', 'Furniture', 'Electronics', 'Kids & Toys', 'Fashion', 'Beauty'];

const ITEMS_PER_PAGE = 6;

function SuggestedMatches() {

    const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredSellers = selectedCategory === 'All'
    ? sellersData
    : sellersData.filter(seller => seller.category === selectedCategory);

  const totalPages = Math.ceil(filteredSellers.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedSellers = filteredSellers.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // reset to first page when category changes
  };


  return (
    <div>
      <section className="suggested-sellers">
      <h2>Suggested Matches for You</h2>
      <p>We’ve found trusted sellers that match your requirements. Filter by category, price or more options.</p>

      <div className="category-filter">
        {categories.map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? 'active' : ''}
            onClick={() => handleCategoryClick(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="seller-grid">
        {paginatedSellers.map((seller, idx) => (
          <SellerCard key={idx} seller={seller} />
        ))}
      </div>

      <div className="paginate">
        <button disabled={currentPage === 1} onClick={() => setCurrentPage(prev => prev - 1)}>‹</button>
        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx}
            className={currentPage === idx + 1 ? 'active' : ''}
            onClick={() => setCurrentPage(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}
        <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(prev => prev + 1)}>›</button>
      </div>
    </section>
    </div>
  )
}

export default SuggestedMatches
