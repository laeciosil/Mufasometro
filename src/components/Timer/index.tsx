import { useEffect, useState } from "react";
import mufasaGif from "../../assets/mufasaGif.gif";
import ReactPlayer from "react-player";
import ProgressBar from "@ramonak/react-progress-bar";
import {FaPlay} from "react-icons/fa";
import {BiReset} from "react-icons/bi";
import {
  Container,
   Minutes, 
   Seconds, 
   Separator, 
   TimerContainer,
   Controls,
   ProgressBarContainer,
   PlayAndReset,
  } from './styles';


export const Timer = () => {
  const [secondsAmount, setSecondsAmount] = useState(0);
  const [count, setCount] = useState(0);
  const [timePercent, setTimePercent] = useState(0);
  const [percentForSecond, setPercentForSecond] = useState(0);
  const [progressBarVisible, setProgressBarVisible] = useState(false);
  const [gifMufasa, setGifMufasa] = useState(mufasaGif);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [playSoundButton, setPlaySoundButton] = useState({
    title: 'Reproduzir música',
    color: 'green',
  })
  
  useEffect(() => {
    if(count > 0) {
      
      setTimeout(() => {
        setSecondsAmount(state => state - 1);
        setCount(state => state - 1);
        setTimePercent(state => state + percentForSecond);
      }, 1000);
      return;
    }  
    setSecondsAmount(0);
    
  
  }, [count, percentForSecond]);

  const handleIncrementMinute = (value: number) => {
   
    setSecondsAmount((state) => state + (60 * value));
   
  };
  
  const handleDecrementMinute = () => {
    if(secondsAmount >= 60) {
      setSecondsAmount(state => state - 60);
    }
  };
  
  const handlePlay = () => {
   if(secondsAmount >= 60) {
    setCount(secondsAmount);
    setProgressBarVisible(true);
    setPercentForSecond(100 / secondsAmount);
    setGifMufasa('')
    setMusicPlaying(true);
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
    setProgressBarVisible(false)
    setGifMufasa(mufasaGif)
    setMusicPlaying(false)
    setSecondsAmount(0)
    setTimePercent(0)
    setCount(0)
  }

  const minutesAmount = Math.floor(secondsAmount / 60);
  const seconds = secondsAmount % 60;
  
  return (
    <Container>
      <h1>Mufazometro</h1>
      <TimerContainer >
        <Minutes>{String(minutesAmount).padStart(2, '0')}</Minutes>
        <Separator>:</Separator>
        <Seconds>{String(seconds).padStart(2, '0')}</Seconds>
      </TimerContainer>
        <Controls>
        <button onClick={() => handleIncrementMinute(1)}> + 1min</button>
        <button onClick={() => handleIncrementMinute(10)}> + 10min</button>
        <button onClick={handleDecrementMinute}> - 1min</button>
        <PlayAndReset>
          <button onClick={handlePlay} >
            <img  src={gifMufasa} alt="" />
            <FaPlay size={20} />
          </button>
          <button onClick={handleReset}>
            <BiReset size={20} />
          </button>
        </PlayAndReset>
      </Controls>
      {
        progressBarVisible && (
          <ProgressBarContainer>
           <img width="100px" src={mufasaGif} alt="mufasa" style={{marginLeft: `${timePercent}%`}} />
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
       url={'https://youtu.be/U6n2NcJ7rLc?list=RDU6n2NcJ7rLc'}/>
    </Container>
  ); 
};