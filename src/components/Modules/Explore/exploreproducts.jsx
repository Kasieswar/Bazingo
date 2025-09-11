import React, { useState, useMemo } from 'react';
import { Smartphone, Shirt, Utensils, Heart, Dumbbell, BookOpen, Plane, PawPrint, Home,  Palette,  Baby, Laptop, Headphones,Watch,Camera,Monitor, Cpu,HardDrive,Gamepad2,Filter, ChevronDown, Grid, List, Star} from 'lucide-react';
import '../../Pages/explorepage.css';

const ExploreProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [viewType, setViewType] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [wishlistProducts, setWishlistProducts] = useState(new Set());
  const [inquirySent, setInquirySent] = useState(new Set());
  const [playingVideos, setPlayingVideos] = useState(new Set());
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const categories = [
    { 
      name: 'Technology', 
      icon: Smartphone, 
      description: 'Gadgets & Devices',
      subCategories: [
        { name: 'Mobile Phones', icon: Smartphone },
        { name: 'Laptops', icon: Laptop },
        { name: 'Audio Accessories', icon: Headphones },
        { name: 'Smart Watches', icon: Watch },
        { name: 'Cameras', icon: Camera },
        { name: 'Monitors', icon: Monitor },
        { name: 'Computer Parts', icon: Cpu },
        { name: 'Storage Devices', icon: HardDrive },
        { name: 'Gaming', icon: Gamepad2 }
      ]
    },
    { 
      name: 'Fashion', 
      icon: Shirt, 
      description: 'Clothing & Accessories',
      subCategories: [
        { name: 'Men\'s Clothing', icon: Shirt },
        { name: 'Women\'s Clothing', icon: Shirt },
        { name: 'Accessories', icon: Watch },
        { name: 'Footwear', icon: Shirt }
      ]
    },
    { 
      name: 'Food', 
      icon: Utensils, 
      description: 'Gourmet & Dining',
      subCategories: [
        { name: 'Organic Foods', icon: Utensils },
        { name: 'Beverages', icon: Utensils },
        { name: 'Snacks', icon: Utensils },
        { name: 'Spices', icon: Utensils }
      ]
    },
    { 
      name: 'Health', 
      icon: Heart, 
      description: 'Wellness & Beauty',
      subCategories: [
        { name: 'Supplements', icon: Heart },
        { name: 'Beauty Products', icon: Heart },
        { name: 'Medical Equipment', icon: Heart },
        { name: 'Fitness Equipment', icon: Dumbbell }
      ]
    },
    { 
      name: 'Sports & Fitness', 
      icon: Dumbbell, 
      description: 'Equipment & Gear',
      subCategories: [
        { name: 'Gym Equipment', icon: Dumbbell },
        { name: 'Sports Gear', icon: Dumbbell },
        { name: 'Outdoor Equipment', icon: Dumbbell },
        { name: 'Athletic Wear', icon: Shirt }
      ]
    },
    { 
      name: 'Books', 
      icon: BookOpen, 
      description: 'Literature & Media',
      subCategories: [
        { name: 'Educational Books', icon: BookOpen },
        { name: 'Fiction', icon: BookOpen },
        { name: 'Technical Books', icon: BookOpen },
        { name: 'E-books', icon: BookOpen }
      ]
    },
    { 
      name: 'Travel', 
      icon: Plane, 
      description: 'Luggage & Gear',
      subCategories: [
        { name: 'Luggage', icon: Plane },
        { name: 'Travel Accessories', icon: Plane },
        { name: 'Outdoor Gear', icon: Plane },
        { name: 'Travel Electronics', icon: Smartphone }
      ]
    },
    { 
      name: 'Pets', 
      icon: PawPrint, 
      description: 'Supplies & Care',
      subCategories: [
        { name: 'Pet Food', icon: PawPrint },
        { name: 'Pet Toys', icon: PawPrint },
        { name: 'Pet Care', icon: PawPrint },
        { name: 'Pet Accessories', icon: PawPrint }
      ]
    },
    { 
      name: 'Home & Garden', 
      icon: Home, 
      description: 'Decor & Furniture',
      subCategories: [
        { name: 'Furniture', icon: Home },
        { name: 'Home Decor', icon: Home },
        { name: 'Garden Tools', icon: Home },
        { name: 'Kitchen Appliances', icon: Utensils }
      ]
    },
    { 
      name: 'Art', 
      icon: Palette, 
      description: 'Crafts & Supplies',
      subCategories: [
        { name: 'Art Supplies', icon: Palette },
        { name: 'Craft Materials', icon: Palette },
        { name: 'Digital Art Tools', icon: Palette },
        { name: 'Paintings', icon: Palette }
      ]
    },
    { 
      name: 'Baby & Kids', 
      icon: Baby, 
      description: 'Toys & Essentials',
      subCategories: [
        { name: 'Baby Care', icon: Baby },
        { name: 'Toys', icon: Baby },
        { name: 'Kids Clothing', icon: Shirt },
        { name: 'Educational Toys', icon: BookOpen }
      ]
    }
  ];

  const allProducts = [
    {
      id: 1,
      name: 'Wireless Bluetooth Headphones',
      image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
      priceRange: '₹800 - ₹1,200',
      minOrder: 100,
      maxOrder: 10000,
      supplier: 'ElectroTech Industries',
      location: 'Delhi, India',
      rating: 4.8,
      reviews: 242,
      verified: true,
      supplierType: 'Verified Supplier',
      badges: ['Export Ready', 'Manufacturer'],
      experience: '12 years experience',
      businessType: 'Manufacturer',
      category: 'Technology',
      subCategory: 'Audio Accessories'
    },
    {
      id: 2,
      name: 'iPhone 15 Pro Max',
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=687&auto=format&fit=crop',
      video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4',
      priceRange: '₹80,000 - ₹1,20,000',
      minOrder: 10,
      maxOrder: 1000,
      supplier: 'Mobile World',
      location: 'Mumbai, Maharashtra',
      rating: 4.9,
      reviews: 340,
      verified: true,
      supplierType: 'Premium Supplier',
      badges: ['Export Ready', 'Authorized Dealer'],
      experience: '15 years experience',
      businessType: 'Retailer',
      category: 'Technology',
      subCategory: 'Mobile Phones'
    },
    {
      id: 3,
      name: 'Gaming Laptop RTX 4070',
      image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=687&auto=format&fit=crop',
      video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4',
      priceRange: '₹1,20,000 - ₹1,80,000',
      minOrder: 5,
      maxOrder: 100,
      supplier: 'Tech Solutions',
      location: 'Bangalore, Karnataka',
      rating: 4.7,
      reviews: 156,
      verified: true,
      supplierType: 'Gold Supplier',
      badges: ['Gaming Series', 'High Performance'],
      experience: '10 years experience',
      businessType: 'Distributor',
      category: 'Technology',
      subCategory: 'Laptops'
    },
    {
      id: 4,
      name: 'Cotton T-Shirts (Export Quality)',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop',
      video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4',
      priceRange: '₹120 - ₹180',
      minOrder: 500,
      maxOrder: 50000,
      supplier: 'Mumbai Textile Mills',
      location: 'Mumbai, Maharashtra',
      rating: 4.6,
      reviews: 189,
      verified: true,
      supplierType: 'Gold Supplier',
      badges: ['Export Ready', 'Manufacturer & Exporter'],
      experience: '18 years experience',
      businessType: 'Manufacturer & Exporter',
      category: 'Fashion',
      subCategory: 'Men\'s Clothing'
    },
    {
      id: 5,
      name: 'Designer Handbags',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=687&auto=format&fit=crop',
      video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
      priceRange: '₹2,500 - ₹8,000',
      minOrder: 50,
      maxOrder: 2000,
      supplier: 'Fashion Hub',
      location: 'Delhi, India',
      rating: 4.5,
      reviews: 98,
      verified: true,
      supplierType: 'Trending Supplier',
      badges: ['Designer Collection', 'Premium Quality'],
      experience: '8 years experience',
      businessType: 'Wholesaler',
      category: 'Fashion',
      subCategory: 'Accessories'
    },
    {
      id: 6,
      name: 'Organic Tea Leaves (Bulk)',
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=300&fit=crop',
      video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
      priceRange: '₹400 - ₹800',
      minOrder: 25,
      maxOrder: 2000,
      supplier: 'Himalayan Tea Gardens',
      location: 'Darjeeling, West Bengal',
      rating: 4.7,
      reviews: 98,
      verified: true,
      supplierType: 'Organic Certified',
      badges: ['Manufacturer', '25 years experience'],
      experience: '25 years experience',
      businessType: 'Manufacturer',
      category: 'Food',
      subCategory: 'Organic Foods'
    },
    {
      id: 7,
      name: 'Protein Supplements',
      image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=687&auto=format&fit=crop',
      video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4',
      priceRange: '₹1,500 - ₹4,000',
      minOrder: 100,
      maxOrder: 5000,
      supplier: 'HealthCare Products',
      location: 'Chennai, Tamil Nadu',
      rating: 4.8,
      reviews: 267,
      verified: true,
      supplierType: 'ISO Certified',
      badges: ['Health Certified', '100% Natural'],
      experience: '12 years experience',
      businessType: 'Manufacturer',
      category: 'Health',
      subCategory: 'Supplements'
    },
    {
      id: 8,
      name: 'Fitness Dumbbells Set',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=687&auto=format&fit=crop',
      video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4',
      priceRange: '₹3,000 - ₹12,000',
      minOrder: 20,
      maxOrder: 500,
      supplier: 'Fitness World',
      location: 'Pune, Maharashtra',
      rating: 4.6,
      reviews: 134,
      verified: true,
      supplierType: 'Premium Supplier',
      badges: ['Heavy Duty', 'Professional Grade'],
      experience: '15 years experience',
      businessType: 'Retailer',
      category: 'Sports & Fitness',
      subCategory: 'Gym Equipment'
    }
  ];

  // Filter products based on selected category and subcategory
  const filteredProducts = useMemo(() => {
    let filtered = allProducts;
    
    if (selectedCategory !== null) {
      const categoryName = categories[selectedCategory].name;
      filtered = filtered.filter(product => product.category === categoryName);
      
      if (selectedSubCategory !== null) {
        const subCategoryName = categories[selectedCategory].subCategories[selectedSubCategory].name;
        filtered = filtered.filter(product => product.subCategory === subCategoryName);
      }
    }
    
    return filtered;
  }, [selectedCategory, selectedSubCategory, categories, allProducts]);

  // Handle category selection
  const handleCategorySelect = (index) => {
    setSelectedCategory(index);
    setSelectedSubCategory(null); // Reset subcategory selection
  };

  // Handle subcategory selection
  const handleSubCategorySelect = (index) => {
    setSelectedSubCategory(index);
  };

  const toggleWishlist = (productId) => {
    setWishlistProducts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  const sendInquiry = (productId) => {
    setInquirySent(prev => new Set([...prev, productId]));
  };

  const toggleVideo = (productId) => {
    setPlayingVideos(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  const FilterSidebar = () => (
    <div className="filter-sidebar-main">
      <h3 className="filter-title-main">
        <Filter className="filter-icon-main" />
        Filters
      </h3>
      
      {/* Price Range */}
      <div className="filter-section-main">
        <h4 className="filter-section-title-main">Price Range</h4>
        <div className="filter-options-main">
          <label className="filter-option-main">
            <input type="checkbox" className="filter-checkbox-main" />
            <span className="filter-label-main">Under ₹100</span>
          </label>
          <label className="filter-option-main">
            <input type="checkbox" className="filter-checkbox-main" />
            <span className="filter-label-main">₹100 - ₹500</span>
          </label>
          <label className="filter-option-main">
            <input type="checkbox" className="filter-checkbox-main" />
            <span className="filter-label-main">₹500 - ₹1,000</span>
          </label>
          <label className="filter-option-main">
            <input type="checkbox" className="filter-checkbox-main" />
            <span className="filter-label-main">Over ₹1,000</span>
          </label>
        </div>
      </div>

      {/* Rating */}
      <div className="filter-section-main">
        <h4 className="filter-section-title-main">Rating</h4>
        <div className="filter-options-main">
          {[5, 4, 3].map((rating) => (
            <label key={rating} className="filter-option-main">
              <input type="checkbox" className="filter-checkbox-main" />
              <span className="rating-filter-main">
                {[...Array(rating)].map((_, i) => (
                  <Star key={i} className="star-filled-main" />
                ))}
                <span className="rating-text-main">& up</span>
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Supplier Type */}
      <div className="filter-section-main">
        <h4 className="filter-section-title-main">Supplier Type</h4>
        <div className="filter-options-main">
          <label className="filter-option-main">
            <input type="checkbox" className="filter-checkbox-main" />
            <span className="filter-label-main">Verified Supplier</span>
          </label>
          <label className="filter-option-main">
            <input type="checkbox" className="filter-checkbox-main" />
            <span className="filter-label-main">Gold Supplier</span>
          </label>
          <label className="filter-option-main">
            <input type="checkbox" className="filter-checkbox-main" />
            <span className="filter-label-main">Premium Supplier</span>
          </label>
        </div>
      </div>
    </div>
  );

  const ProductCard = ({ product }) => (
    <div 
      className={`listing-product-card ${playingVideos.has(product.id) ? 'video-playing' : ''}`}
      onMouseEnter={() => setHoveredProduct(product.id)}
      onMouseLeave={() => setHoveredProduct(null)}
    >
      {/* Video Section */}
      <div className="listing-product-media-section">
        <div className="listing-product-media-container">
          {playingVideos.has(product.id) ? (
            <video
              className="listing-product-video"
              src={product.video}
              autoPlay
              muted
              loop
              playsInline
              controls
              poster={product.image}
            />
          ) : (
            <div className="listing-product-thumbnail">
              <img src={product.image} alt={product.name} className="listing-product-image" />
              <div className="listing-play-overlay">
                <button 
                  className="listing-play-btn"
                  onClick={() => toggleVideo(product.id)}
                >
                  <i className="fas fa-play listing-play-icon"></i>
                </button>
              </div>
            </div>
          )}

          {/* Badges and wishlist - hidden when video is playing */}
          {!playingVideos.has(product.id) && (
            <>
              <div className="listing-product-badges">
                <span className="listing-supplier-badge">
                  {product.supplierType}
                </span>
                {product.badges.includes('Export Ready') && <span className="listing-export-badge">Export Ready</span>}
              </div>
              
              <button
                className={`listing-wishlist-btn ${wishlistProducts.has(product.id) ? 'active' : ''}`}
                onClick={() => toggleWishlist(product.id)}
                title="Add to Watchlist"
              >
                <i className="fas fa-heart"></i>
              </button>
            </>
          )}
          
          {/* Video controls */}
          <div className="listing-video-controls">
            {!playingVideos.has(product.id) ? (
              <button 
                className="listing-video-control-btn listing-play-video-btn"
                onClick={() => toggleVideo(product.id)}
                title="Play Video"
              >
                <i className="fas fa-play"></i>
              </button>
            ) : (
              <button 
                className="listing-video-control-btn listing-stop-video-btn"
                onClick={() => toggleVideo(product.id)}
                title="Stop Video"
              >
                <i className="fas fa-stop"></i>
              </button>
            )}
          </div>
          
          {/* Quick view overlay - hidden when video is playing */}
          {!playingVideos.has(product.id) && (
            <div className="listing-product-overlay">
              <button className="listing-quick-view-btn">
                <i className="fas fa-eye"></i>
                View Details
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="listing-product-content">
        <h3 className="listing-product-name">{product.name}</h3>
        
        <div className="listing-supplier-info">
          <div className="listing-supplier-name">
            <i className="fas fa-industry listing-supplier-icon"></i>
            <span>{product.supplier}</span>
          </div>
          <div className="listing-supplier-location">
            <i className="fas fa-map-marker-alt listing-location-icon"></i>
            <span>{product.location}</span>
          </div>
        </div>
        
        <div className="listing-business-details">
          <span className="listing-business-type">{product.businessType}</span>
          <span className="listing-experience">{product.experience}</span>
        </div>
        
        <div className="listing-product-rating">
          <div className="listing-stars">
            {[...Array(5)].map((_, i) => (
              <i 
                key={i} 
                className={`fas fa-star ${i < Math.floor(product.rating) ? 'filled' : 'empty'}`}
              ></i>
            ))}
          </div>
          <span className="listing-rating-value">{product.rating}</span>
          <span className="listing-rating-text">({product.reviews} reviews)</span>
        </div>

        <div className="listing-pricing-info">
          <div className="listing-price-range">
            <span className="listing-price-label">Price Range:</span>
            <span className="listing-price-value">{product.priceRange}/piece</span>
          </div>
          <div className="listing-order-quantity">
            <span className="listing-moq-label">MOQ:</span>
            <span className="listing-moq-value">{product.minOrder} pieces</span>
          </div>
        </div>

        <div className="listing-product-features">
          <span className="listing-feature-tag">
            <i className="fas fa-user listing-features-icon"></i>
            MOQ: {product.minOrder}
          </span>
          <span className="listing-feature-tag">
            <i className="fas fa-box listing-features-icon"></i>
            Max: {product.maxOrder.toLocaleString()}
          </span>
        </div>

        <div className="listing-action-buttons">
          <button className="listing-contact-btn">
            <i className="fas fa-phone"></i>
            Call Now
          </button>
          <button
            className={`listing-inquiry-btn ${inquirySent.has(product.id) ? 'sent' : ''}`}
            onClick={() => sendInquiry(product.id)}
          >
            <i className="fas fa-comment-dots"></i>
            {inquirySent.has(product.id) ? 'Inquiry Sent' : 'Send Inquiry'}
          </button>
        </div>
      </div>
    </div>
  );

  const NoProductsFound = () => (
    <div className="no-products-container">
      <div className="no-products-content">
        <div className="no-products-icon">
          <i className="fas fa-search"></i>
        </div>
        <h3 className="no-products-title">No Products Found</h3>
        <p className="no-products-description">
          We couldn't find any products in this category. Try selecting a different category or subcategory.
        </p>
        <button 
          className="no-products-reset-btn"
          onClick={() => {
            setSelectedCategory(0);
            setSelectedSubCategory(null);
          }}
        >
          Reset Filters
        </button>
      </div>
    </div>
  );

  return (
    <section className="combined-explore-product">
      <div className="containers">
        {/* Categories Section */}
        <div className="categories-grids">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            const isSelected = selectedCategory === index;
            
            return (
              <div
                key={index}
                onClick={() => handleCategorySelect(index)}
                className={`category-cardz ${isSelected ? 'selected' : ''}`}
              >
                <div className="category-content">
                  <div className={`icon-container ${isSelected ? 'selected' : ''}`}>
                    <IconComponent className="category-icon" />
                  </div>
                  <h3 className={`category-title ${isSelected ? 'selected' : ''}`}>
                    {category.name}
                  </h3>
                  <p className="category-description">
                    {category.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sub-Categories */}
        {selectedCategory !== null && categories[selectedCategory].subCategories.length > 0 && (
          <div className="subcategories-container">
            <div className="subcategories-header">
              <div className="subcategories-icon">
                {React.createElement(categories[selectedCategory].icon, { 
                  className: "subcategories-icon-svg" 
                })}
              </div>
              <h3 className="subcategories-title">
                {categories[selectedCategory].name} Sub-Categories
              </h3>
            </div>
            
            <div className="subcategories-grid">
              {categories[selectedCategory].subCategories.map((subCategory, subIndex) => {
                const SubIconComponent = subCategory.icon;
                const isSelected = selectedSubCategory === subIndex;
                return (
                  <div 
                    key={subIndex} 
                    className={`subcategory-card ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleSubCategorySelect(subIndex)}
                  >
                    <div className="subcategory-content">
                      <div className={`subcategory-icon-container ${isSelected ? 'selected' : ''}`}>
                        <SubIconComponent className="subcategory-icon" />
                      </div>
                      <h4 className={`subcategory-title ${isSelected ? 'selected' : ''}`}>
                        {subCategory.name}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Product Listing Section */}
        
      </div>
    </section>
  );
};

export default ExploreProducts;