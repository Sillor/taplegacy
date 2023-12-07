import React from 'react';

function Clicker({ taps, addTaps, cps }) {
  return (
    <div className="flex flex-col items-center justify-center h-full p-4 md:max-w-sm lg:max-w-lg md:h-[80vh] w-full bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border-2 border-white">
      <h2 className="mb-16 text-3xl font-bold md:text-4xl">{taps} TAPS</h2>
      <button
        className="w-full p-6 text-5xl font-extrabold border-2 border-white-400 rounded-xl tap--button bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm active:text-4xl h-24"
        onClick={addTaps}
      >
        TAP!
      </button>
      <p className="mt-4">+{cps} taps / second</p>
    </div>
  );
}

export default Clicker;
