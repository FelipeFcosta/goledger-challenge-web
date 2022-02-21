import React from 'react';
import { Nav, Logo } from './styles';

import logo from '../../resources/images/goledger-logo.png'
import { Link, NavLink, useParams } from 'react-router-dom';

function Navbar() {
  let linkNames = ['Artist', 'Album', 'Streaming Services']

  return (
    <Nav>
      <Link to='/'><Logo src={logo}/></Link>
      <NavLink to={'/list/artist'} activeClassName="selected">{linkNames[0]}</NavLink>
      <NavLink to={'/list/album'} activeClassName="selected">{linkNames[1]}</NavLink>
      <NavLink to={'/list/streaming'} activeClassName="selected">{linkNames[2]}</NavLink>
    </Nav>
  )
}

export default Navbar;