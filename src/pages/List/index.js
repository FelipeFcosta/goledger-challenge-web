import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Modal from 'react-modal';

import { Container, ImageContainer, NoResults } from './styles';
import AssetItem from '../../components/AssetItem';
import { searchAssetByQuery } from "../../services/api";

import artist_banner from '../../resources/images/artist_banner.jpg'
import album_banner from '../../resources/images/album_banner.jpg'
import streaming_banner from '../../resources/images/streaming_banner.jpg'
import { DetailsModal, DeleteModal, EditModal } from '../../components/ModalCRUD';


Modal.setAppElement(document.getElementById('root'));

function List({modalStyle}) {
  let assetType = useParams().assetLabel.toLowerCase()
  let searchTerm = useParams().searchTerm
  if (!searchTerm) searchTerm = ""
  
  let navigate = useNavigate()
  // check if url parameter is valid, otherside go to home page
  if (!["artist", "album", "streaming"].includes(assetType)) {
    navigate('/')
  }
  
  let banner
  if (assetType === 'artist')     banner = artist_banner
  else if (assetType === 'album') banner = album_banner
  else                             banner = streaming_banner

  const [assetList, setAssetList] = useState([])

  // list all according to search
  useEffect(() => {
    searchAssetByQuery(assetType, searchTerm).then((resp) => {
      setAssetList(resp.data['result'])
    })
    .catch((err)=>{
      console.log("erro: " + err)
    })
  }, [assetType, searchTerm]) // re-render if assetLabel changes

  
  // modal configuration
  const [selectedItem, setSelectedItem] = React.useState({});
  const [selectedOption, setSelectedOption] = React.useState('');
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function setModal(event, item=null) {
    setSelectedItem(item)
    setSelectedOption(event.target.getAttribute('id'));
    setIsOpen(true);
  }
  let closeModal = () => setIsOpen(false)

  function removeFromAssetList(key) {
    setAssetList(assetList => assetList.filter(asset => asset['@key'] !== key))
  }

  function updateAssetList(key, newItem) {
    for (let i = 0; i < assetList.length; i++) {
      if (assetList[i]['@key'] === key) {
        setAssetList(list => {list[i] = newItem; return list})
        console.log("achou", newItem.nTracks)
        break;
      }
    }
  }


  let title = assetType === 'streaming' ? `${assetType} services` : `${assetType}s`

  return (
    <div>
    {/*render only if we have data */}
    {assetList &&
    <Container>
      <ImageContainer src={banner}>
        <span>{title}</span>
      </ImageContainer>
      {assetList.length > 0 && <>
        <table>
          <colgroup>
            {/* attach first column to the second */}
            <col span="1" style={{width: '0'}}/>
          </colgroup>

          <thead>
            <tr>
              <th id='id'>#</th>
              <th>Name</th>
              {assetType === 'artist' && <th>Location</th>}
              {assetType === 'album' && 
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
          style={modalStyle}
          contentLabel="CRUD Modal"
        >
          <div>
            {selectedOption == 'details' && <DetailsModal item={selectedItem}/>}
            {selectedOption == 'delete' &&
              <DeleteModal item={selectedItem} closeModal={closeModal} removeFromAssetList={removeFromAssetList}/>}
            {selectedOption == 'edit' &&
              <EditModal item={selectedItem} closeModal={closeModal} updateAssetList={updateAssetList}/>}
            {selectedOption == 'create' &&
              <EditModal item={selectedItem} closeModal={closeModal} updateAssetList={updateAssetList}/>}
          </div>

        </Modal>
      </>}
      {assetList.length == 0 && 
        <NoResults>No results found for "{searchTerm}"</NoResults>
      }
    </Container>
  }
  </div>
  );
}

export default List;
