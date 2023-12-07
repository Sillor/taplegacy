import React, { useState, useEffect } from 'react';
import Upgrades from './Upgrades';
import Clicker from './Clicker';

function Game() {
  const [seconds, setSeconds] = useState(0);
  const [clicks, setClicks] = useState(0);
  const [countedCps, setCountedCps] = useState(0);
  const [perSec, setPerSec] = useState(0);
  const [userData, setUserData] = useState({
    taps: 0,
    upgrades: { basic: 0, rare: 0, epic: 0, legendary: 0, mythic: 0 },
  });

  const updateLocalStorage = () => {
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const addTaps = (amount) => {
    setUserData((oldUserData) => ({
      ...oldUserData,
      taps: oldUserData.taps + amount,
    }));
    updateLocalStorage();
    setClicks((oldClicks) => oldClicks + amount);
  };

  const upgradeClicks = (amount, name, price) => {
    if (price <= userData.taps) {
      if (userData.upgrades[name] > 0) {
        alert('You already have this upgrade!');
      } else {
        setUserData((oldUserData) => ({
          ...oldUserData,
          upgrades: {
            ...oldUserData.upgrades,
            [name]: amount,
          },
        }));
        setUserData((oldUserData) => ({
          ...oldUserData,
          taps: oldUserData.taps - price,
        }));
        updateLocalStorage();
      }
    } else {
      alert('Not enough taps!');
    }
  };

  useEffect(() => {
    let total = 0;
    Object.values(userData.upgrades).forEach((val) => (total += val));
    setPerSec(total);
  }, [userData]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((oldSeconds) => oldSeconds + 1);
    }, 1000);

    if (localStorage.getItem('user'))
      setUserData(JSON.parse(localStorage.getItem('user')));
    else localStorage.setItem('user', JSON.stringify(userData));

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (seconds >= 1) {
      setCountedCps((clicks / seconds).toFixed(2));
      setSeconds(0);
      setClicks(0);
      addTaps(perSec);
    }
    // console.log(`S: ${seconds}\tC: ${clicks}\tCPS: ${cps}\t`);
  }, [seconds, clicks]);

  return (
    <div className="flex justify-center flex-wrap gap-4">
      <Clicker taps={userData.taps} addTaps={addTaps} countedCps={countedCps} />
      <Upgrades upgradeClicks={upgradeClicks} userData={userData} />
    </div>
  );
}

export default Game;
