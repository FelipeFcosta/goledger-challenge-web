import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  
  margin-top: 164px;
  align-items: center;
  gap: 50px;

  #bar {
    position: fixed;
    display: flex;
    flex-direction: row;
    align-items: center;
    
    width: 100%;
    top: 0;
    background-color: white;
    box-shadow: 0 5px 5px #777;

    #logo {
      width: 220px;
      margin-top: 24px;
      margin-bottom: 16px;
      margin-left: 26px;
    }

    a {
      text-decoration: none;
    }
    span {
      color: #0073dd;
      cursor: pointer;
      padding-left: 8px;
      font-weight: 800;
      font-size: 2.1em;
    }
  }
`