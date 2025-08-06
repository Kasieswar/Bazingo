import React from 'react';
import { FaStore } from 'react-icons/fa';
import '../../Pages/quickmatch.css';

import Sara from '../../images/Sara.png';
import David from '../../images/David.png';
import Anna from '../../images/Anna.png';
import Saria from '../../images/Saria.png';
import Vijaya from '../../images/Vijaya.png';
import Kinky from '../../images/Kinky.png';
import Rohan from '../../images/Rohan.png';
import Deeya from '../../images/Deeya.png';
import Singh from '../../images/Singh.png';

const imageMap = {
  "Sara.png": Sara,
  "David.png": David,
  "Anna.png": Anna,
  "Saria.png": Saria,
  "Vijaya.png": Vijaya,
  "Kinky.png": Kinky,
  "Rohan.png": Rohan,
  "Deeya.png": Deeya,
  "Singh.png": Singh
};

const sellercard = ({ seller }) => {
  return (
    <div className="seller-card">
      <div className="seller-top">
        <img src={imageMap[seller.image]} alt={seller.name} className="seller-img" />
        <div className="seller-details">
          <h3>{seller.name}</h3>
          <p className="location">{seller.location}</p>
          <p className="verified">✔ Verified</p>
        </div>
      </div>
      <p className="seller-description">{seller.description}</p>
      <div className="seller-buttons">
        <button className="quote-btn">Send Quote</button>
        <button className="store-btn"><FaStore /> View Store</button>
      </div>
    </div>
  );
};

export default sellercard;
