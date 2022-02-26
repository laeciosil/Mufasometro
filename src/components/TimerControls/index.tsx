import {BiReset} from "react-icons/bi";

import {
  ControlsContainer, 
  IncrementAddDecrement, 
  PlayAndReset
} from './styles';

interface ITimerControlsProps {
  gifMufasa: string;
  controlsVisible: boolean;
  playPauseButton: JSX.Element;
  handleReset: () => void;
  handlePlayPauseTimer: () => void;
  handleDecrementMinute: () => void;
  handleIncrementMinute: (value: number) => void;
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
  } = props;
  return (
    <ControlsContainer >
      <IncrementAddDecrement isVisible={controlsVisible}>
        <button onClick={() => handleIncrementMinute(1)}> + 1min</button>
        <button onClick={() => handleIncrementMinute(10)}> + 10min</button>
        <button onClick={handleDecrementMinute}> - 1min</button>
      </IncrementAddDecrement>
      <PlayAndReset>
        <button onClick={handlePlayPauseTimer} >
          <img  src={gifMufasa} alt="" />
          {playPauseButton}
        </button>
        <button onClick={handleReset}>
          <BiReset size={20} />
        </button>
      </PlayAndReset>
    </ControlsContainer>
  )
};