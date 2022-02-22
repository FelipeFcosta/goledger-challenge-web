import React from 'react';
import { Container, DropMenu } from './styles';


function DropdownMenu({item, onOptionClick}) {
  return (
    <Container>
      <DropMenu>
        <div id='details' onClick={(e) => onOptionClick(e, item)}>Details</div>
        <div id='edit'>Edit</div>
        <div id='delete' onClick={(e) => onOptionClick(e, item)} style={{color: 'red'}}>Delete</div>
      </DropMenu>
    </Container>
  )
}

export default DropdownMenu;