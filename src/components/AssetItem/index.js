import React from "react";
import { Li, Tr } from "./styles";


function AssetItem({item, id}) {

  console.log(item)

  switch (item['@assetType']) {
    case 'artist':
      return (
        <Tr>
          <td id='id'><span>{id+1}</span></td>
          <td id='name'>{item.name}</td>
          <td>{item.location}</td>
        </Tr>
      )
    case 'album':
      return (
        <Tr>
          <td id='id'><span>{id+1}</span></td>
          <td id='name'>{item.name}</td>
          <td>{item.year}</td>
        </Tr>
      )
    default:
      return (
        <Tr>
          <td id='id'><span>{id+1}</span></td>
          <td id='name'>{item.name}</td>
        </Tr>
      )
  }
}

export default AssetItem;