import React, { useState, useEffect } from 'react';
import Upgrades from './Upgrades';
import Clicker from './Clicker';

function Game() {
  const [taps, setTaps] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [clicks, setClicks] = useState(0);
  const [cps, setCPS] = useState(0);

  const addTaps = () => {
    setTaps((oldTaps) => oldTaps + 1);
    setClicks((oldClicks) => oldClicks + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((oldSeconds) => oldSeconds + 0.1);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (seconds >= 1) {
      setCPS((clicks / seconds).toFixed(2));
      setSeconds(0);
      setClicks(0);
    }
    // console.log(`S: ${seconds}\tC: ${clicks}\tCPS: ${cps}\t`);
  }, [seconds, clicks]);

  return (
    <div className="flex justify-center flex-wrap gap-4">
      <Clicker taps={taps} addTaps={addTaps} cps={cps} />
      <Upgrades />
    </div>
  );
}

export default Game;
