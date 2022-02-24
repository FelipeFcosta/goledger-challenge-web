import { useContext, useEffect, useState } from "react";
import LoadingContext from "../../contexts/loading_context";
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

  const {isLoading, setIsLoading} = useContext(LoadingContext)

  async function handleDeletion() {
    closeModal()
    setIsLoading(true)
    
    await deleteAsset(item).then((r) => {
      removeFromAssetList(item['@key'])
    })
    .catch((err)=> {
      console.log("erro: " + err)
    })
    setIsLoading(false)
  }

  async function handleArtistAlbumsDeletion() {
    closeModal()
    setIsLoading(true)
    for (let i = 0; i < artistAlbums.length; i++) {
      await deleteAsset(artistAlbums[i]).then()
      .catch((err)=> {
        console.log("erro: " + err)
      })
    }

    await deleteAsset(item).then((r) => {
      removeFromAssetList(item['@key'])
    })
    .catch((err)=> {
      console.log("erro: " + err)
    })
    setIsLoading(false)
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
