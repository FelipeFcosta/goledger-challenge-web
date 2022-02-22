import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import api from "../../services/api";
import { Tr } from "./styles";


function AssetItem({item, index}) {
  // artist for the album attribute
  const [albumArtist, setAlbumArtist] = useState([]);

  let assetType = item['@assetType'];

  // request for an artist based on a key
  useEffect(() => {
    if (assetType === 'album') {
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
  }, [assetType])

  // list all artists/albums/streamings
  return (
    <Tr>
      <td id='id'><span>{index+1}</span></td>
      <td>{item.name}</td>
      {assetType === 'artist' &&
        <td id='last'>{item.location}</td>
      }
      {assetType === 'album' && <Fragment>
          <td>{item.year}</td>
          {/* TODO: link goes opens a modal for the artist*/}
          <td className='last'><a href='/'>{albumArtist.name}</a></td>
      </Fragment>
      }
      <td id='dropdown'><span>&bull; &bull; &bull;</span></td>
    </Tr>
  )
}

export default AssetItem;