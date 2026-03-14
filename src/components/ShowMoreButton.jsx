const ShowMoreButton = ({ onClick }) => (
  <div className="mt-12 mb-8 flex justify-center">
    <button
      onClick={onClick}
      className="group flex items-center gap-2 rounded-full bg-zinc-900 border border-zinc-800 px-6 py-3 text-sm font-medium text-zinc-300 transition-all duration-200 hover:bg-zinc-800 hover:text-zinc-100 active:scale-95 shadow-lg shadow-black/20"
    >
      Show More
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5 text-zinc-400 group-hover:text-zinc-100"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    </button>
  </div>
);

export default ShowMoreButton;
