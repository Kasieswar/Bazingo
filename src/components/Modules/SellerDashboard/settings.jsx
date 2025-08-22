import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar';
import './settings.css'

function Settings() {
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState({
    newInquiries: true,
    orderUpdates: true,
    buyerLeadUpdates: false,
    promotionalOffers: true
  });

  const [businessSettings, setBusinessSettings] = useState({
    businessHours: '9:00 AM - 6:00 PM',
    storeStatus: true,
    businessAddress: 'Shop no.15, Electronics market, Dabagardens, Visakhapatnam - 530048',
    gstNumber: '07AABCU9524VXXXX'
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleNotificationToggle = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleBusinessToggle = () => {
    setBusinessSettings(prev => ({
      ...prev,
      storeStatus: !prev.storeStatus
    }));
  };

  const handlePasswordChange = (field, value) => {
    setPasswordData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm('Are you sure you want to logout?');
    
    if (confirmLogout) {
      navigate('/sellerspage');
    }
  };

  const handleLogoutAllDevices = () => {
    const confirmLogout = window.confirm('Are you sure you want to logout from all devices? You will need to login again on all your devices.');
    
    if (confirmLogout) {
      navigate('/sellerpage');
    }
  };

  return (
    <div className="dashboard-layout">
      
      <Navbar />
      
      <div className="dashboard-content">
        <div className="content-wrapper">
          {/* Main Content */}
          <div className="mains-contents">
            {/* Settings Header */}
            <div className="settings-header">
              <div>
              <h1 className="settings-title">Settings</h1>
              <p className="settings-subtitle">Manage your profile, preferences and business settings</p>
              </div>
              <div className="logout-container">
                <button className="logout-btn" onClick={handleLogout}>
                  <i className="fas fa-sign-out-alt"></i>
                  Logout
                </button>
              </div>
            </div>

            {/* Profile Settings Card */}
            <div className="settings-card">
              <div className="card-headers">
                <div className="card-icon profile-icon">
                  <i className="fas fa-user"></i>
                </div>
                <h3 className="card-titles">Profile Settings</h3>
              </div>

              <div className="profile-section">
                <div className="profile-avatar-section">
                  <div className="profile-avatar">
                    <div className="avatar-circle">
                      <i className="fas fa-user avatar-icon"></i>
                    </div>
                    <button className="update-profile-btn">
                      <i className="fas fa-camera"></i>
                      Update Profile
                    </button>
                  </div>
                </div>

                <div className="profile-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Seller Name</label>
                      <input 
                        type="text" 
                        className="form-input" 
                        defaultValue="Kasi Eswar"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">Company Name</label>
                      <input 
                        type="text" 
                        className="form-input" 
                        defaultValue="Kumar Electronics"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group full-width">
                      <label className="form-label">Email Address</label>
                      <div className="input-with-action">
                        <input 
                          type="email" 
                          className="form-input" 
                          defaultValue="kasi@kumarelectronics.com"
                        />
                        <button className="change-request-btn">Change Request</button>
                      </div>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <div className="phone-input-container">
                        <input 
                          type="tel" 
                          className="form-input phone-input" 
                          defaultValue="+91 9876543210"
                        />
                        <span className="verified-indicator">
                          <i className="fas fa-check-circle"></i>
                          Verified
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="form-actions">
                    <button className="save-btn">Save Changes</button>
                    <button className="cancel-btn">Cancel</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Notification Preferences Card */}
            <div className="settings-card">
              <div className="card-headers">
                <div className="card-icon notification-icon">
                  <i className="fas fa-bell"></i>
                </div>
                <h3 className="card-titles">Notification Preferences</h3>
              </div>

              <div className="notification-section">
                <div className="notification-item">
                  <div className="notification-info">
                    <h4 className="notification-title">New Inquiries</h4>
                    <p className="notification-desc">Get alerts for new buyer inquiries</p>
                  </div>
                  <div className="toggle-switch">
                    <input 
                      type="checkbox" 
                      id="newInquiries" 
                      className="toggle-input"
                      checked={notifications.newInquiries}
                      onChange={() => handleNotificationToggle('newInquiries')}
                    />
                    <label htmlFor="newInquiries" className="toggle-label">
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>

                <div className="notification-item">
                  <div className="notification-info">
                    <h4 className="notification-title">Order Updates</h4>
                    <p className="notification-desc">Notifications about order status changes</p>
                  </div>
                  <div className="toggle-switch">
                    <input 
                      type="checkbox" 
                      id="orderUpdates" 
                      className="toggle-input"
                      checked={notifications.orderUpdates}
                      onChange={() => handleNotificationToggle('orderUpdates')}
                    />
                    <label htmlFor="orderUpdates" className="toggle-label">
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>

                <div className="notification-item">
                  <div className="notification-info">
                    <h4 className="notification-title">Buyer Lead Updates</h4>
                    <p className="notification-desc">Updates on potential buyer leads</p>
                  </div>
                  <div className="toggle-switch">
                    <input 
                      type="checkbox" 
                      id="buyerLeadUpdates" 
                      className="toggle-input"
                      checked={notifications.buyerLeadUpdates}
                      onChange={() => handleNotificationToggle('buyerLeadUpdates')}
                    />
                    <label htmlFor="buyerLeadUpdates" className="toggle-label">
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>

                <div className="notification-item">
                  <div className="notification-info">
                    <h4 className="notification-title">Promotional Offers</h4>
                    <p className="notification-desc">Special offers and promotions from Bazinga</p>
                  </div>
                  <div className="toggle-switch">
                    <input 
                      type="checkbox" 
                      id="promotionalOffers" 
                      className="toggle-input"
                      checked={notifications.promotionalOffers}
                      onChange={() => handleNotificationToggle('promotionalOffers')}
                    />
                    <label htmlFor="promotionalOffers" className="toggle-label">
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>

                <div className="notification-actions">
                  <button className="save-preferences-btn">Save Preferences</button>
                </div>
              </div>
            </div>

            {/* Business Settings Card */}
            <div className="settings-card">
              <div className="card-headers">
                <div className="card-icon business-icon">
                  <i className="fas fa-store"></i>
                </div>
                <h3 className="card-titles">Business Settings</h3>
              </div>

              <div className="business-section">
                <div className="business-row">
                  <div className="business-item">
                    <label className="form-label">Business Hours</label>
                    <select className="form-input business-select" value={businessSettings.businessHours}>
                      <option value="9:00 AM - 6:00 PM">9:00 AM - 6:00 PM</option>
                      <option value="8:00 AM - 7:00 PM">8:00 AM - 7:00 PM</option>
                      <option value="10:00 AM - 8:00 PM">10:00 AM - 8:00 PM</option>
                      <option value="24/7">24/7</option>
                    </select>
                  </div>
                  
                  <div className="business-item store-status-item">
                    <label className="form-label">Store Status</label>
                    <div className="toggle-switch">
                      <input 
                        type="checkbox" 
                        id="storeStatus" 
                        className="toggle-input"
                        checked={businessSettings.storeStatus}
                        onChange={handleBusinessToggle}
                      />
                      <label htmlFor="storeStatus" className="toggle-label">
                        <span className="toggle-slider"></span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="business-item full-width">
                  <label className="form-label">Business Address</label>
                  <textarea 
                    className="form-input business-address"
                    rows="3"
                    defaultValue={businessSettings.businessAddress}
                  />
                </div>

                <div className="business-item gst-item">
                  <label className="form-label">GST Information</label>
                  <div className="input-with-action">
                    <input 
                      type="text" 
                      className="form-input" 
                      defaultValue={businessSettings.gstNumber}
                    />
                    <button className="update-btn">Update</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Security & Password Card */}
            <div className="settings-card">
              <div className="card-headers">
                <div className="card-icon security-icon">
                  <i className="fas fa-lock"></i>
                </div>
                <h3 className="card-titles">Security & Password</h3>
              </div>

              <div className="security-section">
                <div className="password-form">
                  <div className="form-group">
                    <label className="form-label">Current Password</label>
                    <input 
                      type="password" 
                      className="form-input" 
                      value={passwordData.currentPassword}
                      onChange={(e) => handlePasswordChange('currentPassword', e.target.value)}
                      placeholder="Enter current password"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">New Password</label>
                    <input 
                      type="password" 
                      className="form-input" 
                      value={passwordData.newPassword}
                      onChange={(e) => handlePasswordChange('newPassword', e.target.value)}
                      placeholder="Enter new password"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Confirm New Password</label>
                    <input 
                      type="password" 
                      className="form-input" 
                      value={passwordData.confirmPassword}
                      onChange={(e) => handlePasswordChange('confirmPassword', e.target.value)}
                      placeholder="Confirm new password"
                    />
                  </div>

                  <div className="form-actions">
                    <button className="save-btn">Update Password</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Account Control Card */}
            <div className="settings-card">
              <div className="card-headers">
                <div className="card-icon warning-icon">
                  <i className="fas fa-exclamation-triangle"></i>
                </div>
                <h3 className="card-titles">Account Control</h3>
              </div>

              <div className="account-control-section">
                <div className="control-item">
                  <button className="logout-all-btn" onClick={handleLogoutAllDevices}>
                    Logout from all Devices
                  </button>
                </div>
                
                <div className="control-item danger-item">
                  <button className="delete-account-btn">
                    <i className="fas fa-trash"></i>
                    Delete Account
                  </button>
                  <div className="info-icon-container">
                    <i className="fas fa-info-circle info-icon"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;