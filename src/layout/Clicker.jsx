function Clicker({ taps, addTaps, cps }) {
  return (
    <div className="md:max-w-sm lg:max-w-lg md:h-[80vh] p-4 h-full w-full bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border-2 border-white flex flex-col justify-center items-center py-36">
      <h2 className="font-bold text-3xl md:text-4xl mb-16"> {taps} TAPS</h2>
      <button
        className="p-6 text-5xl active:text-4xl font-extrabold border-2 border-white-400 backdrop-filter backdrop-blur-sm bg-white bg-opacity-5 rounded-xl tap--button"
        onClick={() => {
          addTaps();
        }}
      >
        TAP!
      </button>
      <p>{cps} taps / second</p>
    </div>
  );
}

export default Clicker;
