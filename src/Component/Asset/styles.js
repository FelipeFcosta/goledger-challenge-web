import styled from 'styled-components';

export const ImageContainer = styled.div`
  display:flex;
  flex-direction: column;
  
  background-image: linear-gradient(to bottom, #0000, #000), url(${props => props.src});
  box-shadow: 10px 10px 5px #0005;
  border-radius: 8px;
  width:300px;
  height:400px;
  background-size: cover;
  background-position: center;
  
  justify-content: flex-end;
  
  span {
    color: white;
    font-weight: bold;
    font-size: 2em;
    margin: 16px;
    user-select: none;
  }
  
  cursor: pointer;
  
  :hover {
    background-image: linear-gradient(to bottom, #fff1, #fff1), url(${props => props.src});
    box-shadow: 10px 10px 10px #0005;
  }
`