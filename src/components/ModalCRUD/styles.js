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

export const DeleteContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 72px;

  font-family: 'Montserrat';

  span {
    font-weight: 500;
  }

  #options {
    position: absolute;
    bottom: 16px;
    right: 16px;

    display: flex;
    flex-direction: row;
    gap: 8px;

    button {
      cursor: pointer;
      border: none;
      font-size: 1em;
    }

    #cancel {
      background: transparent;
    }

    #delete {
      background: #f22;
      color: white;
      font-weight: 500;
      padding: 12px;
      border-radius: 12px;

      :hover {
        background: #e10;
      }
    }
  }
`

