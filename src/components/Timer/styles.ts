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
  border: 1px solid #fff;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0.25rem;
  margin-bottom: 1rem;
  padding: 1rem;
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

