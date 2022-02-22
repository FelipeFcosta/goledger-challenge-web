import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: var(--nav-size);
  top: 0;
  bottom: 0;
  background: white;
  position: fixed;
  box-shadow: 0 0 10px #000;
  z-index: 1;
  
  .nav-link {
    text-align: center;
    width: 100%;
    color: #666;
    font-family: 'Montserrat';
    font-weight: 600;
    padding: 16px 0px;
    text-decoration: none;

    :hover {
      color: black;
    }
  }
`

export const Logo = styled.img`
  padding-top: 32px;
  width: calc(var(--nav-size) - 40px);
`