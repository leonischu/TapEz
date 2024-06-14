import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './Login';
import Signup from './Signup';
import Merchant from './Merchant';
import Register from './Register';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


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
  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
    
  
);


