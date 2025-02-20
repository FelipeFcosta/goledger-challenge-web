import React, { useContext, useEffect, useState } from 'react';
import { Nav, Logo, AddButton, SearchBar } from './styles';

import logo from '../../resources/images/goledger-logo.png'
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import Modal from 'react-modal/lib/components/Modal';
import { CreateModal } from '../ModalCRUD';
import { searchByAssetType } from '../../services/api';

import searchIcon from '../../resources/images/search-icon.svg'
import AssetListContext from '../../contexts/asset_list_context';
import LoadingContext from '../../contexts/loading_context';

Modal.setAppElement(document.getElementById('root'));

let activeStyle = {
  color: '#005588'
}

function Navbar({modalStyle}) {
  let params = useParams();
  let assetType = params.assetLabel.toLowerCase()
  let label = {'artist': 'Artist', 'album': 'Album', 'streaming': 'Streaming Service'}

  let navigate = useNavigate()
  function handleSearch(e) {
    e.preventDefault()
    navigate(`/list/${assetType}/${e.target[0].value.trim()}`)
  }

  // artist list when creating an album
  const [artistList, setArtistList] = useState({});
  useEffect(() => {
    if (assetType === 'album') {
      searchByAssetType('artist')
        .then((resp)=>{
          setArtistList(resp.data['result'])
        })
        .catch((err)=>{
          console.log("erro: " + err)
        })
    }
  }, [assetType])

  const {assetList, setAssetList} = useContext(AssetListContext)
  const {isLoading, setIsLoading} = useContext(LoadingContext)

  // modal configuration
  const [modalIsOpen, setIsOpen] = React.useState(false);
  let setModal = () => setIsOpen(true);
  let closeModal = () => setIsOpen(false)

  return (
    <AssetListContext.Provider value={{assetList, setAssetList}}>
    <LoadingContext.Provider value={{isLoading, setIsLoading}}>
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

        <SearchBar>
          <form onSubmit={handleSearch}>
            <img src={searchIcon}></img>
            <input type='text' placeholder={`Search ${label[assetType].split(' ')[0]}`}></input>
          </form>
        </SearchBar>

        <AddButton id={assetType} onClick={setModal}>
          <div id='plus'>+</div>
          <div id='add'>New {label[assetType]}</div>
        </AddButton>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={modalStyle}
          contentLabel="CRUD Modal"
        >
          <CreateModal id='modal' artistList={artistList} assetType={assetType} closeModal={closeModal}></CreateModal>
        </Modal>
      </Nav>
    </LoadingContext.Provider>
    </AssetListContext.Provider>
  )
}

export default Navbar;