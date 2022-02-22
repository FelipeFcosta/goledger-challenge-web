import React from 'react';
import { Container, DropMenu } from './styles';


function DropdownMenu() {
  return (
    <Container>
      <DropMenu>
        <div>Details</div>
        <div>Edit</div>
        <div style={{color: 'red'}}>Delete</div>
      </DropMenu>
    </Container>
  )
}

export default DropdownMenu;