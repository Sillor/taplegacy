import Upgrades from './Upgrades';
import Clicker from './Clicker';

function Game() {
  return (
    <div className="flex justify-center flex-wrap gap-4">
      <Clicker />
      <Upgrades />
    </div>
  );
}

export default Game;
