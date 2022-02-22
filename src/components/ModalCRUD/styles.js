import styled from 'styled-components';


export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  padding: 16px;

  #back {
    display: block;
    position: absolute;
    top: 20px;
    left: 20px;
    cursor: pointer;
    width: 16px;
    height: 16px;
    border-top: 3px solid #666;
    border-left: 3px solid #666;
    transform: scale(1, 0.8) rotate(-45deg);
  }

  .label {
    color: #777;
    font-size: 0.9em;  
  }

  .attr {
    font-family: 'Montserrat';
    font-weight: 500;
    margin-bottom: 16px;
  }

  #description {
    font-size: 0.95em;
  }

  #key {
    color: #666;
    font-size: 0.8em;
    margin-bottom: 0px;
  }

  #explicit {
    font-size: 0.8em;
    color: #222;
  }

`

