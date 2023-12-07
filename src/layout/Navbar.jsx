function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6">
      <h1 className="nav--title font-extrabold text-2xl md:text-4xl">
        TapLegacy
      </h1>
      <button className="nav--achievements text-lg md:text-2xl font-extrabold border-2 border-white-400 backdrop-filter backdrop-blur-sm bg-black bg-opacity-10 rounded-xl p-4">
        <span className="hidden sm:inline">Achievements</span> 🏆
      </button>
    </nav>
  );
}

export default Navbar;
