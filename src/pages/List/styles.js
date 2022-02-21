import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 64px;

  table {
    border-spacing: 0px;
  }

  th {
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

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 70vw;
  margin: auto;
  justify-content: center;
`