import React, { useEffect, useState } from 'react';
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
      async function getAssetList(){
        await api.post(`/query/search`, {
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


  return (
    <Container>
      <table>
        {assetLabel == 'artist' && 
          <tr>
            <th id='id'>#</th>
            <th>Name</th>
            <th>Location</th>
          </tr>
        }
        {assetLabel == 'album' && 
          <tr> 
            <th id='id'>#</th>
            <th>Name</th>
            <th>Year</th>
            <th>Artist</th>
          </tr>
        }
        {assetLabel == 'streaming' && 
          <tr> 
            <th id='id'>#</th>
            <th>Name</th>
          </tr> 
        }
        {assetList.map((assetItem, id) =>
          <AssetItem id={id} item={assetItem}/>
        )}
      </table>
    </Container>
  );
}

export default List;
