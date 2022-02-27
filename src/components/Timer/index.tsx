import { useEffect, useState } from "react";
import { ProgressBar } from "../ProgressBar";
import {FaPlay, FaPause} from "react-icons/fa";
import {GiSpeaker, GiSpeakerOff} from "react-icons/gi";
import mufasaGif from "../../assets/mufasaGif.gif";
import mufasaImg from "../../assets/mufasaImg.png";

import {
  Container,
  Minutes, 
  Seconds, 
  Separator, 
  TimerContainer,
} from './styles';

import { TimerControls } from "../TimerControls";

export const Timer = () => {
  const [playPauseButton, setPlayPauseButton] = useState(<FaPlay size={20}/>);
  const [progressBarVisible, setProgressBarVisible] = useState(false);
  const [percentageForSecond, setPercentageForSecond] = useState(0);
  const [imgOrGifMufasa, setImgOrGifMufasa] = useState(mufasaGif);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [timerRunning, setTimerRunning] = useState(false);
  const [secondsAmount, setSecondsAmount] = useState(0);
  const [gifMufasa, setGifMufasa] = useState(mufasaGif);
  const [timePercent, setTimePercent] = useState(0);
  const [initialTime, setInitialTime] = useState(0);
  const [speakerIcon, setSpeakerIcon] = useState(<GiSpeakerOff size={20} color="white"/>);
  
  useEffect(() => {
    if(timerRunning && secondsAmount > 0) {
      setTimeout(() => {
        setTimePercent((oldState) => oldState + percentageForSecond);
        setSecondsAmount((oldState) => oldState - 1);
      }, 1000);
      return;
    } else if (timerRunning && secondsAmount === 0) {
      setImgOrGifMufasa(mufasaImg);
      setTimerRunning(false);
      setSecondsAmount(0);
    }
  }, [percentageForSecond, timerRunning, secondsAmount]);


  const handleIncrementMinute = (value: number) => {
    if(secondsAmount === -1){
      setSecondsAmount((oldState) => oldState + (60 * value) + 1);
      setInitialTime((oldState) => oldState + (60 * value));
      setTimePercent(0);
    } else {
      setSecondsAmount((oldState) => oldState + (60 * value));
      setInitialTime((oldState) => oldState + (60 * value));
    }
  };
  
  const handleDecrementMinute = () => {
    if(secondsAmount >= 60) {
      setSecondsAmount(state => state - 60);
    }
  };
  
  const handlePlayPauseTimer = () => {
    if(secondsAmount === initialTime){
      setSpeakerIcon(<GiSpeaker size={20} color="white"/>);
      setPercentageForSecond(100 / initialTime);
      setPlayPauseButton(<FaPause size={20}/>);
      setImgOrGifMufasa(mufasaGif);
      setProgressBarVisible(true);
      setControlsVisible(false);
      setTimerRunning(true);
      setMusicPlaying(true);
      setGifMufasa('');
      
    } else if(timerRunning) {
      setPlayPauseButton(<FaPlay size={20}/>);
      setImgOrGifMufasa(mufasaImg);
      setTimerRunning(false);
      
    } else if(secondsAmount > 0) {
      setPlayPauseButton(<FaPause size={20}/>);
      setImgOrGifMufasa(mufasaGif);
      setProgressBarVisible(true);
      setControlsVisible(false);
      setTimerRunning(true);
      setGifMufasa('')
   } 
  };

  const handlePlaySound  = () => {
    if(musicPlaying) {
      setSpeakerIcon(<GiSpeakerOff size={20} color="white"/>);
      setMusicPlaying(false);

    } else {
      setSpeakerIcon(<GiSpeaker size={20} color="white"/>);
      setMusicPlaying(true);
    }
  }

  const handleReset = () => {
    setPlayPauseButton(<FaPlay size={20}/>);
    setProgressBarVisible(false);
    setControlsVisible(true);
    setGifMufasa(mufasaGif);
    setTimerRunning(false);
    setSecondsAmount(0);
    setTimePercent(0);
    setInitialTime(0);
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
      <TimerControls 
        handleIncrementMinute={handleIncrementMinute}
        handleDecrementMinute={handleDecrementMinute}
        handlePlayPauseTimer={handlePlayPauseTimer}
        playPauseButton={playPauseButton}
        controlsVisible={controlsVisible}
        handleReset={handleReset}
        gifMufasa={gifMufasa}

       controlsMusic={{handlePlaySound, speakerIcon, musicPlaying}}
      />
        
      {
        progressBarVisible && 
         (
            <ProgressBar
              imgOrGifMufasa={imgOrGifMufasa}
              timePercent={timePercent}
            />
         )
      }
    </Container>
  ); 
};