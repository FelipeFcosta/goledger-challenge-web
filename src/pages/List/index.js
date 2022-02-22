import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Modal from 'react-modal';

import api from '../../services/api';
import { Container, ImageContainer, Ul } from './styles';
import AssetItem from '../../components/AssetItem';

import artist_banner from '../../resources/images/artist_banner.jpg'
import album_banner from '../../resources/images/album_banner.jpg'
import streaming_banner from '../../resources/images/streaming_banner.jpg'
import { DetailsModal } from '../../components/ModalCRUD';

const customStyles = {
  content: {
    top: '50%', left: '50%', right: 'auto', bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    zIndex: 4
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
      api.post(`/query/search`, {
        "query": {
          "selector": {
            "@assetType": `${assetLabel}`
          }
        }
      })
      .then((resp)=>{
        setAssetList(previous => resp.data['result'])
      })
      .catch((err)=>{
          console.log("erro: " + err)
      })
    }
    getAssetList()
  }, [assetLabel]) // re-render if assetLabel changes

  const [selectedItem, setSelectedItem] = React.useState({});
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function setModal(item) {
    setSelectedItem(item)
    setIsOpen(true);
  }
  
  let closeModal = () => setIsOpen(false);

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
            <AssetItem index={index} item={assetItem} onMenuClick={setModal}/>
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
          {console.log('selected:', selectedItem)}
          <DetailsModal item={selectedItem}/>
        </div>

      </Modal>
    </Container>
  }
  </div>
  );
}

export default List;
