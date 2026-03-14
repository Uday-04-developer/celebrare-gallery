const Navbar = ({ searchTerm, onSearchChange, favoritesCount, showFavorites, onToggleFavorites, onGoHome }) => {
  return (
    <header className="sticky top-0 z-30 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/60 shadow-lg shadow-black/20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <button
          onClick={onGoHome}
          className="shrink-0 text-2xl font-bold tracking-tight text-zinc-100 hover:text-indigo-400 active:scale-95 transition-all duration-200 text-left"
          style={{ fontFamily: "'Playfair Display', serif" }}
          title="Go to Home"
        >
          Celebrare Gallery
        </button>

        {/* Search + Favorites */}
        <div className="flex items-center gap-3 ml-4">
          {/* Search Input */}
          <div className="relative hidden sm:block">
            <svg
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
            <input
              id="search-input"
              type="text"
              value={searchTerm}
              onChange={onSearchChange}
              placeholder="Search by author…"
              className="w-56 lg:w-72 rounded-full border border-zinc-800 bg-zinc-900/50 py-2 pl-10 pr-4 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none transition-all duration-200 focus:border-indigo-500/50 focus:bg-zinc-900 focus:ring-4 focus:ring-indigo-500/20"
            />
          </div>

          <button
            id="favorites-toggle"
            onClick={onToggleFavorites}
            className={`relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 active:scale-95 ${
              showFavorites
                ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-lg shadow-rose-500/20 border border-rose-500/50'
                : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100 border border-zinc-800 shadow-sm'
            }`}
          >
            {/* Inline SVG heart */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth={showFavorites ? 0 : 1.5}
              stroke={showFavorites ? 'none' : 'currentColor'}
              fill={showFavorites ? 'currentColor' : 'none'}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
            </svg>
            Favorites
            {favoritesCount >= 0 && (
              <span className={`flex h-5 min-w-5 items-center justify-center rounded-full text-[11px] font-bold ${
                showFavorites
                  ? 'bg-white text-rose-600'
                  : 'bg-zinc-800 text-zinc-300'
              }`}>
                {favoritesCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Search — shown below nav row on small screens */}
      <div className="sm:hidden px-4 pb-3">
        <div className="relative">
          <svg
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>
          <input
            type="text"
            value={searchTerm}
            onChange={onSearchChange}
            placeholder="Search by author…"
            className="w-full rounded-full border border-zinc-800 bg-zinc-900/50 py-2 pl-10 pr-4 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none transition-all duration-200 focus:border-indigo-500/50 focus:bg-zinc-900 focus:ring-4 focus:ring-indigo-500/20"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
