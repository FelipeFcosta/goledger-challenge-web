import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  transform: translateX(-86px);
`

export const DropMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  
  border-radius: 4px;
  background: white;
  color: black;
  font-family: 'Montserrat';

  padding: 2px;
  
  top: 5px;
  width: 100px;

  div {
    cursor: pointer;

    padding: 16px;
    border-radius: 2px;
    :hover {
      background: #eee;
    }

  }
`