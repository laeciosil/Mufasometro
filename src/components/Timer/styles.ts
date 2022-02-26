import styled from "styled-components";

export const Container = styled.section `
  align-items: center;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 3rem;
    color: #fff;
    margin-bottom: 1rem;
  }
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

  button:hover {
    transition: 0.2s;
    filter: brightness(0.8);
  }

`;

export const PlayAndReset = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;

  img{
    width: 20px;
  }

  button:first-child {
    background-color: blue;
    color: white;
    width: 45%;
  }
  button:last-child {
    background-color: red;
    color: white;
    width: 45%;
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