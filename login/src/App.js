import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';



// import Welcome from './Logged in/Welcome';
import Naavbar from './Logged in/Naavbar';
import Wallet from './Wallet/wallet';
import WalletListHead from './Wallet/WalletListHead';
import NewWallet from './Wallet/NewWallet';
import AddFunds from './Wallet/AddFunds';

const App = () => {
  return (
    <>
 
    
       {/* <Wallet/> */}
      {/* <NewWallet /> */}
      <WalletListHead/>
      {/* <AddFunds/> */}
      
   
    </>
  )
}

export default App
