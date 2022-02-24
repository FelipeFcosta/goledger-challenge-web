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
  box-shadow: 0 0 10px #000;

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

export const ModalStyle = styled.div`
    top: 50%; left: 50%; right: auto; bottom: auto;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    min-width: 400px;
    border-radius: 8px;
`

export const OverlayStyle = styled.div`
  z-index: 4;
  background-color: #000b;
`

export const NoResults = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: 64px;
  font-size: 1.4em;
  font-family: 'Montserrat';
  font-weight: 600;
  text-align: center;
`

export const Loading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: 64px;
  font-size: 1.4em;
  font-family: 'Montserrat';
  font-weight: 600;
  text-align: center;
  
  .loading {
    display: flex;
    justify-content: center;

    div {
      width: 1rem;
      height: 1rem;
      margin: 2rem 0.3rem;
      background: #0076ee;
      border-radius: 50%;
      animation: 0.9s bounce infinite alternate;

      &:nth-child(2) {
        animation-delay: 0.3s;
      }

      &:nth-child(3) {
        animation-delay: 0.6s;
      }
    }
  }

  @keyframes bounce {
    to {
      opacity: 0.3;
      transform: translate3d(0, -1rem, 0);
    }
  }
`