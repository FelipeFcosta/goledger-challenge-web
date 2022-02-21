import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api';
import { Container, Ul } from './styles';
import AssetItem from '../../components/AssetItem';

function List() {
  let params = useParams();
  let assetLabel = params.assetLabel.toLowerCase()
  let navigate = useNavigate()

  // check if url parameter is valid, otherside go to home page
  if (!["artist", "album", "streaming"].includes(assetLabel)) {
    navigate('/')
  }

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
  }, []) // only execute at load time


  // wait until we have data
  if (assetList.length == 0) {
    console.log('not ready')
    return <div />
  }

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th id='id'>#</th>
            <th>Name</th>
            {assetLabel == 'artist' && 
              <th>Location</th>
            }
            {assetLabel == 'album' && 
              <Fragment>
                <th>Year</th>
                <th>Artist</th>
              </Fragment>
            }
          </tr> 
        </thead>
        <tbody>
          {assetList.map((assetItem, id) =>
            <AssetItem id={id} item={assetItem}/>
          )}
        </tbody>
      </table>
    </Container>
  );
}

export default List;
