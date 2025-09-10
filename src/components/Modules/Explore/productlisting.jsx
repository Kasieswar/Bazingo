import React, { useState } from 'react';
import { Filter, ChevronDown, Grid, List, Star, MapPin, ShoppingCart, Heart, Eye, Phone, MessageCircle } from 'lucide-react';

const ProductListing = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [viewType, setViewType] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');

  const products = [
    {
      id: 1,
      name: 'Wireless Bluetooth Headphones',
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '₹800 - ₹1,200',
      pricePerPiece: '/piece',
      minOrder: '100 pieces',
      maxOrder: '10,000',
      supplier: 'ElectroTech Industries',
      location: 'Delhi, India',
      rating: 4.8,
      reviews: 242,
      verified: true,
      supplierType: 'Verified Supplier',
      badges: ['Export Ready', 'Manufacturer'],
      experience: '12 years experience',
      responseRate: '98%'
    },
    {
      id: 2,
      name: 'Cotton T-Shirts (Export Quality)',
      image: 'https://images.pexels.com/photos/1020585/pexels-photo-1020585.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '₹120 - ₹180',
      pricePerPiece: '/piece',
      minOrder: '500 pieces',
      maxOrder: '50,000',
      supplier: 'Mumbai Textile Mills',
      location: 'Mumbai, Maharashtra',
      rating: 4.6,
      reviews: 189,
      verified: true,
      supplierType: 'Gold Supplier',
      badges: ['Export Ready', 'Manufacturer & Exporter'],
      experience: '18 years experience',
      responseRate: '95%'
    },
    {
      id: 3,
      name: 'IP Security Camera Systems',
      image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '₹2,500 - ₹4,200',
      pricePerPiece: '/piece',
      minOrder: '50 pieces',
      maxOrder: '5,000',
      supplier: 'SecureVision Technologies',
      location: 'Pune, Maharashtra',
      rating: 4.9,
      reviews: 156,
      verified: true,
      supplierType: 'Premium Supplier',
      badges: ['Trader', '8 years experience'],
      experience: '8 years experience',
      responseRate: '92%'
    },
    {
      id: 4,
      name: 'Organic Tea Leaves (Bulk)',
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '₹400 - ₹800',
      pricePerPiece: '/piece',
      minOrder: '25 pieces',
      maxOrder: '2,000',
      supplier: 'Himalayan Tea Gardens',
      location: 'Darjeeling, West Bengal',
      rating: 4.7,
      reviews: 98,
      verified: true,
      supplierType: 'Organic Certified',
      badges: ['Manufacturer', '25 years experience'],
      experience: '25 years experience',
      responseRate: '89%'
    },
    {
      id: 5,
      name: 'LED Panel Lights (Commercial)',
      image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '₹1,800 - ₹2,500',
      pricePerPiece: '/piece',
      minOrder: '200 pieces',
      maxOrder: '20,000',
      supplier: 'Luminous Industries',
      location: 'Gurgaon, Haryana',
      rating: 4.8,
      reviews: 267,
      verified: true,
      supplierType: 'ISO Certified',
      badges: ['Manufacturer', '16 years experience'],
      experience: '16 years experience',
      responseRate: '96%'
    },
    {
      id: 6,
      name: 'Fashion Sunglasses (Wholesale)',
      image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '₹250 - ₹450',
      pricePerPiece: '/piece',
      minOrder: '300 pieces',
      maxOrder: '15,000',
      supplier: 'Style Hub Accessories',
      location: 'Rajkot, Gujarat',
      rating: 4.5,
      reviews: 134,
      verified: true,
      supplierType: 'Trending Supplier',
      badges: ['Wholesaler', '9 years experience'],
      experience: '9 years experience',
      responseRate: '91%'
    }
  ];

  const FilterSidebar = () => (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
      <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
        <Filter className="h-5 w-5 mr-2 text-teal-600" />
        Filters
      </h3>
      
      {/* Price Range */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-700 mb-3">Price Range</h4>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" className="rounded border-gray-300 text-teal-600 focus:ring-teal-500" />
            <span className="ml-2 text-sm text-gray-600">Under ₹100</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="rounded border-gray-300 text-teal-600 focus:ring-teal-500" />
            <span className="ml-2 text-sm text-gray-600">₹100 - ₹500</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="rounded border-gray-300 text-teal-600 focus:ring-teal-500" />
            <span className="ml-2 text-sm text-gray-600">₹500 - ₹1,000</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="rounded border-gray-300 text-teal-600 focus:ring-teal-500" />
            <span className="ml-2 text-sm text-gray-600">Over ₹1,000</span>
          </label>
        </div>
      </div>

      {/* Rating */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-700 mb-3">Rating</h4>
        <div className="space-y-2">
          {[5, 4, 3].map((rating) => (
            <label key={rating} className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-teal-600 focus:ring-teal-500" />
              <span className="ml-2 flex items-center">
                {[...Array(rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-1 text-sm text-gray-600">& up</span>
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Supplier Type */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-700 mb-3">Supplier Type</h4>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" className="rounded border-gray-300 text-teal-600 focus:ring-teal-500" />
            <span className="ml-2 text-sm text-gray-600">Verified Supplier</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="rounded border-gray-300 text-teal-600 focus:ring-teal-500" />
            <span className="ml-2 text-sm text-gray-600">Gold Supplier</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="rounded border-gray-300 text-teal-600 focus:ring-teal-500" />
            <span className="ml-2 text-sm text-gray-600">Premium Supplier</span>
          </label>
        </div>
      </div>

      {/* Location */}
      <div>
        <h4 className="font-medium text-gray-700 mb-3">Location</h4>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" className="rounded border-gray-300 text-teal-600 focus:ring-teal-500" />
            <span className="ml-2 text-sm text-gray-600">Maharashtra</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="rounded border-gray-300 text-teal-600 focus:ring-teal-500" />
            <span className="ml-2 text-sm text-gray-600">Delhi</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="rounded border-gray-300 text-teal-600 focus:ring-teal-500" />
            <span className="ml-2 text-sm text-gray-600">Gujarat</span>
          </label>
        </div>
      </div>
    </div>
  );

  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-xl border border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3 flex flex-col space-y-2">
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
            <Heart className="h-4 w-4 text-gray-600" />
          </button>
        </div>
        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
          <span className="bg-teal-600 text-white px-2 py-1 rounded text-xs font-medium">
            {product.supplierType}
          </span>
        </div>
        <div className="absolute bottom-3 left-3">
          <button className="bg-white/90 backdrop-blur-sm text-teal-600 px-3 py-1 rounded-full text-xs font-medium hover:bg-white transition-colors">
            <Eye className="h-3 w-3 inline mr-1" />
            Quick View
          </button>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors line-clamp-2">
          {product.name}
        </h3>
        
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>

        <div className="mb-3">
          <div className="text-lg font-bold text-teal-600 mb-1">
            {product.price}<span className="text-sm font-normal">{product.pricePerPiece}</span>
          </div>
          <div className="text-sm text-gray-500 flex items-center justify-between">
            <span>MOQ: {product.minOrder}</span>
            <span>Max: {product.maxOrder}</span>
          </div>
        </div>

        <div className="flex items-center text-sm text-gray-600 mb-2">
          <MapPin className="h-4 w-4 mr-1 text-teal-600" />
          {product.location}
        </div>

        <div className="text-sm mb-3">
          <div className="font-medium text-gray-900">{product.supplier}</div>
          <div className="flex flex-wrap gap-1 mt-1">
            {product.badges.map((badge, index) => (
              <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="flex space-x-2">
          <button className="flex-1 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors font-medium text-sm flex items-center justify-center">
            <Phone className="h-4 w-4 mr-1" />
            Call Now
          </button>
          <button className="flex-1 border border-teal-600 text-teal-600 px-4 py-2 rounded-lg hover:bg-teal-50 transition-colors font-medium text-sm flex items-center justify-center">
            <MessageCircle className="h-4 w-4 mr-1" />
            Send Inquiry
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">All Products</h2>
            <p className="text-gray-600">(6 suppliers)</p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            {/* Mobile Filter Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </button>

            {/* View Toggle */}
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                onClick={() => setViewType('grid')}
                className={`p-2 ${viewType === 'grid' ? 'bg-teal-600 text-white' : 'text-gray-600 hover:bg-gray-50'} transition-colors rounded-l-lg`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewType('list')}
                className={`p-2 ${viewType === 'list' ? 'bg-teal-600 text-white' : 'text-gray-600 hover:bg-gray-50'} transition-colors rounded-r-lg`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
              >
                <option value="featured">Sort by: Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar Filters */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <FilterSidebar />
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="lg:hidden mb-8">
              <FilterSidebar />
            </div>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            <div className={`grid gap-6 ${
              viewType === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-2' : 'grid-cols-1'
            }`}>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center mt-12">
              <nav className="flex items-center space-x-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 text-sm">
                  Previous
                </button>
                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    className={`px-4 py-2 rounded-lg text-sm ${
                      page === 1
                        ? 'bg-teal-600 text-white'
                        : 'border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;