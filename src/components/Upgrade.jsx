function Upgrade({ name, desc, price, styles }) {
  return (
    <div
      className={`mt-2 p-4 upgrade h-full w-full ${styles.bg} rounded-md backdrop-filter backdrop-blur-sm bg-opacity-10 border ${styles.border} max-h-28`}
    >
      <h1 className={`font-bold text-md ${styles.text}`}>{name}</h1>
      <p className="text-sm font-light mb-2 italic">{desc}</p>
      <div className="flex justify-between items-center">
        <p className="text-sm font-bold">
          Price:{' '}
          <span className={`${styles.text} font-normal`}>{price} Taps</span>
        </p>
        <button className="p-1 text-xs rounded border border-white-400 backdrop-filter backdrop-blur-sm bg-opacity-10">
          Upgrade!
        </button>
      </div>
    </div>
  );
}

export default Upgrade;
