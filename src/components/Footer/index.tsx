import { Container } from './styles';
import ProgressBar from '../ProgressBar';

interface IProgressBarProps {
  imgOrGifMufasa: string;
  timePercent: number;
};

export const Footer = (props: IProgressBarProps) => {
  const {imgOrGifMufasa, timePercent} = props;

  return (
    <Container 
      mufasaProgress={timePercent}
    >
    <img src={imgOrGifMufasa} alt="mufasa" />

    <ProgressBar totalCompleted={timePercent} />
  </Container>
  );
};