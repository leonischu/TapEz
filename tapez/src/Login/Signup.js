


// user and merchant signup


import React from "react";
import Navbar from "../components/navbar"; 
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
const Signup = () => {
  return (
    <>
      <Navbar />
      
      <div className="signup-container">
        
        <div className="button-container left">
          <div className="image">
            <img src="./images/sign.jpg" alt="Merchant" />
          </div>
          <button className="btn_reg btn-merchant">
          <Link className="nav-link active" to="/merchant">
          Sign in as Merchant
                  </Link>
            
            
            </button>
        </div>
        <div className="button-container right">
          <div className="image">
            <img src="./images/user.jpg" alt="User" />
          </div>
          <button className="btn_reg btn-user">
          <Link className="nav-link active" to="/register">
          Sign in as User
                  </Link>
            
            </button>
        </div>
      </div>
      <Footer/>
    
    </>
  );
};

export default Signup;
