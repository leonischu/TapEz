import React, { useState } from "react";
import workapi from "../API/workApi.js";
import Navbar from "../components/navbar.js";
import Footer from "../components/Footer.js";
const HowItLink = () => {
  const [workData, setWorkData] = useState(workapi);
  console.log(workData);
  return (
    <>
    <Navbar/>
    
      <section>
        <div className="work-container container">
          <h1 className="main-heading text-center">How does it Work</h1>
          <div className="row">
            {workData.map((curElem) => {
              const { id, logo, title, info } = curElem;
              return (
                <>
                  <div className="col-12 col-lg-4 text-center work-container-subdiv">
                    <i class={`fontawesome-style ${logo}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-para w-100">{info}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
      <Footer/>
      
    </>
  
  );
};

export default  HowItLink;