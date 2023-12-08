import React, { useEffect } from 'react';
import Upgrades from './Upgrades';
import Clicker from './Clicker';

function Game({
  userData,
  setUserData,
  countedCps,
  setPerSec,
  addTaps,
  updateLocalStorage,
}) {
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

  return (
    <div className="flex justify-center flex-wrap gap-4">
      <Clicker taps={userData.taps} addTaps={addTaps} countedCps={countedCps} />
      <Upgrades upgradeClicks={upgradeClicks} userData={userData} />
    </div>
  );
}

export default Game;
