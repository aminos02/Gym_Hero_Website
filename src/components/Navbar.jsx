import React, { useState } from 'react'
import './Navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
function Navbar() {
  const [toggle,setToggle]=useState(false);
  window.onscroll=()=>{
    setToggle(false)
  }
  return (
    <header className="header">

    <a href="#" className="logo"> <span>GYM</span>HERO</a>

    <FontAwesomeIcon id="menu-btn" onClick={()=>setToggle(!toggle)} icon={toggle?faTimes:faBars}/>

    <nav className={`navbar ${toggle && 'active'}`}>
        <a href="#home">home</a>
        <a href="#about">about</a>
        <a href="#features">features</a>
        <a href="#pricing">pricing</a>
        <a href="#trainers">trainers</a>
        <a href="#blogs">blogs</a>
    </nav>

</header>
  )
}

export default Navbar