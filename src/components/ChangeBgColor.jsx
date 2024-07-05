import React, { useState, useRef } from 'react';

const ChangeBgColor = () => {
  const [intervalId, setIntervalId] = useState(null);
  const intervalRef = useRef(null); // useRef for holding interval reference

  const randomColor = () => {
    const hex = "0123456789ABCDEF";
    let color = "#";
  
    for (let i = 0; i < 6; i++) {
      color = color + hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const startChangingColor = () => {
    if (!intervalId) {
      const id = setInterval(() => {
        document.body.style.backgroundColor = randomColor();
      }, 1000);
      setIntervalId(id); // Store interval id in state
      intervalRef.current = id; // Store interval id in ref for cleanup
    }
  };

  const stopChangingColor = () => {
    clearInterval(intervalRef.current); // Clear interval using ref
    setIntervalId(null); // Clear interval id from state
  };

  return (
    <div>
      <button id="start" onClick={startChangingColor}>Start</button>
      <button id="stop" onClick={stopChangingColor}>Stop</button>
    </div>
  );
};

export default ChangeBgColor;
