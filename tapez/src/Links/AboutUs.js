import React from "react";
import { Link } from "react-router-dom";
import {
 
  Typography,
  Container,
  Grid,
  Paper,

} from '@mui/material';
import { fontSize, styled } from '@mui/system';
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const FeaturesSection = styled('section')(({ theme }) => ({
    padding: theme.spacing(4),
    textAlign: 'center',
    backgroundColor: '#F3F7EC',
  }));
  
  const FeatureCard = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: 'left',
    color:'#828286',
  }));
const AboutUs= () => {
  return (
    <>
    <Navbar/>
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
            {/* right side*/}
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
   
      <FeaturesSection>
        <Container>
          
           
            <h1 className="display-1"> Why Choose TapEz?</h1>
         <div className="aboutLink">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <FeatureCard>
                <Typography variant="h4"marginBottom={3}>Fast Transactions</Typography>
                <Typography variant="body"fontSize={15}>
                  With Tap to Pay, transactions are completed in a matter of seconds. The quick interaction between your payment device and the NFC-enabled point-of-sale terminal significantly reduces waiting time, making it perfect for busy environments like cafes, retail stores, and public transportation. This swift process enhances customer satisfaction by providing a seamless and efficient payment experience.
                </Typography>
              </FeatureCard>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FeatureCard>
                <Typography variant="h4" marginBottom={3}>Enhanced Security</Typography>
                <Typography variant="body" fontSize={15}>
                  Tap to Pay incorporates advanced security measures to protect your financial information. It uses tokenization to replace sensitive card details with a unique identifier, ensuring your actual card information is never exposed. Additionally, biometric authentication such as fingerprint or facial recognition adds an extra layer of security, making unauthorized transactions nearly impossible.
                </Typography>
              </FeatureCard>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FeatureCard>
                <Typography variant="h4" marginBottom={3}>Wide Acceptance</Typography>
                <Typography variant="body" fontSize={15}  >
                  The Tap to Pay system is widely accepted at numerous merchants and service providers worldwide. Its compatibility with a variety of payment <br/> devices—including contactless cards, smartphones, and <br/> wearables—ensures that you can use it almost anywhere. This extensive <br/> acceptance network makes Tap to Pay a versatile and convenient<br/> payment solution for everyday purchases.                                                         
                </Typography>
              </FeatureCard>
            </Grid>
          </Grid>
          </div>
        </Container>
      </FeaturesSection>
      
      <Footer/>

    </>
  );
};

export default AboutUs;
