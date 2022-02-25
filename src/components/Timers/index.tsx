import { useEffect, useState } from "react";
import mufasaGif from "../../assets/mufasaGif.gif";
import ReactPlayer from "react-player";
import {
  Container,
   Minutes, 
   Seconds, 
   Separator, 
   TimerContainer,
   Controls,
   ProgressBarContainer
  } from './styles';

import ProgressBar from "@ramonak/react-progress-bar";

export const Timer = () => {
  const [secondsAmount, setSecondsAmount] = useState(0);
  const [count, setCount] = useState(0);
  const [timePercent, setTimePercent] = useState(0);
  const [initialTime, setInitialTime] = useState(0);
  const [progressBarVisible, setProgressBarVisible] = useState(false);
  const [playSoundButton, setPlaySoundButton] = useState({
    title: 'Play música',
    color: 'green',
    playing: false,
  })
  
  useEffect(() => {
    if(count > 0) {
      setTimeout(() => {
        setSecondsAmount(state => state - 1);
        setCount(state => state - 1);
        setTimePercent(state => state + initialTime);
      }, 1000);
      return;
    }  
    setSecondsAmount(0);
    
  
  }, [count, initialTime]);

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
    setInitialTime(100 / secondsAmount);
    setPlaySoundButton({
      title: 'Pausar música',
      color: 'red',
      playing: true,
    })
   }
  };

  const handlePlaySound  = () => {
    if(playSoundButton.color === 'green') {
      setPlaySoundButton({
        title: 'Pausar música',
        color: 'red',
        playing: true,
      })

    } else {
      setPlaySoundButton({
        title: 'Play música',
        color: 'green',
        playing: false,
      })
    }
  }

  const handleReset = () => {
    setSecondsAmount(0)
    setTimePercent(0)
    setCount(0)
  }

  const minutesAmount = Math.floor(secondsAmount / 60);
  const seconds = secondsAmount % 60;
  
  return (
    <Container>
      <TimerContainer >

      <Minutes>{String(minutesAmount).padStart(2, '0')}</Minutes>
      <Separator>:</Separator>
      <Seconds>{String(seconds).padStart(2, '0')}</Seconds>
      </TimerContainer>
      <Controls>
        <button onClick={() => handleIncrementMinute(1)}> + 1min</button>
        <button onClick={() => handleIncrementMinute(10)}> + 10min</button>
        <button onClick={handleDecrementMinute}> - 1min</button>
        <button onClick={handlePlay}> play</button>
        <button onClick={handleReset}>Reset</button>
      </Controls>
      {
        progressBarVisible && (
          <ProgressBarContainer>
           <img width="100px" src={mufasaGif} alt="" style={{marginLeft: `${timePercent}%`}} />
           <ProgressBar 
            width="50vw"
            margin="10px"
            completed={timePercent.toFixed(2)}
           />
           <button style={{background: playSoundButton.color}} onClick={handlePlaySound}>{playSoundButton.title}</button>
          </ProgressBarContainer>
        )
      }
      <ReactPlayer
        style={{display: 'none'}}
       playing={playSoundButton.playing} 
       url={'https://youtu.be/U6n2NcJ7rLc?list=RDU6n2NcJ7rLc'}/>
    </Container>
  ); 
};