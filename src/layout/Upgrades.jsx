import Upgrade from '../components/Upgrade';

function Upgrades({ upgradeClicks }) {
  return (
    <div className="md:max-w-sm lg:max-w-lg md:h-[80vh] overflow-y-auto p-4 h-full w-full bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border-2 border-white no-scrollbar">
      <h1 className="font-bold text-xl pb-2">Upgrades</h1>
      <Upgrade
        upgradeClicks={upgradeClicks}
        name={'basic'}
        price={'10'}
        increase={3}
        styles={{
          bg: 'bg-green-400',
          border: 'border-green-400',
          text: 'text-green-400',
        }}
      />
      <Upgrade
        upgradeClicks={upgradeClicks}
        name={'rare'}
        increase={10}
        price={'500'}
        styles={{
          bg: 'bg-blue-400',
          border: 'border-blue-400',
          text: 'text-blue-400',
        }}
      />
      <Upgrade
        upgradeClicks={upgradeClicks}
        name={'epic'}
        increase={50}
        price={'10k'}
        styles={{
          bg: 'bg-purple-400',
          border: 'border-purple-400',
          text: 'text-purple-400',
        }}
      />
      <Upgrade
        upgradeClicks={upgradeClicks}
        name={'legendary'}
        increase={1000}
        price={'50k'}
        styles={{
          bg: 'bg-orange-400',
          border: 'border-orange-400',
          text: 'text-orange-400',
        }}
      />
      <Upgrade
        upgradeClicks={upgradeClicks}
        name={'mythic'}
        increase={5000}
        price={'250k'}
        styles={{
          bg: 'bg-pink-400',
          border: 'border-pink-400',
          text: 'text-pink-400',
        }}
      />
    </div>
  );
}

export default Upgrades;
