import styled from "styled-components";

interface IControlsProps {
  isVisible: boolean;
  timerRunning: boolean;
};

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

  button:outline {
    border: none;
  };
`;

export const IncrementAddDecrement =  styled.div<IControlsProps>`
  display: ${({isVisible}) => isVisible ? 'block' : 'none'};
`;

export const PlayAndResetAndMusic = styled.div<IControlsProps>`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;

  img{
    width: 20px;
  }

  .playPause {
    background-color: #326EF0;
    color: white;
    min-width: 30%;
    
  }
  button:nth-child(2) {
    display: ${({isVisible}) => isVisible ? 'block' : 'flex'};
    background-color: rgb(224, 55, 55);
    color: white;
    min-width: 35%;

    img {
      display: ${({timerRunning}) => timerRunning ? 'none' : 'flex'};
    }
    
  }
`;