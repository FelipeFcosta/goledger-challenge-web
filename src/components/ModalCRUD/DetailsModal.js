import { useEffect, useState } from "react";
import { getArtistByKey } from "../../services/api";
import { DetailsContainer } from "./styles";


// returns a jsx containing a label and an attribute
function showAssetAtr(label, attribute) {
  return (<>
    {attribute && <>
      <div className='label'>{label}</div>
      <div className='attr'>{attribute}</div>
    </>}
  </>
  )
}


function DetailsModal({item}) {
  const [albumArtist, setAlbumArtist] = useState([]);

  // request for an artist based on a key
  useEffect(() => {
    if (item['@assetType'] === 'album') {
      getArtistByKey(item.artist['@key']).then((resp) => {
        setAlbumArtist(resp.data)
      })
      .catch((err)=>{
        console.log("erro: " + err)
      })
    }
  }, [item['@assetType']])

  return (
    <DetailsContainer>
      {showAssetAtr('Name', item.name)}
      {showAssetAtr('Location', item.location)}

      {item.description && <>
        <div className='label'>Description</div>
        <div className='attr' id='description'>{item.description}</div>
      </>}

      {showAssetAtr('Year', item.year)}
      {showAssetAtr('Number of Tracks', item.nTracks)}
      {showAssetAtr('Artist', albumArtist.name)}
      {showAssetAtr('Genre', item.genre)}

      {item.explicit &&
        <div className='attr' id='explicit'>[Explicit]</div>
      }

      {/* {showAssetAtr('Streaming Options', item.strOptions['@key'])} */}

      <div className='label' style={{marginTop: '16px'}}>Key</div>
      <div className='attr' id='key'>{item['@key']}</div>

    </DetailsContainer>
  )
}

export default DetailsModal;
