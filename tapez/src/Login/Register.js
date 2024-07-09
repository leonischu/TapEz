





//yo user login ko form




import React from "react";
// import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const Register= () => {
  return (
    <>
    <Navbar/>
    
    {/* user side ko lagi */}
    
    <div className="loginpage">
      <div className="login-img">
      <img src="./images/logo.png" alt="" /></div>
   
    <div className="addUser">
      <h3>Sign Up as user</h3>
      <form className="addUserForm">
        <div className="inputGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            placeholder="Enter your name"
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Enter your Email"
          />
          <label htmlFor="Password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            placeholder="Enter Password"
          />
          <button type="submit" class="btn btn-style w-100">
            
            Sign Up
          </button>
        </div>
      </form>
      <div className="login">
        <p>Already have an Account? </p>
        <div class="btn btn-style  w-10">
        <Link to="/login">
                    Log in
                  </Link>
        </div>
      </div>
    
    </div>
    </div>
   
    <Footer/>
    </>
  );
};

export default Register;