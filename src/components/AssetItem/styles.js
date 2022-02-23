import styled from 'styled-components';

export const Tr = styled.tr`
  font-family: Montserrat;
  font-weight: 500;
  color: #222;

  :hover {
    background: #00000020;
  }
  
  td {
    cursor:default;
    padding: 16px 128px;
    padding-left: 0;
  }

  #id {
    padding-right: 16px;
    padding-left: 16px;
    font-weight: 300;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  #dropdown {
    padding-right: 16px;
    padding-left: 0px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    span {
      cursor: pointer;
    }
  }
`