import React from 'react'
import Videosection from './components/Pages/videosection'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TalktoSeller from './components/Pages/talktoseller'
import ScrollUp from './components/Modules/scrollup'
import QuickMatch from './components/Pages/quickmatch'
import Community from './components/Pages/community'
import SellerPage from './components/Pages/sellerpage'
import BusinessDetails from './components/Modules/SellersPage/businessdetails'
import ProductDetails from './components/Modules/SellersPage/productdetails'
import AddGST from './components/Modules/SellersPage/addgst'
import Dashboard from './components/Modules/SellerDashboard/dashboard'
import Products from './components/Modules/SellerDashboard/products'
import AddProduct from './components/Modules/SellerDashboard/addproduct'
import Orders from './components/Modules/SellerDashboard/orders'
import Messages from './components/Modules/SellerDashboard/messages'
import BuyerLeads from './components/Modules/SellerDashboard/buyerleads'
import Settings from './components/Modules/SellerDashboard/settings'
import Help from './components/Modules/SellerDashboard/help'
import BuyerPage from './components/Pages/buyerpage'
import ExplorePage from './components/Pages/explorepage'


function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollUp />
        <Routes>
          <Route path='/' element={<Videosection />} />
          <Route path='/talktoseller' element={<TalktoSeller />} />
          <Route path='/quickmatch' element={<QuickMatch />} />
          <Route path='/community' element={<Community />} />
          <Route path='/sellerpage' element={<SellerPage />} />
          <Route path='/businessdetails' element={<BusinessDetails />} />
          <Route path='/productdetails' element={<ProductDetails />} />
          <Route path='/gstdetails' element={ <AddGST />} />
          <Route path='/seller-dashboard' element={<Dashboard />} />
          <Route path='/products' element={<Products />} />
          <Route path='/add-product' element={<AddProduct />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/messages' element={<Messages />} />
          <Route path='/buyer-leads' element={<BuyerLeads />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/help' element={<Help />} />
          <Route path='/buyerpage' element={<BuyerPage />} />
          <Route path='/explorepage' element={<ExplorePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
