import React, { useState, useEffect } from 'react';
import rocketImage from './assets/timer_rocket.svg'; // Add the import statement for your rocket image
import './Rocket.css'

function Rocket({ position, maxFly }) {
  const [percent, setPercent] = useState(0); // Start at 0%
  const [animationStarted, setAnimationStarted] = useState(false);

  const handleClick = () => {
    setAnimationStarted(true);
  };

  useEffect(() => {
    if (animationStarted) {
      const step = 1;
      // Calculate the maximum point based on the page width
      const maxPoint = (window.innerWidth / 100) * maxFly;

      const interval = setInterval(() => {
        if (percent < maxPoint) {
          setPercent((prevPercent) => prevPercent + step);
        } else {
          clearInterval(interval);
        }
      }, step);

      return () => clearInterval(interval);
    }
  }, [animationStarted]);

  const getTransform = () => {
    return `translateY(-${percent}px)`; // Use pixels instead of percentages
  };

  return (
    <>
      <div className={`Rocket Rocket-${position}`} style={{ transform: getTransform() }}>
        <img src={rocketImage} alt="Rocket" />
      </div>

      <button onClick={handleClick}>Launch</button>
    </>
  );
}

export default Rocket;
