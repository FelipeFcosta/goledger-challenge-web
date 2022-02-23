import { useState } from "react";
import { createAsset } from "../../services/api";
import { EditContainer } from "./styles";
import Select from 'react-select'

// returns a jsx containing a label and an attribute
function showInput(inputType, label, attr, setAttr) {
  let assetType = label.toLowerCase()

  return (<div className='input-div'>
      <label htmlFor={assetType}>{label}</label>
      <input type={inputType} id={assetType} value={attr[assetType]} autoComplete="off"
        onChange={e => setAttr({...attr, [assetType]: e.target.value})}/>
  </div>
  )
}


function CreateModal({artistList, assetType, closeModal, addToAssetList}) {
  const [asset, setAsset] = useState({'@assetType': assetType});
  const [artist, setArtist] = useState({});

  let options = [{value: '', label: ''}]
  if (artistList.length > 0) {
    options = artistList.map(artist => ({value: artist['@key'], label: artist.name}))
  }

  function handleCreate() {
    closeModal()
    createAsset(asset, artist.value).then((r) => {
    })
    .catch((err)=> {
      console.log("erro: " + err)
    })
  }

  return (
    <EditContainer>
      {asset['@assetType'] === 'album' && <>
        <label>Artist</label>
        <div style={{marginBottom: '16px'}}>
          <Select value={artist} onChange={(selected) => setArtist(selected)}
          options={options} />
        </div>
        </>
      }
      {showInput('text', 'Name', asset, setAsset)}

      {asset['@assetType'] === 'artist' && <>
        {showInput('text', 'Location', asset, setAsset)}
        <div className='input-div'>
          <label htmlFor='editable'>Description</label>
          <textarea id = 'editable' value={asset['description']}
            onChange={e => setAsset({...asset, description: e.target.value})}></textarea>
        </div>
      </>}
      {asset['@assetType'] === 'album' && <>
        {showInput('number', 'Year', asset, setAsset, true)}
        <div id='nTracks' className='input-div'>
          <label htmlFor="nTracks">{'Number of Tracks'}</label>
          <input type='number' id="nTracks" value={asset['nTracks']} autoComplete="off"
            onChange={e => setAsset({...asset, nTracks: e.target.value})}/>
        </div>
        {showInput('text', 'Genre', asset, setAsset)}
        <div style={{marginBottom: '16px'}}>
          <input type='checkbox' id="explicit" checked={asset['explicit']} autoComplete="off"
            onChange={e => setAsset({...asset, explicit: e.target.checked ? true : false})}/>
          <label htmlFor="explicit">{'Explicit'}</label>
        </div>
      </>}



    {/* {showAssetAtr('Streaming Options', item.strOptions['@key'])} */}
      <div id='options'>
        <button id='cancel-btn' type='button' onClick={closeModal}>Cancel</button>
        <button id='save-btn' type='button' onClick={handleCreate}>Add</button>
      </div>
    </EditContainer>
  )
}

export default CreateModal;
