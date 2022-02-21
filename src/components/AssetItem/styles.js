import styled from 'styled-components';

export const Tr = styled.tr`
  font-family: Montserrat;
  font-weight: 500;
  color: #222;

  :hover {
    background: #EEEFEFCC;
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
  }

  .last {
    padding-right: 16px;
  }
`