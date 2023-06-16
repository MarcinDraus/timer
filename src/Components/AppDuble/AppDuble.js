
import React, { useState, useEffect } from 'react';
import FormattedTime from '../FormattedTime/FormattedTime';
import Button from '../Button/Button';

const AppDuble = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const startTimer = () => {
    if (!intervalId) {
      const id = setInterval(() => {
        setCurrentTime((prevTime) => prevTime + 1);
      }, 1);
      setIntervalId(id);
    }
  };

  const stopTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const resetTimer = () => {
    setCurrentTime(0);
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <FormattedTime time={currentTime} />
      <div>
        <Button onClick={startTimer}>Start</Button>
        <Button onClick={stopTimer}>Stop</Button>
        <Button onClick={resetTimer}>Reset</Button>
      </div>
    </div>
  );
};

export default AppDuble;
