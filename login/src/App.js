import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';

import ProductPage from './Products/Product';
import MerchantProfile from './Merchant/Profile';
import UserProfile from './Profileuser/Profile';
import Naavbar from './Logged in/Naavbar';
import Wallet from './Wallet/wallet';
import Transaction from './Transactions/Transaction';
import NewWallet from './Wallet/NewWallet';
import AddFunds from './Wallet/AddFunds';
//cart ko lagi
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CartPage from './Products/Cart';

const App = () => {
  const [cart, setCart] = React.useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  return (
    <>
    <ProductPage/>
    {/* < MerchantProfile/> */}
    {/* <UserProfile/> */}
 
    {/* <Transaction/> */}
       {/* <Wallet/> */}
      {/* <NewWallet /> */}
    
      {/* <AddFunds/> */}
      
   {/* cart ko lagi */}
   <Router>
      <Routes>
        <Route
          path="/"
          element={<ProductPage cart={cart} addToCart={addToCart} />}
        />
        <Route path="/cart" element={<CartPage cart={cart} />} />
      </Routes>
    </Router>
    {/* end */}
    </>
  )
}

export default App
