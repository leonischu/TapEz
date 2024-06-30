import React, { useState } from "react"
import user from './Navbar/img/user.png';
import edit from './Navbar/img/edit.png';
import inbox from './Navbar/img/envelope.png';
import settings from './Navbar/img/settings.png';
import help from './Navbar/img/question.png';
import logout from './Navbar/img/log-out.png';
import DropdownItem from "./DropdownItem";


const Naavbar = () => {
const[open,setOpen]=useState(false);

  return (
    <>
         
         <nav className="navbar">
      <div className="navbar-brand">
        <a href="#"><img src="./images/logo.png" alt="TapEz" /></a>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search your query..." />
        <img src="search-icon.png" alt="Search" className="search-icon " />
      </div>
      <div className="navbar-icons">
        <div className="setting">
        <img src="./images/notification.svg" alt="Notifications" className="icon"   onClick={()=>{setOpen(!open)}}/>
        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          <h3>The Kiet<br/><span>Website Designer</span></h3>
          <ul>
            <DropdownItem img = {user} text = {"My Profile"}/>
            <DropdownItem img = {edit} text = {"Edit Profile"}/>
            <DropdownItem img = {inbox} text = {"Inbox"}/>
            <DropdownItem img = {settings} text = {"Settings"}/>
            <DropdownItem img = {help} text = {"Helps"}/>
            <DropdownItem img = {logout} text = {"Logout"}/>
          </ul>
        </div>



            
        </div>
        <img src="./images/settings.svg" alt="Settings" className="icon" />
      </div>
    </nav>


    </>
  );
};

export default Naavbar;
