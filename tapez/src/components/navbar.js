// src/components/Navbar.js

import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="#">
              <div className="logo">
              <Link className="nav-link active" to="/">
              <img src="./images/logo.png"></img>
                  </Link>
              </div>
              
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>
               
                <li className="nav-item">
                  <a className="nav-link" href="#">
                  <Link to="/about">
                  About</Link>  
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                  <Link to="/contactLink">
                  Contact</Link>  
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <button className="btn btn-style btn-style-border" type="submit">
                <Link to="/signup">
                Sign up
                  </Link>
                </button>
                <button className="btn btn-style btn-style-border" type="submit">
                  <Link to="/login">
                    Log in
                  </Link>
                </button>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
