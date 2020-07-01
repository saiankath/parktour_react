import React from 'react'
// import logo from '../../logo.svg'
import './navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
           {/* <img src={logo} alt="park tours" /> */}
        <p>Halifax Parks</p>
           <ul className="navlists">
               <li >
                   <a href="/" className="navlist">Home</a>
               </li>
               <li >
                   <a href="/" className="navlist">About</a>
               </li>
               <li>
                   <a href="/" className="navlist active">Parks</a>
               </li>
           </ul>
        </nav>
    )
}

export default Navbar
