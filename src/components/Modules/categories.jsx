import React from 'react' 

const categories = [
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


function Categories() {
    return (
        <div>
            <section className="category-section">
            <div className="category-header">
              <div>
            <h2 className="categor-title">Explore by Category</h2>
            <p className="category-subtitle">
            Find what you need, faster. Browse products by popular categories
            </p>
            </div>
            <button 
              className="explore-btn"
              onClick={() => window.location.href = "/explorepage"}
            >
              Explore All
            </button>
          </div>
          


            <div className="category-grids">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-cardsss`}
              
            >
              <i className={`categories-icon ${category.icon}`}></i>
              <div>
                <span className="categories-name">{category.name}</span>
                <div className="category-subtitle-text">{category.subtitle}</div>
              </div>
            </button>
          ))}
        </div>
            </section>
        </div>
    )
}

export default Categories
