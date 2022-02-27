import ReactPlayer from "react-player";
import { Container, PlayPauseButton } from "./styles";

export type IPlaySoundButton ={
  title: string;
}

export interface IControlMusicProps {
  musicPlaying: boolean;
  speakerIcon: JSX.Element;
  handlePlaySound: () => void;
};

export const ControlMusic = (props: IControlMusicProps) => {

  const {speakerIcon, handlePlaySound, musicPlaying} = props;

  return (
    <Container>
      <PlayPauseButton
        isPlaying={musicPlaying}
        onClick={handlePlaySound}>
        {speakerIcon}
      </PlayPauseButton>

      <ReactPlayer
      style={{display: 'none'}}
      playing={musicPlaying} 
      url={'https://youtu.be/U6n2NcJ7rLc?list=RDU6n2NcJ7rLc'}
      />
    </Container>
  );
};