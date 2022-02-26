import ProgressBarComponent from "@ramonak/react-progress-bar";
import {ProgressBarContainer} from './styles';

interface IProgressBarProps {
  imgOrGifMufasa: string;
  timePercent: number;
  playSoundButton: {
    color: string;
    title: string;
  };
  
  handlePlaySound: () => void;
};

export const ProgressBar = (props: IProgressBarProps) => {
  const {imgOrGifMufasa, timePercent, handlePlaySound, playSoundButton} = props;

  return (
    <ProgressBarContainer 
      mufasaProgress={timePercent}
    >
    <img src={imgOrGifMufasa} alt="mufasa" />
    <ProgressBarComponent 
      width="50vw"
      margin="10px"
      bgColor="#036b52"
      completed={timePercent}
      customLabel={`${timePercent.toFixed(2)}%`}
    />
    <button 
      style={{background: playSoundButton.color}} 
      onClick={handlePlaySound}>
      {playSoundButton.title}
    </button>
  </ProgressBarContainer>
  );
};