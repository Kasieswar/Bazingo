import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import './messages.css';

function Messages() {
  const [activeChat, setActiveChat] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [messageText, setMessageText] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [isMobile, setIsMobile] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setShowSidebar(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const conversations = [
    {
      id: 1,
      name: 'Priya Sharma',
      avatar: 'PS',
      lastMessage: 'Hi! I\'m interested in the Smartphone. Is the warranty included with the purchase?',
      timestamp: '2 minutes ago',
      unread: true,
      online: true,
      productName: 'Smartphone ₹29,999/-',
      productImage: '/api/placeholder/40/40'
    },
    {
      id: 2,
      name: 'Amit Patel',
      avatar: 'AP',
      lastMessage: 'Thanks for the quick delivery!',
      timestamp: '2m ago',
      unread: false,
      online: false,
      productName: 'Laptop ₹45,999/-',
      productImage: '/api/placeholder/40/40'
    },
    {
      id: 3,
      name: 'Sneha Gupta',
      avatar: 'SG',
      lastMessage: 'Great! What about delivery time to Mumbai?',
      timestamp: '5m ago',
      unread: true,
      online: true,
      productName: 'Headphones ₹8,999/-',
      productImage: '/api/placeholder/40/40'
    },
    {
      id: 4,
      name: 'Rahul Kumar',
      avatar: 'RK',
      lastMessage: 'Can you provide bulk discount for 10 units?',
      timestamp: '1h ago',
      unread: false,
      online: false,
      productName: 'Smart Watch ₹12,999/-',
      productImage: '/api/placeholder/40/40'
    }
  ];

  const chatMessages = {
    1: [
      {
        id: 1,
        sender: 'buyer',
        message: 'Hi! I\'m interested in the Smartphone. Is the warranty included with the purchase?',
        timestamp: '10:45 am',
        avatar: 'PS'
      },
      {
        id: 2,
        sender: 'seller',
        message: 'Yes, it comes with 1-year warranty. All our products are genuine and brand new.',
        timestamp: '10:47 am',
        avatar: 'You'
      },
      {
        id: 3,
        sender: 'buyer',
        message: 'Great! What about delivery time to Mumbai?',
        timestamp: '10:52 am',
        avatar: 'PS'
      }
    ]
  };

  const systemNotifications = [
    {
      id: 'system1',
      type: 'system',
      message: 'Your product listing has been approved',
      timestamp: '2m ago',
      icon: 'fas fa-check-circle',
      color: 'success'
    },
    {
      id: 'system2',
      type: 'system',
      message: 'New order received for Smartphone',
      timestamp: '5m ago',
      icon: 'fas fa-shopping-cart',
      color: 'info'
    }
  ];

  const filteredConversations = conversations.filter(conv => {
    const matchesSearch = conv.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         conv.lastMessage.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (activeFilter === 'All') return matchesSearch;
    if (activeFilter === 'Unread') return matchesSearch && conv.unread;
    if (activeFilter === 'Starred') return matchesSearch && conv.starred;
    if (activeFilter === 'System') return false;
    
    return matchesSearch;
  });

  const handleSendMessage = () => {
    if (messageText.trim() && activeChat) {
      
      setMessageText('');
    }
  };

  const handleChatSelect = (chatId) => {
    setActiveChat(chatId);
    if (isMobile) {
      setShowSidebar(false);
    }
  };

  const handleBackToConversations = () => {
    if (isMobile) {
      setShowSidebar(true);
    }
  };

  return (
    <div className="dashboard-layout">
      <Navbar />
      
      <div className="messages-content">
        <div className="messages-container">
          <div className="messages-layout">
            {/* Left Sidebar - Conversations */}
            <div className={`conversations-sidebar ${!showSidebar && isMobile ? 'hidden' : ''}`}>
              <div className="conversations-header">
                <div className="conversations-title-section">
                  <h2 className="conversations-title">Conversations</h2>
                  <button className="new-message-btn">
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
                
                {/* Search Bar */}
                <div className="search-containers">
                  <div className="search-input-wrappers">
                    <i className="fas fa-search searches-icons"></i>
                    <input
                      type="text"
                      placeholder="Search messages..."
                      className="search-inputs"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                {/* Filter Tabs */}
                <div className="filter-tabs">
                  {['All', 'Unread', 'Starred', 'System'].map(filter => (
                    <button
                      key={filter}
                      className={`filter-tab ${activeFilter === filter ? 'active' : ''}`}
                      onClick={() => setActiveFilter(filter)}
                    >
                      {filter}
                      {filter === 'Unread' && (
                        <span className="unread-count">
                          {conversations.filter(c => c.unread).length}
                        </span>
                      )}
                    </button>
                  ))}
                </div>

                {/* Conversations List */}
                <div className="conversations-list">
                  {activeFilter === 'System' ? (
                    systemNotifications.map(notification => (
                      <div key={notification.id} className="conversation-item system-notification">
                        <div className="conversation-avatar system">
                          <i className={`${notification.icon} ${notification.color}`}></i>
                        </div>
                        <div className="conversation-content">
                          <div className="conversation-header">
                            <span className="conversation-name">Bazingo System</span>
                            <span className="conversation-time">{notification.timestamp}</span>
                          </div>
                          <p className="conversation-preview">{notification.message}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    filteredConversations.map(conversation => (
                      <div
                        key={conversation.id}
                        className={`conversation-item ${activeChat === conversation.id ? 'active' : ''} ${conversation.unread ? 'unread' : ''}`}
                        onClick={() => handleChatSelect(conversation.id)}
                      >
                        <div className="conversation-avatar">
                          <div className="avatar-circles">
                            {conversation.avatar}
                          </div>
                          {conversation.online && <div className="online-indicator"></div>}
                        </div>
                        <div className="conversation-content">
                          <div className="conversation-header">
                            <span className="conversation-name">{conversation.name}</span>
                            <span className="conversation-time">{conversation.timestamp}</span>
                          </div>
                          <p className="conversation-preview">{conversation.lastMessage}</p>
                          {conversation.productName && (
                            <div className="product-tag">
                              <i className="fas fa-box"></i>
                              {conversation.productName}
                            </div>
                          )}
                        </div>
                        {conversation.unread && <div className="unread-dot"></div>}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Right Side - Chat Area */}
            <div className={`chat-area ${activeChat && isMobile ? 'active' : ''}`}>
              {activeChat ? (
                <>
                  {/* Chat Header */}
                  <div className="chat-header">
                    {/* Mobile Header with Back Button */}
                    <div className="chat-header-left show-on-mobile">
                      <button className="back-btn" onClick={handleBackToConversations}>
                        <i className="fas fa-arrow-left"></i>
                      </button>
                      <div className="chat-user-info">
                        <div className="chat-avatar">
                          <div className="avatar-circles">
                            {conversations.find(c => c.id === activeChat)?.avatar}
                          </div>
                          <div className="online-indicator"></div>
                        </div>
                        <div className="chat-user-details">
                          <h3 className="chat-user-name">
                            {conversations.find(c => c.id === activeChat)?.name}
                          </h3>
                          <span className="chat-user-status">Online 2 minutes ago</span>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Header */}
                    <div className="chat-user-info hide-on-mobile">
                      <div className="chat-avatar">
                        <div className="avatar-circles">
                          {conversations.find(c => c.id === activeChat)?.avatar}
                        </div>
                        <div className="online-indicator"></div>
                      </div>
                      <div className="chat-user-details">
                        <h3 className="chat-user-name">
                          {conversations.find(c => c.id === activeChat)?.name}
                        </h3>
                        <span className="chat-user-status">Online 2 minutes ago</span>
                      </div>
                    </div>

                    <div className="chat-actions">
                      <button className="chat-action-btn">
                        <i className="fas fa-phone"></i>
                      </button>
                      <button className="chat-action-btn">
                        <i className="fas fa-video"></i>
                      </button>
                      <button className="chat-action-btn">
                        <i className="fas fa-ellipsis-v"></i>
                      </button>
                    </div>
                  </div>

                  {/* Product Context */}
                  <div className="product-context">
                    <div className="products-info">
                      <div className="product-image">
                        <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmV8ZW58MHx8MHx8fDA%3D" alt="Product" />
                      </div>
                      <div className="product-details">
                        <span className="product-name">
                          {conversations.find(c => c.id === activeChat)?.productName}
                        </span>
                        <span className="inquiry-about">Product Inquiry</span>
                      </div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="messages-area">
                    {chatMessages[activeChat]?.map(message => (
                      <div key={message.id} className={`message ${message.sender === 'seller' ? 'sent' : 'received'}`}>
                        {message.sender === 'buyer' && (
                          <div className="message-avatar">
                            <div className="avatar-circles small">
                              {message.avatar}
                            </div>
                          </div>
                        )}
                        <div className="message-content">
                          <div className="message-bubble">
                            {message.message}
                          </div>
                          <span className="message-time">{message.timestamp}</span>
                        </div>
                        {message.sender === 'seller' && (
                          <div className="message-avatar">
                            <div className="avatar-circles small seller">
                              <i className="fas fa-user"></i>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Message Input */}
                  <div className="message-input-area">
                    <div className="message-input-container">
                      <button className="attachment-btn">
                        <i className="fas fa-paperclip"></i>
                      </button>
                      <div className="message-input-wrapper">
                        <input
                          type="text"
                          placeholder="Type a message..."
                          className="message-input"
                          value={messageText}
                          onChange={(e) => setMessageText(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        />
                      </div>
                      <button className="send-btn" onClick={handleSendMessage}>
                        <i className="fas fa-paper-plane"></i>
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="no-chat-selected">
                  <div className="no-chat-content">
                    <div className="no-chat-icon">
                      <i className="fas fa-comments"></i>
                    </div>
                    <h3>Say hi! 👋</h3>
                    <p>Select a conversation to start messaging</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;