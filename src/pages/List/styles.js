import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: var(--nav-size);  
  
  table {
    margin-top: 64px;
    padding-top: 16px;
    border-spacing: 0px;
    background: var(--background);
  }

  th {
    padding-top: 8px;
    position: sticky;
    top: 0;
    background: var(--background);
    z-index: 1;
    font-family: Montserrat;
    font-weight: 400;
    text-transform: uppercase;
    color: grey;
    text-align: left;

    padding-bottom: 16px;
    border-bottom: 1px solid #ccc;
  }

  th#id {
    padding-left: 16px;
  }
`

export const ImageContainer = styled.div`
  display:flex;
  flex-direction: column;
  height: 100px;

  span {
    color: white;
    font-weight: bold;
    padding: 24px;
    font-size: 4em;
    text-shadow: 0 0px 15px #000;
    user-select: none;
    font-family: 'Montserrat';
    text-transform: capitalize;
  }

  // Fixed-position background image
  &::before {
    content: ' ';
    width: 100%;
    height: 300px;
    background: linear-gradient(to bottom, #0000, #000a), url(${props => props.src}) center center;
    background-size: cover;
    position: fixed; // instead of background-attachment
    z-index: -1;
  }
`