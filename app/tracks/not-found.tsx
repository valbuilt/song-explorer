import Link from "next/link";

export default function TrackNotFound() {
  return (
    <>
      <h1>Track not found</h1>
      <p>We could not find a track with that id.</p>
      <Link href="/tracks">Back to all tracks</Link>
    </>
  );
}
