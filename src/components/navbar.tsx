const Navbar = () => {
  return (
    <nav className="bg-white py-4">
      <div className="mx-auto flex items-center justify-between">
        {/* Logo/Brand */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-primary">Pokédex</h1>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md ml-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Pokémon..."
              className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
