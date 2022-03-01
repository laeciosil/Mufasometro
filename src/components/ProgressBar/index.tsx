import ProgressBarComponent from "@ramonak/react-progress-bar";
import { Container } from './styles';

interface IProgressBarProps {
  imgOrGifMufasa: string;
  timePercent: number;
};

export const ProgressBar = (props: IProgressBarProps) => {
  const {imgOrGifMufasa, timePercent} = props;

  return (
    <Container 
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
  </Container>
  );
};