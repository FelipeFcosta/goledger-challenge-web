import React from 'react';
import { Container, DropMenu } from './styles';


function DropdownMenu({item, onOptionClick}) {
  return (
    <Container>
      <DropMenu>
        <div onClick={() => onOptionClick(item)}>Details</div>
        <div>Edit</div>
        <div style={{color: 'red'}}>Delete</div>
      </DropMenu>
    </Container>
  )
}

export default DropdownMenu;