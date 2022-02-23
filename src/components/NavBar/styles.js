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
  z-index: 3;

  .nav-logo {
    margin-bottom: 32px;
  }
  
  .nav-link {
    text-align: center;
    width: 100%;
    color: #666;
    font-family: 'Montserrat';
    font-weight: 600;
    padding: 16px 0px;
    text-decoration: none;

    :hover {
      color: #005588;
    }
  }

  .add-div {
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 0px;
    text-align: center;
    border-radius: 16px;

    margin-top: 32px;
    cursor:pointer;
    color: black;

    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 1.2em;
    margin-inline: 16px;
    border:none;
    background: #0073cc;
    color: white;
    padding: 0;

    box-shadow: 0 0 5px #666;

    div {
      display:inline-block;
      text-align: center;
    }

    #plus {
      align-self: center;
      border-top-left-radius: 16px;
      border-bottom-left-radius: 16px;
      font-size: 2.9em;
      font-weight: 400;
      color: #0084ff;
      background: #334;
      max-width: 50px;
      min-width: 50px;
    }

    #add {
      padding-inline: 8px;
      align-self: center;
    }

    :hover {
      background: #0084cc;
      #plus {
        color: #11aacc;
      }
    }
  }


`

export const Logo = styled.img`
  padding-top: 32px;
  width: calc(var(--nav-size) - 40px);
`