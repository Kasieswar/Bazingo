import React, { useState } from 'react';
import '../../Pages/explorepage.css';
import { 
  Smartphone, 
  Shirt, 
  Utensils, 
  Heart, 
  Dumbbell, 
  BookOpen, 
  Plane, 
  PawPrint, 
  Home, 
  Palette, 
  Baby,
  ShoppingBag,
  Laptop,
  Headphones,
  Watch,
  Camera,
  Monitor,
  Cpu,
  HardDrive,
  Gamepad2
} from 'lucide-react';

const ExploreCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { 
      name: 'All Products', 
      icon: ShoppingBag, 
      description: 'Everything & More',
      subCategories: []
    },
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

  return (
    <section className="explore-categories">
      <div className="containers">
        {/* Main Categories Grid */}
        <div className="categories-grids">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            const isSelected = selectedCategory === index;
            
            return (
              <div
                key={index}
                onClick={() => setSelectedCategory(isSelected ? null : index)}
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
                return (
                  
                    <div className="subcategory-content">
                      <div className="subcategory-icon-container">
                        <SubIconComponent className="subcategory-icon" />
                      </div>
                      <h4 className="subcategory-title">
                        {subCategory.name}
                      </h4>
                    </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExploreCategories;