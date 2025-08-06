import React from 'react'
import { FaStore, FaComments } from 'react-icons/fa';
import '../Pages/talktoseller.css'

import Sara from '../images/Sara.png'
import David from '../images/David.png'
import Anna from '../images/Anna.png'
import Saria from '../images/Saria.png'
import Vijaya from '../images/Vijaya.png'
import Kinky from '../images/Kinky.png'
import Rohan from '../images/Rohan.png'
import Deeya from '../images/Deeya.png'
import Singh from '../images/Singh.png'

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
}

const sellercard = ({ seller }) => {
  return (
    <div>
      <div className="seller-cards">
  <div className="status-indicator">
    <span className={seller.status === 'Online' ? 'online' : 'offline'}></span>
    {seller.status}
  </div>

  <div className="card-front">
    <img src={imageMap[seller.image]} alt={seller.name} className="seller-img" />
    <h3>{seller.name}</h3>
    <p>{seller.category}</p>
    <div className="rating">⭐ {seller.rating}</div>
  </div>

  <div className="card-hover">
    <p className="hover-desc">{seller.hoverdesc}</p>
    <p className="hover-location">{seller.hoverloc}</p>
  </div>

  <button className="view-store-btn"><FaStore /> View Store</button>
  <button className="chat-btn"><FaComments /> Chat with Seller</button>
</div>

    </div>
  )
}

export default sellercard
