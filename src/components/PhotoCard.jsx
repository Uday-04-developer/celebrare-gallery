const PhotoCard = ({ photo, isFavorite, onToggleFavorite }) => {
  return (
    <div className="group bg-zinc-900 border border-zinc-800/80 rounded-2xl shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/20 overflow-hidden transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="aspect-4/3 overflow-hidden">
        <img
          src={photo.download_url}
          alt={`Photo by ${photo.author}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Card Footer */}
      <div className="flex items-center justify-between px-4 py-3">
        <p className="truncate text-sm font-medium text-zinc-100">
          {photo.author}
        </p>

        {/* Inline SVG Heart Button */}
        <button
          aria-label={
            isFavorite
              ? `Remove ${photo.author} from favorites`
              : `Add ${photo.author} to favorites`
          }
          onClick={() => onToggleFavorite(photo.id)}
          className="shrink-0 rounded-full p-2 transition-all duration-200 hover:bg-zinc-800 active:scale-90"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={isFavorite ? 0 : 1.5}
            stroke={isFavorite ? 'none' : 'currentColor'}
            fill={isFavorite ? '#f43f5e' : 'none'}
            className={`h-5 w-5 transition-all duration-200 ${
              isFavorite ? 'text-rose-500 scale-110' : 'text-zinc-500 group-hover/btn:text-zinc-400'
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PhotoCard;
