import React from 'react';
import { Container, DropMenu } from './styles';


function DropdownMenu({item, setModal}) {
  return (
    <Container>
      <DropMenu>
        <div id='details' onClick={(e) => setModal(e, item)}>Details</div>
        {item['@assetType'] !== 'streaming' &&
          <div id='edit' onClick={(e) => setModal(e, item)}>Edit</div>
        }
        <div id='delete' onClick={(e) => setModal(e, item)} style={{color: 'red'}}>Delete</div>
      </DropMenu>
    </Container>
  )
}

export default DropdownMenu;