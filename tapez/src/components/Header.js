import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
              <h1 className="display-2">
                Tap to pay <br /> Payment system
              </h1>
              <p className="main-hero-para">
                Tap to Pay is a contactless payment method using Near Field
                Communication (NFC) technology. It allows users to make secure
                payments by tapping their contactless card, smartphone, or
                wearable device on an NFC-enabled point-of-sale terminal.
                Benefits include speed, convenience, enhanced security through
                tokenization and biometrics, and reduced physical contact. This
                system is increasingly popular among consumers and businesses
                due to its efficiency and ease of use.
              </p>
              <h3>Get early access for you</h3>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="rounded-pill w-50  w-lg-75 me-3 p-2 form-control-text"
                  placeholder="Enter Your Email"
                />
                 <Link to="/signup">
                 <div className="input-group-button">Get it now</div>
                  </Link>
                
              </div>
            </div>
            {/* main header right side*/}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
              <img
                src="./images/hero1.jpg"
                alt="heroimg"
                className="img-fluid"
              />
              <img
                src="./images/hero4.jpg"
                alt="heroimg4"
                className="img-fluid main-hero-img2"
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
