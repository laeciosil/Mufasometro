import styled from "styled-components";

export const Container = styled.section `
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
`;

export const TimerContainer = styled.section `
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
  padding: 1rem;
`;

export const Controls = styled.section `
  button {
    border: none;
    border-radius: 0.25rem;
    margin-right: 0.50rem;
    padding: 1rem;
  }

   
  button:nth-child(4){
    background-color: blue;
    color: white;
  }

  button:last-child {
    background-color: red;
    color: white;
  }

  button:hover {
    transition: 0.2s;
    filter: brightness(0.8);
  }

`;


export const Minutes = styled.span `
  
  border-radius: 0.25rem;
  color: white;
  font-size: 5rem;
  max-height: 10vh;
  padding: 0.25rem;
  
  `;

export const Seconds = styled.span `
  
  border-radius: 0.25rem;
  color: white;
  font-size: 5rem;
  max-height: 10vh;
  padding: 0.25rem;
`;

export const Separator = styled.span `
    color: white;
    font-size: 5rem;
  
`;

export const ProgressBarContainer = styled.section `
  display: flex;
  flex-direction: column;

  img {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  button {
    border: none;
    border-radius: 0.25rem;
    color: white;
    margin-top: 1rem;
    padding: 0.7rem;
  }

  button:hover {
    transition: 0ms.2s;
    filter: brightness(0.8);
  }
`;