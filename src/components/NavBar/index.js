import React from 'react';
import { Nav, Logo } from './styles';

import logo from '../../resources/images/goledger-logo.png'
import { Link, NavLink, useParams } from 'react-router-dom';

function Navbar() {
  let params = useParams();
  let links = null  // which links will appear

  links = ['Artist', 'Album', 'Streaming Services']

  let activeStyle = {
    color: 'black'
  }

  return (
    <Nav>
      <Link to='/' className='nav-logo'><Logo src={logo}/></Link>
      <NavLink to='/list/artist' className='nav-link' style={({ isActive }) => isActive ? activeStyle : undefined}>
        Artist
      </NavLink>
      <NavLink to='/list/album' className='nav-link' style={({ isActive }) => isActive ? activeStyle : undefined}>
        Album
      </NavLink>
      <NavLink to='/list/streaming' className='nav-link' style={({ isActive }) => isActive ? activeStyle : undefined}>
        Streaming Services
      </NavLink>
    </Nav>
  )
}

export default Navbar;