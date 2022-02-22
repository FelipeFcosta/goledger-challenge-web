import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: var(--nav-size);
  
  table {
    padding-top: 16px;
    padding-left: 32px;
    padding-right: 32px;
    border-spacing: 0px;
    background: var(--background);
    white-space: nowrap;
    z-index: 2;
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

  th#dropdown {
    padding: 0;
    width: 50px;
  }
`

export const ImageContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 200px;

  span {
    color: white;
    font-weight: bold;
    padding: 24px;
    font-size: 4em;
    text-shadow: 0 0px 15px #000;
    user-select: none;
    font-family: 'Montserrat';
    text-transform: capitalize;
    position: fixed;
  }

  // Fixed-position background image
  :before {
    content: ' ';
    background: linear-gradient(to bottom, #0000, #000a), url(${props => props.src}) no-repeat;
    width: calc(100% - var(--nav-size));
    height: 200px;
    background-position: center 45%;
    background-size: cover;
    
    position: fixed;
    z-index: -1;
  }
`