import React from 'react';
import { useParams } from 'react-router-dom';

function List() {
  let params = useParams();

  return (
    <div>
      <h1>{params.assetLabel}</h1>
    </div>
  );
}

export default List;