import React, { useState } from "react";
import { useEffect } from "react";
import api from "../../services/api";
import { Li, Tr } from "./styles";


function AssetItem({item, id}) {
  // artist for the album attribute
  const [albumArtist, setAlbumArtist] = useState([]);

  // request for an artist based on a key
  useEffect(() => {
    if (item['@assetType'] === 'album') {
      function getArtist(key){
        api.post(`/query/readAsset`, {
          "key": {
            "@assetType": 'artist',
            "@key": `${key}`
          }
        })
        .then((resp)=>{
          setAlbumArtist(resp.data)
        })
        .catch((err)=>{
            console.log("erro: " + err)
          })
      }
      getArtist(item.artist['@key'])
    }
  }, [])

  // list all artists/albums/streamings
  switch (item['@assetType']) {
    case 'artist':
      return (
        <Tr>
          <td id='id'><span>{id+1}</span></td>
          <td>{item.name}</td>
          <td className='last'>{item.location}</td>
        </Tr>
      )
    case 'album':
      return (
        <Tr>
          <td id='id'><span>{id+1}</span></td>
          <td>{item.name}</td>
          <td>{item.year}</td>
          {/* TODO: link goes opens a modal for the artist*/}
          <td className='last'><a href='/'>{albumArtist.name}</a></td>
        </Tr>
      )
    default:
      return (
        <Tr>
          <td id='id'><span>{id+1}</span></td>
          <td className='last'>{item.name}</td>
        </Tr>
      )
  }
}

export default AssetItem;