import styled from "styled-components";
interface IProgressBarProps {
  totalCompleted: number;
};

export const Container = styled.div`
  background-color: #bbb;
  border-radius: 1rem;
  width: 75vw;
`;

export const Content = styled.div<IProgressBarProps>`
  display: flex;
  max-height: 1.2rem;
  border-radius: 1rem;
  justify-content: end;
  align-items: center;
  width: ${({ totalCompleted }) => totalCompleted}%;
  height: 30px;
  background-color: #036b52;

  span {
    color: white;
    font-weight: bold;
    margin-left: ${({ totalCompleted }) => totalCompleted}%;
    margin-right: 1rem;
  }
`;
