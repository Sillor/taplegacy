import Upgrade from '../components/Upgrade';

function Upgrades({ upgradeClicks, userData }) {
  const upgrades = [
    {
      name: 'basic',
      price: 10,
      increase: 3,
      color: 'green',
    },
    {
      name: 'rare',
      price: 100,
      increase: 10,
      color: 'blue',
    },
    {
      name: 'epic',
      price: 100,
      increase: 100,
      color: 'purple',
    },
    {
      name: 'legendary ',
      price: 1000,
      increase: 1000,
      color: 'orange',
    },
    {
      name: 'mythic',
      price: 10000,
      increase: 9999,
      color: 'pink',
    },
  ];

  const upgElems = upgrades.map((upg) => (
    <Upgrade
      userData={userData}
      upgradeClicks={upgradeClicks}
      name={upg.name}
      price={upg.price}
      increase={upg.increase}
      styles={{
        bg: `bg-${upg.color}-400`,
        border: `border-${upg.color}-400`,
        text: `text-${upg.color}-400`,
      }}
    />
  ));

  return (
    <div className="md:max-w-sm lg:max-w-lg md:h-[80vh] overflow-y-auto p-4 h-full w-full bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border-2 border-white no-scrollbar">
      <h1 className="font-bold text-xl pb-2">Upgrades</h1>
      {upgElems}
    </div>
  );
}

export default Upgrades;
