import React from 'react';
import { Container, Logo } from './styles';

import logo from '../../resources/images/goledger-logo.png'

function Navbar() {
  return (
    <Container>
      <Logo src={logo}/>
    </Container>
  )
}

export default Navbar;