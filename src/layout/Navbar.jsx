function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6">
      <h1 className="nav--title font-extrabold text-2xl md:text-4xl">
        TapLegacy
      </h1>
      <a className="nav--achievements text-lg md:text-2xl font-bold">
        Achievements 🏆
      </a>
    </nav>
  );
}

export default Navbar;
