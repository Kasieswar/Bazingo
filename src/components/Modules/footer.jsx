import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function footer() {
  return (
    <div>
      <footer className="footer">
      <div className="footer-grid">
        
        <div className="footer-logo-section">
          <h2 className="footer-logo">Bazingo</h2>
        </div>

        <div className="footer-links">
          <Link to="/" className='footer-link'>Videos</Link>
          <Link to="/talktoseller" className='footer-link'>Talk to Seller</Link>
          <Link to="/quickmatch" className='footer-link'>QuickMatch</Link>
          <Link to="/community" className='footer-link'>Community</Link>
          <Link to="/sellerpage" className='footer-link'>Sellers</Link>
          <Link to="/buyerpage" className='footer-link'>Buyers</Link>
        </div>

        <div className="footer-social">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Bazingo. All rights reserved.</p>
      </div>
    </footer>
    </div>
  )
}

export default footer
