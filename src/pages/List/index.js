import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api';
import { Container, ImageContainer, Ul } from './styles';
import AssetItem from '../../components/AssetItem';

import artist_banner from '../../resources/images/artist_banner.jpg'
import album_banner from '../../resources/images/album_banner.jpg'
import streaming_banner from '../../resources/images/streaming_banner.jpg'

function List() {
  let params = useParams();
  let assetLabel = params.assetLabel.toLowerCase()
  
  let navigate = useNavigate()
  // check if url parameter is valid, otherside go to home page
  if (!["artist", "album", "streaming"].includes(assetLabel)) {
    navigate('/')
  }
  
  let banner
  if (assetLabel === 'artist')     banner = artist_banner
  else if (assetLabel === 'album') banner = album_banner
  else                            banner = streaming_banner

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
        {/* attach first column to the second */}
        <colgroup>
          <col span="1" style={{width: '0'}}/>
        </colgroup>

        <thead>
          <tr>
            <th id='id'>#</th>
            <th>Name</th>
            {assetLabel === 'artist' && 
              <th>Location</th>
            }
            {assetLabel === 'album' && 
              <Fragment>
                <th>Year</th>
                <th>Artist</th>
              </Fragment>
            }
            <th id='dropdown'></th>
          </tr> 
        </thead>
        <tbody>
          {assetList.map((assetItem, index) =>
            <AssetItem index={index} item={assetItem}/>
          )}
        </tbody>
      </table>
    </Container>
  }
  </div>
  );
}

export default List;
