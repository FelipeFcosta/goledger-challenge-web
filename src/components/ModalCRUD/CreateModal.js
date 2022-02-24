import { useState } from "react";
import { createAsset } from "../../services/api";
import { EditContainer } from "./styles";
import Select from 'react-select'


function setInvalidMessage() {
  let message = document.querySelector('#invalid-fields-message')
  message.style.visibility = 'visible';
}

function checkField(assetType, targetAssetType, asset, assetAttr) {
  if (assetType === targetAssetType && isInvalid(asset[assetAttr])) {
    setInvalidFieldStyle(document.getElementById(`${assetAttr}-div`))
  }
}

function isInvalid(assetAttr) {
  return !assetAttr || assetAttr.length === 0
}

function setInvalidFieldStyle(div) {
  let input = div.querySelector('input')
  input.style.border = '1px solid #f008';
  input.style.background = '#f001';
  setInvalidMessage()
}


// returns a jsx containing a label and an attribute
function showInput(inputType, label, attr, setAttr) {
  let attrName = label.toLowerCase()

  return (<div id={`${attrName}-div`} className='input-div'>
      <label htmlFor={attrName}>{label}</label>
      <input type={inputType} id={attrName} value={attr[attrName]} autoComplete="off"
        onChange={e => setAttr({...attr, [attrName]: e.target.value})}/>
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

  function handleCreate(e) {
    e.preventDefault()

    // check fields
    document.querySelector('#invalid-fields-message').style.visibility = 'hidden'

    checkField(assetType, assetType, asset, 'name')
    checkField(assetType, 'artist', asset, 'location')
    checkField(assetType, 'album', asset, 'year')
    checkField(assetType, 'album', asset, 'nTracks')

    if (assetType === 'album' && isInvalid(artist.value)) {
      let div = document.getElementById(`artist-div`)
      div.style.border = '1px solid #f008';
      setInvalidMessage()
    }

    if (document.querySelector('#invalid-fields-message').style.visibility == 'visible') {
      return
    }

    closeModal()
    createAsset(asset, artist.value).then()
    .catch((err)=> {
      console.log("erro: " + err)
    })
  }

  return (
    <EditContainer>
      <form onSubmit={handleCreate}>
        {asset['@assetType'] === 'album' && <>
          <label>Artist</label>
          <div id='artist-div' style={{marginBottom: '16px', borderRadius: '5px'}}>
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
          <div id='nTracks-div' className='input-div'>
            <label htmlFor="nTracks">{'Number of Tracks'}</label>
            <input type='number' id="nTracks" value={asset['nTracks']} autoComplete="off"
              onChange={e => setAsset({...asset, nTracks: e.target.value})}/>
          </div>
          {showInput('text', 'Genre', asset, setAsset)}
          <div>
            <input type='checkbox' id="explicit" checked={asset['explicit']} autoComplete="off"
              onChange={e => setAsset({...asset, explicit: e.target.checked ? true : false})}/>
            <label htmlFor="explicit">{'Explicit'}</label>
          </div>
        </>}



      {/* {showAssetAtr('Streaming Options', item.strOptions['@key'])} */}
        <div id='options'>
          <div id='invalid-fields-message'>Please fill all required fields</div>
          <button id='cancel-btn' type='button' onClick={closeModal}>Cancel</button>
          <button id='save-btn' type='submit'>Add</button>
        </div>
    </form>
    </EditContainer>
  )
}

export default CreateModal;
