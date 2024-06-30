import React from 'react'


const DropdownItem = (props) => {
  return (
    <>
     <li className = 'dropdownItem'>
      <img src={props.img}></img>
      <a> {props.text} </a>
    </li>
      
    </>
  )
}

export default DropdownItem;
