import React, { useState } from 'react';
import Navbar from './navbar';
import './help.css';

function Help() {
  const [activeTab, setActiveTab] = useState('buyers'); // 'buyers' or 'sellers'
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const buyersData = {
    helpCards: [
      {
        icon: 'fas fa-shopping-cart',
        title: 'How to place an order',
        description: 'Step-by-step guide to making your first purchase',
        tag: 'Read Now'
      },
      {
        icon: 'fas fa-truck',
        title: 'How to track delivery',
        description: 'Monitor your order status and delivery progress',
        tag: 'Read Now'
      },
      {
        icon: 'fas fa-exclamation-triangle',
        title: 'Report an Issue',
        description: 'Let us know about any problems with your order',
        tag: 'Report'
      },
      {
        icon: 'fas fa-comments',
        title: 'Talk to a seller',
        description: 'Connect directly with sellers for questions',
        tag: 'Start Chat'
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'Secure Payments',
        description: 'Learn about our payment security measures',
        tag: 'Learn More'
      }
    ],
    faqs: [
      {
        question: 'How can I edit my mobile number?',
        answer: 'You can edit your mobile number by going to your profile settings and clicking on the edit button next to your phone number.'
      },
      {
        question: 'What happens if I miss a buyer inquiry?',
        answer: 'If you miss a buyer inquiry, you can still respond to it later. The inquiry will remain in your messages section.'
      },
      {
        question: 'Do I need GST to sell?',
        answer: 'GST registration depends on your annual turnover. For businesses with turnover above ₹20 lakhs, GST registration is mandatory.'
      }
    ]
  };

  const sellersData = {
    helpCards: [
      {
        icon: 'fas fa-plus-circle',
        title: 'How to Add a Product',
        description: 'Step-by-step guide to uploading product videos',
        tag: 'Read Now'
      },
      {
        icon: 'fas fa-box',
        title: 'Managing Orders',
        description: 'Learn how to view, accept and fulfill orders received from buyers',
        tag: 'Start Now'
      },
      {
        icon: 'fas fa-store',
        title: 'Editing Your Store Info',
        description: 'Instructions on updating GST, store timings, address, etc.',
        tag: 'Edit Now'
      },
      {
        icon: 'fas fa-envelope',
        title: 'Handling Buyer Messages',
        description: 'Tips for responding faster and maintaining buyer trust',
        tag: 'Start Chat'
      },
      {
        icon: 'fas fa-chart-line',
        title: 'Boosting Product Visibility',
        description: 'Learn how to increase views using platform features',
        tag: 'Learn More'
      }
    ],
    faqs: [
      {
        question: 'How do I update my business address?',
        answer: 'You can update your business address in the Settings section under Business Details. Make sure to save changes after updating.'
      },
      {
        question: 'What if a buyer doesn\'t respond after inquiry?',
        answer: 'If a buyer doesn\'t respond, you can send a follow-up message. The inquiry will remain active for 30 days.'
      },
      {
        question: 'How to get more visibility for my product videos?',
        answer: 'To increase visibility, ensure your videos are high quality, add detailed descriptions, and use relevant tags and categories.'
      }
    ]
  };

  const currentData = activeTab === 'buyers' ? buyersData : sellersData;

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="dashboard-layout">
      <Navbar />
      
      <div className="help-support-content">
        <div className="help-support-container">
          {/* Header Section */}
          <div className="help-header">
            <div className="header-content">
              <h1 className="help-title">Help & Support Center</h1>
              <p className="help-subtitle">Need assistance? Whether you're buying or selling, we're here for you.</p>
            </div>
            
            {/* Search Bar */}
            <div className="help-search-container">
              <div className="search-input-wrapper">
                <i className="fas fa-search search-icon"></i>
                <input 
                  type="text" 
                  placeholder="Search for answers..." 
                  className="help-search-input"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Toggle Tabs */}
          <div className="help-tabs">
            <button 
              className={`tab-button ${activeTab === 'buyers' ? 'active' : ''}`}
              onClick={() => setActiveTab('buyers')}
            >
              <i className="fas fa-shopping-bag"></i>
              For Buyers
            </button>
            <button 
              className={`tab-button ${activeTab === 'sellers' ? 'active' : ''}`}
              onClick={() => setActiveTab('sellers')}
            >
              <i className="fas fa-store"></i>
              For Sellers
            </button>
          </div>

          {/* Help Cards Grid */}
          <div className="help-cards-section">
            <div className="help-cards-grid">
              {currentData.helpCards.map((card, index) => (
                <div key={index} className="help-card">
                  <div className="card-icon-container">
                    <i className={card.icon}></i>
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">{card.title}</h3>
                    <p className="card-description">{card.description}</p>
                    <button className="card-action-btn">{card.tag}</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="faq-section">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <div className="faq-list">
              {currentData.faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <div 
                    className="faq-question"
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="faq-icon">
                      <i className="fas fa-question-circle"></i>
                    </div>
                    <span className="question-text">{faq.question}</span>
                    <i className={`fas fa-chevron-down faq-arrow ${expandedFaq === index ? 'expanded' : ''}`}></i>
                  </div>
                  {expandedFaq === index && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Support Section */}
          <div className="contact-support-section">
            <h2 className="contact-title">Get in Touch</h2>
            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-comments"></i>
                </div>
                <h3 className="contact-method">Live Chat Support</h3>
                <p className="contact-description">Get instant help from our team</p>
                <button className="contact-btn">Start Chat</button>
              </div>
              
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <h3 className="contact-method">Phone Help</h3>
                <p className="contact-description">Call us for immediate assistance</p>
                <button className="contact-btn">Call Now</button>
              </div>
              
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <h3 className="contact-method">Email Support</h3>
                <p className="contact-description">support@bazinga.com</p>
                <button className="contact-btn">Send Email</button>
              </div>
              
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-calendar"></i>
                </div>
                <h3 className="contact-method">Schedule Callback</h3>
                <p className="contact-description">We'll call back at your convenience</p>
                <button className="contact-btn">Schedule</button>
              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="bottom-cta-section">
            <div className="cta-content">
              <h2 className="cta-title">Didn't find what you're looking for?</h2>
              <p className="cta-description">Our support team is ready to help you with any questions or concerns.</p>
              <button className="cta-button">Contact Our Support Team</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;