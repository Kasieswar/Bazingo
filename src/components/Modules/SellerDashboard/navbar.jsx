import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './sellerdashboard.css';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: 'fas fa-home',
      path: '/seller-dashboard'
    },
    {
      id: 'products',
      label: 'My Products',
      icon: 'fas fa-box',
      path: '/products'
    },
    {
      id: 'add-product',
      label: 'Add New Product',
      icon: 'fas fa-plus-circle',
      path: '/add-product'
    },
    {
      id: 'orders',
      label: 'Orders',
      icon: 'fas fa-shopping-bag',
      path: '/orders'
    },
    {
      id: 'messages',
      label: 'Messages',
      icon: 'fas fa-comment-dots',
      path: '/messages'
    },
    {
      id: 'buyer-leads',
      label: 'Buyer Leads',
      icon: 'fas fa-users',
      path: '/buyer-leads'
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: 'fas fa-cog',
      path: '/settings'
    },
    {
      id: 'help',
      label: 'Help & Support',
      icon: 'fas fa-question-circle',
      path: '/help'
    }
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="dashboard-layout">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          {/* Mobile Toggle Button */}
          <button className="mobile-toggle" onClick={toggleSidebar}>
            <i className="fas fa-bars"></i>
          </button>

          {/* Logo Section */}
          <div className="logo-section">
            <h1 className="logo">Bazingo</h1>
          </div>

          {/* Dashboard Title */}
          <div className="dashboard-title">
            <span className="title-text">Seller Dashboard</span>
          </div>

          {/* Right Actions */}
          <div className="header-actions">
            <div className="action-item">
              <i className="fas fa-bell"></i>
            </div>
            <div className="action-item">
              <i className="fas fa-shopping-cart"></i>
            </div>
            <div className="action-item profile">
              <i className="fas fa-user-circle"></i>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar Overlay */}
      <div 
        className={`sidebar-overlay ${isSidebarOpen ? 'active' : ''}`}
        onClick={closeSidebar}
      ></div>

      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
        <div className="sidebar-container">
          <nav className="sidebar-nav">
            <ul className="nav-list">
              {menuItems.map((item) => (
                <li key={item.id} className="nav-item">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `nav-link ${isActive ? 'active' : ''}`
                    }
                    onClick={closeSidebar}
                  >
                    <i className={item.icon}></i>
                    <span className="nav-text">{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Navbar;