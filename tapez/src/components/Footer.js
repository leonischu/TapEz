import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <h2>Company</h2>
                  <ul>
                    <li>
                    <Link to="/about">
                    About</Link>  
                    </li>
                    <li>
                    <Link to="/contactLink">
                      Contact</Link>
                    </li>
                   
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Support</h2>
                  <ul>
                    <li>
                      <Link to="/contactLink">
                      Contact</Link>
                    </li>
                    <li>
                      <a href="mailto:abc@mail.com">Email</a>
                    </li>
                    <li>
                      <a href="tel:+9779809000000">Phone</a>
                    </li>
                    
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Services</h2>
                  <ul>
                    <li>
                      <Link to="/howitLink">
                      <a href="#">How to use the app?</a></Link>
                    </li>
                 
                    
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Follow Us</h2>
                  <div className="row">
                    <div className="col-3 mx-auto">
                    <a
                        href="https://www.facebook.com/#/"
                        target="_blank">
                      <i class="fab fa-facebook-f fontawesome-style"></i></a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a
                        href="https://www.instagram.com/#/"
                        target="_blank">
                        <i class="fab fa-instagram fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                    <a
                        href="https://www.Youtube.com/#/"
                        target="_blank">
                      <i class="fab fa-youtube fontawesome-style"></i></a>
                    </div>
                    <div className="col-3 mx-auto">
                    <a
                        href="https://www.x.com/#/"
                        target="_blank">
                      <i class="fab fa-twitter fontawesome-style"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
                  Copyright @ 2024 TapEz. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
