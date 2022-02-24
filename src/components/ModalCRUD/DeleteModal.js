import { useEffect, useState } from "react";
import { deleteAsset, searchAlbumsByArtistKey } from "../../services/api";
import { DeleteContainer } from "./styles";

function DeleteModal({item, closeModal, removeFromAssetList}) {

  const [isDeletable, setIsDeletable] = useState(true)
  const [artistAlbums, setArtistAlbums] = useState({})

  useEffect(() => {
    if (item['@assetType'] === 'artist') {
      searchAlbumsByArtistKey(item['@key']).then((resp) => {
        setArtistAlbums(resp.data.result)
        if (resp.data.result.length > 0) {
          setIsDeletable(false)
        }
      }).catch((e) => {
        console.log('erro: ', e)
      })
    }
  }, [])


  function handleDeletion() {
    closeModal()
    
    deleteAsset(item).then((r) => {
      removeFromAssetList(item['@key'])
    })
    .catch((err)=> {
      console.log("erro: " + err)
    })
  }

  async function handleArtistAlbumsDeletion() {
    for (let i = 0; i < artistAlbums.length; i++) {
      await deleteAsset(artistAlbums[i]).then()
      .catch((err)=> {
        console.log("erro: " + err)
      })
    }

    deleteAsset(item).then((r) => {
      removeFromAssetList(item['@key'])
    })
    .catch((err)=> {
      console.log("erro: " + err)
    })

    closeModal()
  }

  return (
    <DeleteContainer>
      {isDeletable && <>
        <div id='delete'>Delete <span>{item.name}</span>?</div>
        <div id='options'>
          <button id='cancel-btn' onClick={closeModal}>Cancel</button>
          <button id='delete-btn' onClick={handleDeletion}>Delete</button>
        </div>
      </>}
      {item['@assetType'] === 'artist' && !isDeletable && <>
        <div className='dependent'><span>{item.name}</span> has albums registered in the database.</div>
        <div className='dependent' id='warning'>This operation will also delete all of their albums.</div>
        <div className='dependent'>Are you sure you want to do this?</div>
        <div id='options'>
          <button id='cancel-btn' onClick={closeModal}>Cancel</button>
          <button id='delete-btn' onClick={handleArtistAlbumsDeletion}>Delete Artist and Albums</button>
        </div>
      </>}
    </DeleteContainer>
  )
}

export default DeleteModal;
