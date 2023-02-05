import React from 'react'
import '../App.css'

export default function Navbar() {
  return (
    <nav id='navbar'>
        <div className='versatile-container'>
        <img src="/Logo.svg" alt="" className="nav-logo"/>
        <ul id='nav-links'>
            <li className='nav-link'>Home</li>
            <li className='nav-link' id='about-link'>About</li>
            <li className='nav-link'>Contact</li>
            <li className='nav-link'><button>Join us</button></li>
            
        </ul>
        </div>
    </nav>
  )
}
