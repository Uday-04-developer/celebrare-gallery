import { useReducer, useState, useCallback, useMemo, useEffect } from 'react';
import useFetchPhotos from './hooks/useFetchPhotos';
import Navbar from './components/Navbar';
import PhotoGrid from './components/PhotoGrid';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import ShowMoreButton from './components/ShowMoreButton';

// ─── Favorites Reducer ───────────────────────────────────────────────────────

const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

function initFavorites() {
  try {
    const stored = localStorage.getItem('favorites');
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function favoritesReducer(state, action) {
  switch (action.type) {
    case TOGGLE_FAVORITE: {
      const id = action.payload;
      const next = state.includes(id)
        ? state.filter((fid) => fid !== id)
        : [...state, id];
      localStorage.setItem('favorites', JSON.stringify(next));
      return next;
    }
    default:
      return state;
  }
}

// ─── App Component ───────────────────────────────────────────────────────────

export default function App() {
  const INITIAL_VISIBLE_COUNT = 8;
  const { photos, loading, error } = useFetchPhotos();
  const [favorites, dispatch] = useReducer(favoritesReducer, [], initFavorites);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFavorites, setShowFavorites] = useState(false);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  // Requirement 7 — useCallback for onChange handler
  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  }, []);

  const handleToggleFavorite = useCallback((id) => {
    dispatch({ type: TOGGLE_FAVORITE, payload: id });
  }, []);

  const handleToggleFavoritesView = useCallback(() => {
    setShowFavorites((prev) => !prev);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  }, []);

  const handleGoHome = useCallback(() => {
    setShowFavorites(false);
    setSearchTerm('');
    setVisibleCount(INITIAL_VISIBLE_COUNT);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleShowMore = useCallback(() => {
    setVisibleCount((prev) => prev + 8);
  }, []);

  // Requirement 7 — useMemo for filtered photo computation
  const displayedPhotos = useMemo(() => {
    const query = searchTerm.toLowerCase().trim();
    let result = photos;

    // If viewing favorites, narrow down to favorited photos first
    if (showFavorites) {
      result = result.filter((photo) => favorites.includes(photo.id));
    }

    // Then apply search filter
    if (query) {
      result = result.filter((photo) =>
        photo.author.toLowerCase().includes(query)
      );
    }

    return result;
  }, [photos, searchTerm, showFavorites, favorites]);

  // ─── Loading State ──────────────────────────────────────────────────────────

  if (loading) {
    return <LoadingSpinner />;
  }

  // ─── Error State ────────────────────────────────────────────────────────────

  if (error) {
    return <ErrorMessage message={error} />;
  }

  // ─── Main Render ────────────────────────────────────────────────────────────

  const slicedPhotos = displayedPhotos.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-indigo-500/30" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        favoritesCount={favorites.length}
        showFavorites={showFavorites}
        onToggleFavorites={handleToggleFavoritesView}
        onGoHome={handleGoHome}
      />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Section heading */}
        {showFavorites && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-100">Your Favorites</h2>
            <p className="mt-2 text-sm text-zinc-400">
              {favorites.length === 0
                ? "You haven't favorited any photos yet."
                : `${favorites.length} photo${favorites.length !== 1 ? 's' : ''} saved`}
            </p>
          </div>
        )}

        <PhotoGrid
          photos={slicedPhotos}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
        />

        {visibleCount < displayedPhotos.length && (
          <ShowMoreButton onClick={handleShowMore} />
        )}
      </main>
    </div>
  );
}
