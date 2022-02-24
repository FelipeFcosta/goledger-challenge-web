import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import { getArtistByKey } from "../../services/api";
import DropdownMenu from "../DropdownMenu";
import { Tr } from "./styles";


function AssetItem({item, index, setModal}) {
  // artist for the album attribute
  const [albumArtist, setAlbumArtist] = useState([]);
  const [openMenu, setOpenMenu] = useState(false);

  let assetType = item['@assetType'];

  // request for an artist based on a key
  useEffect(() => {
    if (assetType === 'album') {
      getArtistByKey(item.artist['@key']).then((resp) => {
        setAlbumArtist(resp.data)
      })
      .catch((err)=>{
        console.log("erro: " + err)
      })
    }
  }, [assetType])


  // click listener to collapse the drop-down menu
  useEffect(() => {
    function closeMenu(e) {
      setOpenMenu(false)
      document.removeEventListener('click', closeMenu)
    }
    if (openMenu) {
      document.addEventListener('click', closeMenu)
    }
  }, [openMenu])

  
  // list the artist/album/streaming
  return (
    <Tr>
      <td id='id'><span>{index+1}</span></td>
      <td>{item.name}</td>
      {assetType === 'artist' && <td id='last'>{item.location}</td>}
      {assetType === 'album' && <Fragment>
          <td>{item.year}</td>
          {/* TODO: link goes opens a modal for the artist*/}
          <td className='last'>
            <span id='details' onClick={(e) => setModal(e, albumArtist)}>{albumArtist.name}</span>
          </td>
      </Fragment>
      }
      <td id='dropdown'>
        <span onClick={() => setOpenMenu(!openMenu)} style={{userSelect: 'none'}}>
          &bull; &bull; &bull;
        </span>
        {openMenu && <DropdownMenu item={item} setModal={setModal}/>}
      </td>
    </Tr>
  )
}

export default AssetItem;
