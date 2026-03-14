const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-zinc-950">
    <div className="flex flex-col items-center gap-4">
      <div className="h-10 w-10 animate-spin rounded-full border-[3px] border-zinc-800 border-t-indigo-500" />
      <p className="text-sm font-medium tracking-wide text-zinc-400">
        Loading gallery…
      </p>
    </div>
  </div>
);

export default LoadingSpinner;
