import { notFound } from "next/navigation";
import { Album, TrackSummary, TrackDetail } from "@/types/deezer";

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

// Gets one track by its id
export async function getTrackById(trackId: string): Promise<TrackDetail> {
  const response = await fetch(
    `${DEEZER_API}/track/${encodeURIComponent(trackId)}`,
  );

  if (!response.ok) {
    throw new Error("Could not get the track from Deezer");
  }

  const data = await response.json();

  // If the track cannot be found, show Next.js's 404 page.
  if (data.error) {
    notFound();
  }

  return data;
}

// Gets album details, including its genres, by album id
export async function getAlbumById(albumId: number): Promise<Album | null> {
  try {
    const response = await fetch(
      `${DEEZER_API}/album/${encodeURIComponent(albumId)}`,
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    if (data.error) {
      return null;
    }

    return data;
  } catch {
    // e.g. no internet or Deezer not answering
    return null;
  }
}
