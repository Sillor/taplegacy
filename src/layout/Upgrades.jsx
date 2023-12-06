import Upgrade from '../components/Upgrade';

function Upgrades() {
  return (
    <div className="md:max-w-sm lg:max-w-lg md:h-[80vh] overflow-y-auto p-4 h-full w-full bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border-2 border-white no-scrollbar">
      <h1 className="font-bold text-xl pb-2">Upgrades</h1>
      <Upgrade
        name={'Basic Upgrade'}
        desc={'+3 Taps per Second'}
        price={'10'}
        styles={{
          bg: 'bg-green-400',
          border: 'border-green-400',
          text: 'text-green-400',
        }}
      />
      <Upgrade
        name={'Rare Upgrade'}
        desc={'+10 Taps per Second'}
        price={'500'}
        styles={{
          bg: 'bg-blue-400',
          border: 'border-blue-400',
          text: 'text-blue-400',
        }}
      />
      <Upgrade
        name={'Epic Upgrade'}
        desc={'+50 Taps per Second'}
        price={'10k'}
        styles={{
          bg: 'bg-purple-400',
          border: 'border-purple-400',
          text: 'text-purple-400',
        }}
      />
      <Upgrade
        name={'Legendary Upgrade'}
        desc={'+1k Taps per Second'}
        price={'50k'}
        styles={{
          bg: 'bg-orange-400',
          border: 'border-orange-400',
          text: 'text-orange-400',
        }}
      />
      <Upgrade
        name={'Mythic Upgrade'}
        desc={'+5k Taps per Second'}
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
