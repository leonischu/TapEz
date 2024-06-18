import React from "react";
import Navbar from "./components/navbar";


const Login = () => {
  return (
    <>
    <Navbar/>
    <div className="loginpage">
      <div className="login-img">
      <img src="./images/logo.png" alt="" /></div>
    <div className="addUser">
      <h3>Login</h3>
      <form className="addUserForm">
        <div className="inputGroup">
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
            placeholder="Enter your Password"
          />
          <button type="submit" class="btn btn-style w-100">
            Login
          </button>
        </div>
      </form>
      <div className="login">
        <p>Don't have Account? </p>
        <div class="btn btn-style w-10">
          Sign Up
        </div>
       
      </div>
    </div></div> 
  
    
    </>
  );
};

export default Login;