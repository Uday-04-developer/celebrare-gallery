const ErrorMessage = ({ message }) => (
  <div className="flex items-center justify-center min-h-screen bg-zinc-950 px-4">
    <div className="max-w-md w-full rounded-2xl bg-zinc-900 border border-zinc-800 p-8 text-center shadow-lg">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-500/10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6 text-rose-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <p className="text-lg font-semibold text-zinc-100">
        Something went wrong
      </p>
      <p className="mt-2 text-sm text-zinc-400">{message}</p>
    </div>
  </div>
);

export default ErrorMessage;
