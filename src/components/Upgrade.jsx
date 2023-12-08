function Upgrade({ name, price, styles, upgradeClicks, increase, userData }) {
  const isUpgradeBought = userData.upgrades[name] > 0;

  return (
    (userData.taps > price / 3 || isUpgradeBought) && (
      <div
        className={`mt-2 p-4 upgrade h-full w-full ${styles.bg} rounded-md bg-opacity-10 border ${styles.border} max-h-28`}
      >
        <h1 className={`font-bold text-md ${styles.text}`}>
          {name[0].toUpperCase() + name.slice(1)} Upgrade
        </h1>
        <p className="text-sm font-light mb-2 italic">
          +{increase.toLocaleString()} Taps per Second
        </p>
        <div className="flex justify-between items-center">
          <p className="text-sm font-bold">
            Price:{' '}
            <span className={`${styles.text} font-normal`}>
              {price.toLocaleString()} Taps
            </span>
          </p>
          {isUpgradeBought ? (
            <span className="text-sm font-bold text-green-500">Bought</span>
          ) : (
            <button
              className="p-1 text-xs rounded border border-white bg-white bg-opacity-10"
              onClick={() => upgradeClicks(increase, name, price)}
            >
              Upgrade!
            </button>
          )}
        </div>
      </div>
    )
  );
}

export default Upgrade;
