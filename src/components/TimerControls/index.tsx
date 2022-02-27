import {BiReset} from "react-icons/bi";
import { ControlMusic} from "../ControlMusic";

import {
  ControlsContainer, 
  IncrementAddDecrement, 
  PlayAndResetAndMusic
} from './styles';

interface IControlMusicProps {
  speakerIcon: JSX.Element;
  musicPlaying: boolean;
  handlePlaySound: () => void;
};

interface ITimerControlsProps {
  gifMufasa: string;
  controlsVisible: boolean;
  playPauseButton: JSX.Element;
  handleReset: () => void;
  handlePlayPauseTimer: () => void;
  handleDecrementMinute: () => void;
  handleIncrementMinute: (value: number) => void; 

  controlsMusic: IControlMusicProps;
}

export const TimerControls = (props: ITimerControlsProps) => {
  const {
    gifMufasa, 
    controlsVisible, 
    handleIncrementMinute,
    handleDecrementMinute,
    handlePlayPauseTimer,
    playPauseButton,
    handleReset,
    controlsMusic,
  } = props;

  const {musicPlaying, handlePlaySound, speakerIcon  } = controlsMusic;

  return (
    <ControlsContainer >
      <IncrementAddDecrement isVisible={controlsVisible}>
        <button onClick={() => handleIncrementMinute(1)}>+ 1min</button>
        <button onClick={() => handleIncrementMinute(10)}>+ 10min</button>
        <button onClick={handleDecrementMinute}> - 1min</button>
      </IncrementAddDecrement>
      <PlayAndResetAndMusic>
        <button className="playPause" onClick={handlePlayPauseTimer} >
          <img  src={gifMufasa} alt="" />
          {playPauseButton}
        </button>
        <button onClick={handleReset}>
          <BiReset size={20} />
        </button>
        <ControlMusic
          musicPlaying={musicPlaying}
          handlePlaySound={handlePlaySound}
          speakerIcon={speakerIcon}
        />
      </PlayAndResetAndMusic>
    </ControlsContainer>
  )
};