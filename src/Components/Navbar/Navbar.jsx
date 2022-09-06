import React from 'react'
import "./Navbar.scss"
import Logo from "./../../assets/logo.png"
function Navbar() {
  return (
    <div className='navbar'>
        
        <ul class="topnav">
  <li><img src={Logo} /></li>
  <li><a href="#home">Home</a></li>
  <li><a href="#home">Service <i class="fa fa-angle-down" aria-hidden="true"></i></a></li>
  <li><a href="#news">Classes  <i class="fa fa-angle-down" aria-hidden="true"></i></a></li>
  <li><a href="#contact">Resturant <i class="fa fa-angle-down" aria-hidden="true"></i></a></li>
  <li><a href="#contact">Blog</a></li>
  <li ><a href="#about">Shop</a></li>
  <li className='en'><a href="#about">En <i class="fa fa-angle-down" aria-hidden="true"></i></a></li>
  <li class="right"><a href="#about">SIGN IN</a></li>
</ul>
    </div>
  )
}

export default Navbar