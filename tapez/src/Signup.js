import React from "react";
import Navbar from "./components/navbar"; // Ensure the path to Navbar is correct

const Signup = () => {
  return (
    <>
      <Navbar />
      <div className="signup-container">
        <div className="button-container left">
          <div className="image">
            <img src="./images/sign.jpg" alt="Merchant" />
          </div>
          <button className="btn_reg btn-merchant">Sign in as Merchant</button>
        </div>
        <div className="button-container right">
          <div className="image">
            <img src="./images/user.jpg" alt="User" />
          </div>
          <button className="btn_reg btn-user">Sign in as User</button>
        </div>
      </div>
    </>
  );
};

export default Signup;
