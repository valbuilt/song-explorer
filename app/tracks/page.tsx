import { searchTracks } from "@/logic/deezer";
import TrackGrid from "@/components/TrackGrid/TrackGrid";

export default async function TracksPage() {
  //for now the search word is fixed
  const tracks = await searchTracks("love");

  return (
    <>
      <h1>Tracks</h1>
      <TrackGrid tracks={tracks} />
    </>
  );
}
