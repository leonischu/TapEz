import React from "react";
// import { Link } from "react-router-dom";
import Navbar from "./components/navbar";
const Signup = () => {
  return (
    <>
    <Navbar/>
    <div className="addUser">
      <h3>Sign Up</h3>
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
        <div class="btn btn-style w-10">
          Login
        </div>
      </div>
    </div>
    </>
  );
};

export default Signup;