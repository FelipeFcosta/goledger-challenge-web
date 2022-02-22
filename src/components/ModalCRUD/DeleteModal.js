import { DeleteContainer } from "./styles";

function DeleteModal({item}) {

  return (
    <DeleteContainer>
      <div id='delete'>Delete <span>{item.name}</span>?</div>
      <div id='options'>
        <button id='cancel'>Cancel</button>
        <button id='delete'>Delete</button>
      </div>
    </DeleteContainer>
  )
}

export default DeleteModal;
