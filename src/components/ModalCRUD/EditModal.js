import { useState } from "react";
import { updateAsset } from "../../services/api";
import { EditContainer } from "./styles";


// returns a jsx containing a label and an attribute
function showInput(inputType, label, attr, setAttr, disable=false) {
  let assetType = label.toLowerCase()

  return (<div className='input-div'>
      <label htmlFor={assetType}>{label}</label>
      <input type={inputType} id={assetType} value={attr[assetType]} autoComplete="off"
         disabled={disable} onChange={e => setAttr({...attr, [assetType]: e.target.value})}/>
  </div>
  )
}


function EditModal({item, closeModal, updateAssetList}) {
  const [asset, setAsset] = useState(item);

  function handleUpdate() {
    closeModal()
    
    updateAsset(asset).then((r) => {
      updateAssetList(item['@key'], asset)
    })
    .catch((err)=> {
      console.log("erro: " + err)
    })
  }


  return (
    <EditContainer>
      {showInput('text', 'Name', asset, setAsset, true)}
      {asset['@assetType'] == 'artist' && <>
        {showInput('text', 'Location', asset, setAsset, true)}
        <div className='input-div'>
          <label htmlFor='editable'>Description</label>
          <textarea id = 'editable' value={asset['description']}
            onChange={e => setAsset({...asset, description: e.target.value})}></textarea>
        </div>
      </>}
      {asset['@assetType'] == 'album' && <>
        {showInput('number', 'Year', asset, setAsset, true)}
        <div id='nTracks' className='input-div'>
          <label htmlFor="nTracks">{'Number of Tracks'}</label>
          <input type='number' id="nTracks" value={asset['nTracks']} autoComplete="off"
            onChange={e => setAsset({...asset, nTracks: e.target.value})}/>
        </div>
        {showInput('text', 'Genre', asset, setAsset)}
        <div>
          {console.log(asset['explicit'])}
          <input type='checkbox' id="explicit" checked={asset['explicit']} autoComplete="off"
            onChange={e => setAsset({...asset, explicit: e.target.checked ? true : false})}/>
          <label htmlFor="explicit">{'Explicit'}</label>
        </div>
      </>}

    {/* {showTextInput('Artist', albumArtist.name)} */}

    {/* {item.explicit &&
      <div className='attr' id='explicit'>[Explicit]</div>
    } */}

    {/* {showAssetAtr('Streaming Options', item.strOptions['@key'])} */}
      <div id='options'>
        <button id='cancel-btn' type='button' onClick={closeModal}>Cancel</button>
        <button id='save-btn' type='button' onClick={handleUpdate}>Save</button>
      </div>
    </EditContainer>
  )
}

export default EditModal;
