"use client";

type Props = {
  error: Error;
  reset: () => void;
};

export default function TracksError({ reset }: Props) {
  return (
    <>
      <h1>Something went wrong</h1>
      <p>
        We could not load the songs. Please check your connection and try again.
      </p>
      <button type="button" className="action-button" onClick={reset}>
        Try again
      </button>
    </>
  );
}
