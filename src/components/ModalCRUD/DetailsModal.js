function DetailsModal({closeModal, item}) {

  return (
    <div>
      <div id='title'>{item.name}</div>
      {item.location && <div id='location'>{item.location}</div>}
      {item.year && <div id='location'>{item.year}</div>}
      {item.artist.name && <div id='artist'>{item.artist.name}</div>}
      <div id='description'>{item.description}</div>
      <button onClick={closeModal}></button>
    </div>
  )
}

export default DetailsModal;
