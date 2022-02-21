import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api';

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
    <ul>
      {assetList.map((asset) =>
        <li>{asset.name}</li>
      )}
    </ul>
  );
}

export default List;
