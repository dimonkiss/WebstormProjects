import React, { useState, useEffect } from 'react';
import './App.css';
import UserTable from "./UserTable";

const TimerApp = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleStop = () => {
    setIsActive(false);
    setSeconds(0);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeconds(parseInt(e.target.value, 10));
  };

  return (
      <div className="App">
        <h1>Таймер</h1>
        <div>
          <input
              type="number"
              value={seconds}
              onChange={handleChange}
              placeholder="Введіть кількість секунд"
          />
          <button onClick={handleStart}>Старт</button>
          <button onClick={handlePause}>Пауза</button>
          <button onClick={handleStop}>Стоп</button>
        </div>
        <p>Залишилося секунд: {seconds}</p>
        <UserTable />
      </div>
  );
};

export default TimerApp;
