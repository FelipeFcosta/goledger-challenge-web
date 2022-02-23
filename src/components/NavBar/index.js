import React from 'react';
import { Nav, Logo } from './styles';

import logo from '../../resources/images/goledger-logo.png'
import { Link, NavLink, useParams } from 'react-router-dom';
import Modal from 'react-modal/lib/components/Modal';
import { CreateModal } from '../ModalCRUD';


Modal.setAppElement(document.getElementById('root'));

function Navbar({modalStyle}) {
  let params = useParams();
  let assetType = params.assetLabel.toLowerCase()
  let label = {'artist': 'Artist', 'album': 'Album', 'streaming': 'Streaming Service'}

  let activeStyle = {
    color: '#005588'
  }

  // modal configuration
  const [modalIsOpen, setIsOpen] = React.useState(false);
  let setModal = () => setIsOpen(true);
  let closeModal = () => setIsOpen(false)

  return (
    <Nav>
      <Link to='/' className='nav-logo'><Logo src={logo}/></Link>
      <NavLink to='/list/artist' className='nav-link' style={({ isActive }) => isActive ? activeStyle : undefined}>
        Artists
      </NavLink>
      <NavLink to='/list/album' className='nav-link' style={({ isActive }) => isActive ? activeStyle : undefined}>
        Albums
      </NavLink>
      <NavLink to='/list/streaming' className='nav-link' style={({ isActive }) => isActive ? activeStyle : undefined}>
        Streaming Services
      </NavLink>
        <div id={assetType} className={'add-div'} onClick={setModal}>
          <div id='plus'>+</div>
          <div id='add'>New {label[assetType]}</div>
        </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyle}
        contentLabel="CRUD Modal"
      >
        <CreateModal assetType={assetType} closeModal={closeModal}></CreateModal>
      </Modal>
    </Nav>
  )
}

export default Navbar;