import ProgressBarComponent from "@ramonak/react-progress-bar";
import {ProgressBarContainer} from './styles';

interface IProgressBarProps {
  imgOrGifMufasa: string;
  timePercent: number;
};

export const ProgressBar = (props: IProgressBarProps) => {
  const {imgOrGifMufasa, timePercent} = props;

  return (
    <ProgressBarContainer 
      mufasaProgress={timePercent}
    >
    <img src={imgOrGifMufasa} alt="mufasa" />
    <ProgressBarComponent 
      width="75vw"
      margin="10px"
      bgColor="#036b52"
      completed={timePercent}
      customLabel={`${timePercent.toFixed(2)}%`}
    />
    
  </ProgressBarContainer>
  );
};