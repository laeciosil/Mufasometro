import { useEffect, useState } from "react";
import mufasaGif from "../../assets/mufasaGif.gif";
import mufasaImg from "../../assets/mufasa.png";

import ReactPlayer from "react-player";
import ProgressBar from "@ramonak/react-progress-bar";
import {FaPlay, FaPause} from "react-icons/fa";
import {BiReset} from "react-icons/bi";
import {
  Container,
   Minutes, 
   Seconds, 
   Separator, 
   PlayAndReset,
   TimerContainer,
   ControlsContainer,
   ProgressBarContainer,
   IncrementAddDecrement,
  } from './styles';


export const Timer = () => {
  const [secondsAmount, setSecondsAmount] = useState(0);
  const [timePercent, setTimePercent] = useState(0);
  const [percentageForSecond, setPercentageForSecond] = useState(0);
  const [progressBarVisible, setProgressBarVisible] = useState(false);
  const [gifMufasa, setGifMufasa] = useState(mufasaGif);
  const [imgOrGifMufasa, setImgOrGifMufasa] = useState(mufasaGif);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [timerRunning, setTimerRunning] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [PlayPauseButton, setPlayPauseButton] = useState(<FaPlay size={20}/>);
  const [playSoundButton, setPlaySoundButton] = useState({
    title: 'Reproduzir música',
    color: 'green',
  })
  
  useEffect(() => {
    if(timerRunning && secondsAmount > 0) {
      setTimeout(() => {
        setTimePercent((oldState) => oldState + percentageForSecond);
        setSecondsAmount((oldState) => oldState - 1);
      }, 1000);
      return;
    } else if (timerRunning && secondsAmount === 0) {
      console.log('terminou');
      
      setTimerRunning(false); 
      setSecondsAmount(0);
    }
  }, [percentageForSecond, timerRunning, secondsAmount]);


  const handleIncrementMinute = (value: number) => {
    if(secondsAmount === -1){

      setSecondsAmount((oldState) => oldState + (60 * value) + 1);
    } else {

      setSecondsAmount((oldState) => oldState + (60 * value));
    }
    
  };
  
  const handleDecrementMinute = () => {
    if(secondsAmount >= 60) {
      setSecondsAmount(state => state - 60);
    }
  };
  
  const handlePlayPauseTimer = () => {
    if(timerRunning) {
      setTimerRunning(false);
      setPlayPauseButton(<FaPlay size={20}/>);
      setImgOrGifMufasa(mufasaImg);
      
    } else if(secondsAmount > 0) {
      setPlayPauseButton(<FaPause size={20}/>);
      setImgOrGifMufasa(mufasaGif);
      setTimerRunning(true);
      setMusicPlaying(true);
      setProgressBarVisible(true);
      setGifMufasa('')
      setPercentageForSecond(100 / secondsAmount);
      setControlsVisible(false);
      setPlaySoundButton({
        title: 'Pausar música',
        color: 'red',
      })
   }
  };

  const handlePlaySound  = () => {
    if(playSoundButton.color === 'green') {
      setPlaySoundButton({
        title: 'Pausar música',
        color: 'red',
      })
      setMusicPlaying(true);

    } else {
      setPlaySoundButton({
        title: 'Reproduzir música',
        color: 'green',
      })
      setMusicPlaying(false);
    }
  }

  const handleReset = () => {
    setTimerRunning(false);
    setSecondsAmount(0)
    setProgressBarVisible(false)
    setControlsVisible(true);
    setGifMufasa(mufasaGif)
    setMusicPlaying(false)
    setTimePercent(0)
  }

  const minutesAmount = secondsAmount < 0 ? '00' : Math.floor(secondsAmount / 60);
  const seconds = secondsAmount < 0 ? '00' : secondsAmount % 60;
  
  return (
    <Container>
      <h1>Mufazometro</h1>
      <TimerContainer >
        <Minutes>{String(minutesAmount).padStart(2, '0')}</Minutes>
        <Separator>:</Separator>
        <Seconds>{String(seconds).padStart(2, '0')}</Seconds>
      </TimerContainer>
        <ControlsContainer >
          <IncrementAddDecrement isVisible={controlsVisible}>

            <button onClick={() => handleIncrementMinute(1)}> + 1min</button>
            <button onClick={() => handleIncrementMinute(10)}> + 10min</button>
            <button onClick={handleDecrementMinute}> - 1min</button>
          </IncrementAddDecrement>
        <PlayAndReset>
          <button onClick={handlePlayPauseTimer} >
            <img  src={gifMufasa} alt="" />
            {PlayPauseButton}
          </button>
          <button onClick={handleReset}>
            <BiReset size={20} />
          </button>
        </PlayAndReset>
      </ControlsContainer>
      {
        progressBarVisible && (
          <ProgressBarContainer>
           <img width="150px" src={imgOrGifMufasa} alt="mufasa" style={{marginLeft: `${timePercent}%`}} />
           <ProgressBar 
            width="50vw"
            margin="10px"
            completed={timePercent.toFixed(2)}
           />
           <button 
             style={{background: playSoundButton.color}} 
             onClick={handlePlaySound}>
             {playSoundButton.title}
            </button>
          </ProgressBarContainer>
        )
      }
      <ReactPlayer
        style={{display: 'none'}}
       playing={musicPlaying} 
      //  url={'https://youtu.be/U6n2NcJ7rLc?list=RDU6n2NcJ7rLc'}
       />
    </Container>
  ); 
};