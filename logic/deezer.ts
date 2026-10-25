import { TrackSummary } from "@/types/deezer";

const DEEZER_API = "https://api.deezer.com";
const TRACKS_PER_SEARCH = 24;

// Gets a list of tracks that match a search word
export async function searchTracks(
  searchWord: string,
): Promise<TrackSummary[]> {
  const response = await fetch(
    `${DEEZER_API}/search?q=${encodeURIComponent(searchWord)}&limit=${TRACKS_PER_SEARCH}`,
  );

  if (!response.ok) {
    throw new Error("Could not get tracks from Deezer");
  }

  const data = await response.json();

  // Deezer can send an error object even when the status is ok
  if (data.error) {
    throw new Error("Deezer answered with an error");
  }

  return data.data;
}
