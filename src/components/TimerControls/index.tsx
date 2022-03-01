import { ControlMusic} from "../ControlMusic";
import { FiRefreshCcw } from 'react-icons/fi';

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
  gifMufasaPlayButton: string;
  gifMufasaResetButton: string;
  timerRunning: boolean;
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
    handleIncrementMinute,
    handleDecrementMinute,
    gifMufasaResetButton, 
    handlePlayPauseTimer,
    gifMufasaPlayButton, 
    controlsVisible, 
    playPauseButton,
    controlsMusic,
    timerRunning,
    handleReset,
  } = props;

  const {musicPlaying, handlePlaySound, speakerIcon  } = controlsMusic;

  return (
    <ControlsContainer >
      <IncrementAddDecrement
       isVisible={controlsVisible}
       timerRunning={timerRunning}
       >
        <button onClick={() => handleIncrementMinute(1)}>+ 1min</button>
        <button onClick={() => handleIncrementMinute(10)}>+ 10min</button>
        <button onClick={handleDecrementMinute}> - 1min</button>
      </IncrementAddDecrement>
      <PlayAndResetAndMusic
        isVisible={controlsVisible}
        timerRunning={timerRunning}
      >
        <button className="playPause" onClick={handlePlayPauseTimer} >
          <img  src={gifMufasaPlayButton} alt="" />
          {playPauseButton}
        </button>
        <button onClick={handleReset}>
          <FiRefreshCcw size={20} />
          <img src={gifMufasaResetButton} alt="" />
        </button>
        <ControlMusic
          musicPlaying={musicPlaying}
          handlePlaySound={handlePlaySound}
          speakerIcon={speakerIcon}
        />
      </PlayAndResetAndMusic>
    </ControlsContainer>
  );
};