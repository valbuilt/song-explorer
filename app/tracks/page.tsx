import { searchTracks } from "@/logic/deezer";

export default async function TracksPage() {
  const tracks = await searchTracks("love");

  console.log(tracks[0]);

  return (
    <>
      <h1>Tracks</h1>
      <p>Found {tracks.length} tracks</p>
    </>
  );
}
