import styled from "styled-components";

interface IProgressBarProps {
  mufasaProgress: number;
};

export const ProgressBarContainer = styled.section<IProgressBarProps> `
  display: flex;
  flex-direction: column;
  margin-top: 5rem;

  img {
    margin-left: ${({mufasaProgress}) => mufasaProgress}%;
    width: 150px;
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
    transition: 0.2s;
    filter: brightness(0.8);
  }

  button:outline {
    border: none;
  };
`;