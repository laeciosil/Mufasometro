import styled from "styled-components";

interface IPlayPauseButtonProps {
  isPlaying: boolean;
}

export const Container = styled.div``;

export const PlayPauseButton = styled.button<IPlayPauseButtonProps>`
  background-color: ${({isPlaying}) => isPlaying ? 
    'rgb(45, 110, 61)' : 'rgb(207, 75, 57)'};
`;