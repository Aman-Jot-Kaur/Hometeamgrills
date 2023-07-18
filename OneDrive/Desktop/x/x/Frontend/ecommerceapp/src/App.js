import React from 'react'
import Login from './components/Login'
import SignUpForm from './components/SignupPage/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CustomerPage from './components/customerpage/customer'
import VendorPage from './components/vendorpage/Vendor'
import AdminPage from './components/Admin/Adminpage'
import PendingPage from './components/Admin/pendingpage'
import VendorProductPage from './components/vendorpage/VendorProduct'
import Productdetail from './components/productDetail/productpage'
import Profile from './components/Profile/profile'
import "./App.css"
import OrdersPage from './components/orders/Orders'
import CartPage from './components/cartpage/Cartpage'

function App() {
  return (
    <div className='app' >
      <BrowserRouter>
        <Routes>
          <Route element={<SignUpForm />} path="/"></Route>
          <Route element={<Login />} path="/login"></Route>
          <Route element={<CustomerPage />} path="/customer"></Route>
          <Route element={<VendorPage />} path="/vendor"></Route>
          <Route element={<AdminPage />} path="/admin"></Route>
          <Route element={<PendingPage />} path="/pending"></Route>
          <Route element={<VendorProductPage />} path="/myproducts"></Route>
          <Route element={<Productdetail />} path="/productdetail"></Route>
          <Route element={<Profile />} path="/profile"></Route>
          <Route element={<OrdersPage />} path="/orders"></Route>
          <Route element={<CartPage />} path="/cart"></Route>
        </Routes></BrowserRouter>


    </div>
  )
}

export default App