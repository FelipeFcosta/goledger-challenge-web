import React from "react";
import { ImageContainer } from "./styles";
import { Link } from 'react-router-dom';


function Asset({asset}) {

  return (
    <Link to={`/list/${asset.label}`} style={{textDecoration: 'none'}}>
      <ImageContainer src={asset.banner}>
        <span>{asset.label}</span>
      </ImageContainer>
    </Link>
  )
}

export default Asset;