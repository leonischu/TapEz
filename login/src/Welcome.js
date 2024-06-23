import React from 'react';
import user from'./Navbar/img/user.png';
import logout from'./Navbar/img/log-out.png';
import settings from'./Navbar/img/settings.png';

import { useState } from 'react';

const Welcome = () => {
  const [open,setOpen]=useState(false);
  return (
    <>
    <div className="main" onClick={()=>{setOpen(!open)}}>
      <img src={user} alt="logo" />
      
    </div>
    <div className={`dropdwn-menu ${open?'active':'inactive'}`}>
      
      <ul>
     
        <DropdownItem img={settings} text={'settings'} />
        <DropdownItem img={logout} text={'logout'}/>

      </ul>
    </div>

    </>
  )
}
function DropdownItem(props){
  return(
    <li className="dropdownItem">
      <img src={props.img} alt="" />
      <a >{props.text}</a>
    </li>



  );
}

export default Welcome
