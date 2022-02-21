import React from "react";
import { ImageContainer } from "./styles";


function Asset({asset}) {
  return (
    <ImageContainer src={asset.banner}>
      <span>{asset.label}</span>
    </ImageContainer>
  )
}

export default Asset;