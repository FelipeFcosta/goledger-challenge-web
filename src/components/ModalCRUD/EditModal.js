import { useState } from "react";
import { EditContainer } from "./styles";


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


function EditModal({item}) {
  const [asset, setAsset] = useState(item);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <EditContainer>
      <form onSubmit={handleSubmit}>
        {showInput('text', 'Name', asset, setAsset)}
        {asset['@assetType'] == 'artist' && <>
          {showInput('text', 'Location', asset, setAsset)}
          <div className='input-div'>
            <label htmlFor='editable'>Description</label>
            <textarea id = 'editable' value={asset['description']}
              onChange={e => setAsset({...asset, description: e.target.value})}></textarea>
          </div>
        </>}
        {asset['@assetType'] == 'album' && <>
          {showInput('number', 'Year', asset, setAsset)}
          <div id='nTracks' className='input-div'>
            <label htmlFor="nTracks">{'Number of Tracks'}</label>
            <input type='number' id="nTracks" value={asset['nTracks']} autoComplete="off"
              onChange={e => setAsset({...asset, nTracks: e.target.value})}/>
          </div>
          {showInput('text', 'Genre', asset, setAsset)}
          <div>
            <input type='checkbox' id="explicit" checked={asset['explicit']} autoComplete="off"
              onChange={e => setAsset({...asset, explicit: e.target.value})}/>
            <label htmlFor="explicit">{'Explicit'}</label>
          </div>
        </>}

      {/* {showTextInput('Artist', albumArtist.name)} */}

      {/* {item.explicit &&
        <div className='attr' id='explicit'>[Explicit]</div>
      } */}

      {/* {showAssetAtr('Streaming Options', item.strOptions['@key'])} */}
        <div id='options'>
          <button id='cancel-btn'>Cancel</button>
          <button id='save-btn'>Save</button>
        </div>
      </form>
    </EditContainer>
  )
}

export default EditModal;
