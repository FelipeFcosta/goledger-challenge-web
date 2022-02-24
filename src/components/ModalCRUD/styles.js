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

  .dependent {
    margin-bottom: 8px;
  }

  #warning {
    font-weight: 500;
    text-transform: uppercase;
  }

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

    #cancel-btn {
      background: transparent;
    }

    #delete-btn {
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

export const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 72px;
  margin-inline: 16px;

  font-family: 'Montserrat';

  // remove input(type='number') arrows
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] {
    -moz-appearance: textfield;
  }
  ////////////////////////////////////

  label {
    font-size: 0.9em;
    font-weight: 500;
  }

  input {
    border: none;
    border:solid 1px #aaa;
    border-radius: 8px;
    padding: 0.5em;
    font-size: 1em;
    font-family: 'Montserrat';

    :focus {
      outline: none;
    }
  }

  textarea {
    font-family: 'Montserrat';
    font-size: 0.95em;
    resize: none;
    border: none;
    border:solid 1px #aaa;
    outline: none;
    color: black;
    font-weight: 400;
    height: 100px;
  }

  .input-div {
    display:flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 16px;
  }

  #options {
    position: absolute;
    bottom: 16px;
    right: 16px;

    display: flex;
    flex-direction: row;
    gap: 8px;

    #invalid-fields-message {
      visibility: hidden;
      align-self: center;
      font-size: 0.9em;
      color: #f00c;
    }

    button {
      cursor: pointer;
      border: none;
      font-size: 1em;
    }

    #cancel-btn {
      background: transparent;
    }

    #save-btn {
      background: #0084ff;
      color: white;
      font-weight: 500;
      padding: 12px;
      border-radius: 12px;

      :hover {
        background: #0073ee;
      }
    }
  }
`