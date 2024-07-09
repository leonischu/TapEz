import React, { useState } from "react";
import cont from "../API/cont.js";

const Cont = () => {
  const [aboutData, setAboutData] = useState(cont);
  return (
    <>
      <section className="common-section our-services our-services-rightside">
        <div className="container mb-5">
          <div className="row">
            {/* 1section right side data  */}
            <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column">
            
              <h1 className="main-heading">
                World class support is <br /> available 24/7
              </h1>

              {aboutData.map((curElem) => {
                const { id, title, info } = curElem;
                return (
                  <>
                    <div className="row our-services-info" key={id}>
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              {/* <button className="btn-style btn-style-border">learn more</button> */}
            </div>

            {/* images section  */}
            <div className="col-12 col-lg-5  our-service-rightside-img">
              <img src="./images/callcenter.jpg" alt="aboutusIMg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cont;
