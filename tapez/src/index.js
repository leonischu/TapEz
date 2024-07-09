import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './Login/Login';
import Signup from './Login/Signup';
import Merchant from './Login/Merchant';
import Register from './Login/Register';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HowItWorks from './components/Howitworks';
import ContactLink from './Links/ContactLink';
import HowItLink from './Links/HowitLink';
import AboutUs from './Links/AboutUs';


const router = createBrowserRouter([
  {
    path: "/",
    element:
    <App/>
    
  },
  {
    path: "login",
    element:
    <Login/>
    
  },
  {
    path: "signup",
    element:
    <Signup/>
    
  },
  {
    path: "merchant",
    element:
    <Merchant/>
    
  },
  {
    path: "register",
    element:
    <Register/>
    
  },
  {
    path:"howitLink",element:
    <HowItLink/>

  },
  {
    path:"contactLink",
    element:<ContactLink/>
  },
  {
path:"about",
element:<AboutUs/>
  }
  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
    
  
);


