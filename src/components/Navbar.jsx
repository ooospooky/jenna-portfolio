import React from 'react'
import { Link } from 'react-scroll'
export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar__logo'>
        <h3 className='navbar__h3'>LEE HUI JU</h3>
      </div>
      <div className='navbar__menu'>
        <ul className='navbar__ul'>
        <li><Link to="hero" smooth duration={300} >HOME</Link></li>
          <li> <Link to="project" smooth duration={300} offset={-72}>PROJECT</Link></li>
          <li><Link to="about" smooth duration={300} offset={-72}>ABOUT</Link></li>
          <li><Link to="contact" smooth duration={300} offset={-72}>CONTACT</Link></li>
        </ul>
      </div>
    </div>
  )
}
