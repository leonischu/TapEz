
// import React, { useState, useEffect, useRef } from 'react';
// import user from './Navbar/img/user.png';
// import edit from './Navbar/img/edit.png';
// import inbox from './Navbar/img/envelope.png';
// import settings from './Navbar/img/settings.png';
// import help from './Navbar/img/question.png';
// import logout from './Navbar/img/log-out.png';
// import DropdownItem from './DropdownItem';

const  Welcome = () => {
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });



  return (
    <>
 <nav className="navbar">
    
    <div className="search-bar">
    <i class="fa fa-search"></i>
      <input type="text" placeholder="Search your query..." />
    </div>
    <div className="icons">
      <div className="noti">
      <img src="./images/notification.svg" alt="Logo"/>
    </div>
    <div className="setting">
    <img src="./images/settings.svg" alt="Settings" className="settings" />
    <div className='menu-container' ref={menuRef}>
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
          <img src={user}></img>
        </div>

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
    






    </div>
    </div>
    
  </nav>
    </>
  )
}


export default Welcome;
