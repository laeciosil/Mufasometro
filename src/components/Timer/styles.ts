import styled from "styled-components";

interface IControlsProps {
  isVisible: boolean;
};

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

export const ControlsContainer = styled.section `

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

export const IncrementAddDecrement =  styled.div<IControlsProps>`
  display: ${({isVisible}) => isVisible ? 'block' : 'none'};
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

