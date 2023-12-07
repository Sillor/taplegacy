import React from 'react';
import Upgrades from './Upgrades';
import Clicker from './Clicker';

function Game() {
  const [taps, setTaps] = React.useState(0);

  const [seconds, setSeconds] = React.useState(0);
  const [clicks, setClicks] = React.useState(0);
  const [cps, setCPS] = React.useState(0);

  function addTaps() {
    setTaps((oldTaps) => (oldTaps += 1));
    setClicks((oldClicks) => (oldClicks += 1));
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((oldSeconds) => oldSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    if (seconds >= 2) {
      setCPS(clicks / seconds);
      setSeconds(0);
      setClicks(0);
    }
    // console.log(`S: ${seconds}\tC: ${clicks}\tCPS: ${cps}\t`);
  }, [seconds, clicks, cps]);

  return (
    <div className="flex justify-center flex-wrap gap-4">
      <Clicker taps={taps} addTaps={addTaps} cps={cps} />
      <Upgrades />
    </div>
  );
}

export default Game;
