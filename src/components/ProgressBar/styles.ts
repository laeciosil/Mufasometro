import styled from "styled-components";

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