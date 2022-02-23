import { useEffect, useState } from "react";
import { deleteAsset } from "../../services/api";
import { DeleteContainer } from "./styles";

function DeleteModal({item, closeModal, removeFromAssetList}) {

  function handleDeletion() {
    closeModal()
    
    deleteAsset(item).then((r) => {
      removeFromAssetList(item['@key'])
    })
    .catch((err)=> {
      console.log("erro: " + err)
    })

  }

  return (
    <DeleteContainer>
      <div id='delete'>Delete <span>{item.name}</span>?</div>
      <div id='options'>
        <button id='cancel-btn' onClick={closeModal}>Cancel</button>
        <button id='delete-btn' onClick={handleDeletion}>Delete</button>
      </div>
    </DeleteContainer>
  )
}

export default DeleteModal;
