import styled from 'styled-components';

export const Tr = styled.tr`
  cursor:pointer;

  font-family: Montserrat;
  font-weight: 500;
  color: #222;

  :hover {
    background: #EEEFEFAA;
  }
  
  td {
    padding: 16px 128px;
    padding-left: 0;
  }

  #id {
    padding-right: 16px;
    padding-left: 8px;
    font-weight: 300;
  }
`