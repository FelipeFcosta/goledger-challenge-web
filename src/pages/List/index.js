import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Modal from 'react-modal';

import { Container, ImageContainer, Ul } from './styles';
import AssetItem from '../../components/AssetItem';
import { searchByAssetType } from "../../services/api";

import artist_banner from '../../resources/images/artist_banner.jpg'
import album_banner from '../../resources/images/album_banner.jpg'
import streaming_banner from '../../resources/images/streaming_banner.jpg'
import { DetailsModal, DeleteModal, EditModal } from '../../components/ModalCRUD';

const customStyles = {
  content: {
    top: '50%', left: '50%', right: 'auto', bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '400px',
    borderRadius: '8px'
  },
  overlay: {
    zIndex: 4,
    backgroundColor: "#000b"
  }
};

Modal.setAppElement(document.getElementById('root'));

function List() {

  let assetLabel = useParams().assetLabel.toLowerCase()
  
  let navigate = useNavigate()
  // check if url parameter is valid, otherside go to home page
  if (!["artist", "album", "streaming"].includes(assetLabel)) {
    navigate('/')
  }
  
  let banner
  if (assetLabel === 'artist')     banner = artist_banner
  else if (assetLabel === 'album') banner = album_banner
  else                             banner = streaming_banner

  const [assetList, setAssetList] = useState([])
  
  // list all artists/albums/streamings
  useEffect(() => {
    function getAssetList(){
      searchByAssetType(assetLabel)
      .then((resp)=>{
        setAssetList(resp.data['result'])
      })
      .catch((err)=>{
          console.log("erro: " + err)
      })
    }
    getAssetList()
  }, [assetLabel]) // re-render if assetLabel changes

  
  // modal configuration
  const [selectedItem, setSelectedItem] = React.useState({});
  const [selectedOption, setSelectedOption] = React.useState('');
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function setModal(event, item) {
    setSelectedItem(item)
    setSelectedOption(event.target.getAttribute('id'));
    setIsOpen(true);
  }
  let closeModal = () => setIsOpen(false)

  function removeFromAssetList(key) {
    setAssetList(assetList => assetList.filter(asset => asset['@key'] !== key))
  }


  let title = assetLabel === 'streaming' ? `${assetLabel} services` : `${assetLabel}s`

  return (
    <div>
    {/*render only if we have data */}
    {assetList.length !== 0 &&
    <Container>
      <ImageContainer src={banner}>
        <span>{title}</span>
      </ImageContainer>
      <table>
        <colgroup>
          {/* attach first column to the second */}
          <col span="1" style={{width: '0'}}/>
        </colgroup>

        <thead>
          <tr>
            <th id='id'>#</th>
            <th>Name</th>
            {assetLabel === 'artist' && <th>Location</th>}
            {assetLabel === 'album' && 
              <>
                <th>Year</th>
                <th>Artist</th>
              </>
            }
            <th id='dropdown'></th>
          </tr> 
        </thead>
        <tbody>
          {assetList.map((assetItem, index) =>
            <AssetItem index={index} item={assetItem} setModal={setModal}/>
          )}
        </tbody>
      </table>
  
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          {selectedOption == 'details' && <DetailsModal item={selectedItem}/>}
          {selectedOption == 'delete' &&
            <DeleteModal item={selectedItem} closeModal={closeModal} removeFromAssetList={removeFromAssetList}/>}
          {selectedOption == 'edit' && <EditModal item={selectedItem}/>}
        </div>

      </Modal>
    </Container>
  }
  </div>
  );
}

export default List;
