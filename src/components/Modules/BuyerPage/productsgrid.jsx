import React, { useState } from 'react';
import { ShoppingCart, Heart, Star, Truck, Package, Eye, MapPin, Play, Pause, Users, Factory, Phone, MessageCircle } from 'lucide-react';
import '../../Pages/buyerpage.css';

const ProductsGrid = ({ 
  activeCategory = 'all', 
  searchQuery = ''
}) => {
  const [wishlistItems, setWishlistItems] = useState(new Set());
  const [inquiryItems, setInquiryItems] = useState(new Set());
  const [sortBy, setSortBy] = useState('featured');
  const [playingVideos, setPlayingVideos] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);

  // Mock data for B2B bulk products
  const allProducts = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      priceRange: "₹800 - ₹1,200",
      minOrder: 100,
      maxOrder: 10000,
      rating: 4.8,
      reviews: 243,
      video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      thumbnail: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "electronics",
      supplier: "ElectroTech Industries",
      location: "Delhi, India",
      badge: "Verified Supplier",
      exportReady: true,
      gstNo: "07AABCE2207R1Z5",
      businessType: "Manufacturer",
      experience: "12 years"
    },
    {
      id: 2,
      name: "Cotton T-Shirts (Export Quality)",
      priceRange: "₹120 - ₹180",
      minOrder: 500,
      maxOrder: 50000,
      rating: 4.6,
      reviews: 189,
      video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
      thumbnail: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
      category: "textiles",
      supplier: "Mumbai Textile Mills",
      location: "Mumbai, Maharashtra",
      badge: "Gold Supplier",
      exportReady: true,
      gstNo: "27AABCT6203R1Z2",
      businessType: "Manufacturer & Exporter",
      experience: "18 years"
    },
    {
      id: 3,
      name: "IP Security Camera Systems",
      priceRange: "₹2,500 - ₹4,200",
      minOrder: 50,
      maxOrder: 5000,
      rating: 4.9,
      reviews: 156,
      video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4",
      thumbnail: "https://images.unsplash.com/photo-1585206031650-9e9a7c87dcfe?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "electronics",
      supplier: "SecureVision Technologies",
      location: "Pune, Maharashtra",
      badge: "Premium Supplier",
      exportReady: false,
      gstNo: "27AABCS1234R1Z8",
      businessType: "Trader",
      experience: "8 years"
    },
    {
      id: 4,
      name: "Organic Tea Leaves (Bulk)",
      priceRange: "₹400 - ₹800",
      minOrder: 25,
      maxOrder: 2000,
      rating: 4.7,
      reviews: 98,
      video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      thumbnail: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=300&fit=crop",
      category: "food",
      supplier: "Himalayan Tea Gardens",
      location: "Darjeeling, West Bengal",
      badge: "Organic Certified",
      exportReady: true,
      gstNo: "19AABCH5678R1Z3",
      businessType: "Manufacturer",
      experience: "25 years"
    },
    {
      id: 5,
      name: "LED Panel Lights (Commercial)",
      priceRange: "₹1,800 - ₹3,500",
      minOrder: 200,
      maxOrder: 20000,
      rating: 4.9,
      reviews: 267,
      video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
      thumbnail: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&h=300&fit=crop",
      category: "electronics",
      supplier: "Luminous Industries",
      location: "Gurgaon, Haryana",
      badge: "ISO Certified",
      exportReady: true,
      gstNo: "06AABCL9012R1Z7",
      businessType: "Manufacturer",
      experience: "15 years"
    },
    {
      id: 6,
      name: "Fashion Sunglasses (Wholesale)",
      priceRange: "₹250 - ₹450",
      minOrder: 300,
      maxOrder: 15000,
      rating: 4.5,
      reviews: 134,
      video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4",
      thumbnail: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=300&h=300&fit=crop",
      category: "fashion",
      supplier: "Style Hub Accessories",
      location: "Rajkot, Gujarat",
      badge: "Trending Supplier",
      exportReady: false,
      gstNo: "24AABCS3456R1Z1",
      businessType: "Wholesaler",
      experience: "6 years"
    }
  ];

  const toggleWishlist = (productId) => {
    setWishlistItems(prev => {
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
    setInquiryItems(prev => new Set([...prev, productId]));
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

  const filterProducts = () => {
    let filtered = allProducts.filter(product => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      const matchesSearch = !searchQuery || searchQuery === '' || 
                           product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.supplier.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.location.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });

    switch (sortBy) {
      case 'priceLow':
        filtered.sort((a, b) => parseInt(a.priceRange.split(' - ₹')[1]) - parseInt(b.priceRange.split(' - ₹')[1]));
        break;
      case 'priceHigh':
        filtered.sort((a, b) => parseInt(b.priceRange.split(' - ₹')[1]) - parseInt(a.priceRange.split(' - ₹')[1]));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'minOrder':
        filtered.sort((a, b) => a.minOrder - b.minOrder);
        break;
      default:
        break;
    }

    return filtered;
  };

  const filteredProducts = filterProducts();

  const getCategoryName = () => {
    const categories = {
      'all': 'All Products',
      'electronics': 'Electronics & Electrical',
      'textiles': 'Textiles & Garments',
      'food': 'Food & Agriculture',
      'chemicals': 'Chemicals & Pharmaceuticals',
      'machinery': 'Industrial Machinery',
      'construction': 'Construction Materials',
      'fashion': 'Fashion & Accessories'
    };
    return categories[activeCategory] || 'Products';
  };

  return (
    <section className="products-section">
      <div className="products-container">
        <div className="products-header">
          <h3 className="section-title">
            {getCategoryName()}
            <span className="results-count">({filteredProducts.length} suppliers)</span>
          </h3>
          <div className="sort-options">
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="featured">Sort by: Featured</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
              <option value="rating">Supplier Rating</option>
              <option value="minOrder">Min Order Quantity</option>
            </select>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="no-products">
            <div className="no-products-icon">🏭</div>
            <h4>No suppliers found</h4>
            <p>Try adjusting your search terms or selecting a different category</p>
          </div>
        ) : (
          <div className="products-grid">
            {filteredProducts.map(product => (
              <div 
                key={product.id} 
                className="product-card"
                onMouseEnter={() => setHoveredCard(product.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="product-video-container">
                  {playingVideos.has(product.id) || hoveredCard === product.id ? (
                    <video
                      className="product-video"
                      src={product.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      poster={product.thumbnail}
                    />
                  ) : (
                    <div className="product-thumbnail">
                      <img src={product.thumbnail} alt={product.name} className="product-image" />
                      <div className="play-overlay">
                        <button 
                          className="play-btn"
                          onClick={() => toggleVideo(product.id)}
                        >
                          <Play className="play-icon" />
                        </button>
                      </div>
                    </div>
                  )}
                  
                  <div className="product-badges">
                    {product.badge && <span className="product-badge">{product.badge}</span>}
                    {product.exportReady && <span className="export-badge">Export Ready</span>}
                  </div>
                  
                  <button
                    className={`wishlist-btn ${wishlistItems.has(product.id) ? 'active' : ''}`}
                    onClick={() => toggleWishlist(product.id)}
                    title="Add to Watchlist"
                  >
                    <Heart />
                  </button>
                  
                  <div className="video-controls">
                    <button 
                      className="video-control-btn"
                      onClick={() => toggleVideo(product.id)}
                    >
                      {playingVideos.has(product.id) ? <Pause /> : <Play />}
                    </button>
                  </div>
                  
                  <div className="product-overlay">
                    <button className="quick-view-btn">
                      <Eye />
                      View Details
                    </button>
                  </div>
                </div>

                <div className="product-info">
                  <h4 className="product-name">{product.name}</h4>
                  
                  <div className="supplier-info">
                    <div className="supplier-name">
                      <Factory className="supplier-icon" />
                      <span>{product.supplier}</span>
                    </div>
                    <div className="supplier-location">
                      <MapPin className="location-icon" />
                      <span>{product.location}</span>
                    </div>
                  </div>
                  
                  <div className="business-details">
                    <span className="business-type">{product.businessType}</span>
                    <span className="experience">{product.experience} experience</span>
                  </div>
                  
                  <div className="product-rating">
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={i < Math.floor(product.rating) ? 'filled' : 'empty'} />
                      ))}
                    </div>
                    <span className="rating-value">{product.rating}</span>
                    <span className="rating-text">({product.reviews} reviews)</span>
                  </div>

                  <div className="pricing-info">
                    <div className="price-range">
                      <span className="price-label">Price Range:</span>
                      <span className="price-value">{product.priceRange}/piece</span>
                    </div>
                    <div className="order-quantity">
                      <span className="moq-label">MOQ:</span>
                      <span className="moq-value">{product.minOrder} pieces</span>
                    </div>
                  </div>

                  <div className="product-features">
                    <span className="feature-tag">
                      <Users className="feature-icon" />
                      MOQ: {product.minOrder}
                    </span>
                    <span className="feature-tag">
                      <Package className="feature-icon" />
                      Max: {product.maxOrder.toLocaleString()}
                    </span>
                  </div>

                  <div className="action-buttons">
                    <button className="contact-btn">
                      <Phone />
                      Call Now
                    </button>
                    <button
                      className={`inquiry-btn ${inquiryItems.has(product.id) ? 'sent' : ''}`}
                      onClick={() => sendInquiry(product.id)}
                    >
                      <MessageCircle />
                      {inquiryItems.has(product.id) ? 'Inquiry Sent' : 'Send Inquiry'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsGrid;