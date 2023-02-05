import React from 'react'
import '../App.css'

export default function Navbar() {

  const handleNavItemClick = id => {
    const target = document.getElementById(id);
    target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav id='navbar'>
        <div className='versatile-container'>
        <img src="/Logo.svg" alt="" className="nav-logo"/>
        <ul id='nav-links'>
            <li className='nav-link'><a href="#" onClick={e =>  handleNavItemClick("")}>Home</a></li>
            <li className='nav-link'> <a href="#" onClick={e =>  handleNavItemClick("")}>Categories</a></li>
            <li className='nav-link'><a href="#" onClick={e => {e.preventDefault(); handleNavItemClick("goals");} }>Goals</a></li> 
            <li className="nav-link"><a href="#" onClick={e => {e.preventDefault(); handleNavItemClick("sponsors");}}>Sponsors</a></li>
            <li className='nav-link'><button>Contact us</button></li>
            
        </ul>
        </div>
    </nav>
  )
}
