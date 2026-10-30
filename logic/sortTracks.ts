import { TrackSummary } from "@/types/deezer";

export type SortOption = "best-match" | "title" | "artist" | "length";

export function sortTracks(
  tracks: TrackSummary[],
  sortOption: SortOption,
): TrackSummary[] {
  const sortedTracks = [...tracks];

  // localeCompare compares two text values alphabetically and determines their order.
  if (sortOption === "title") {
    sortedTracks.sort((firstTrack, secondTrack) =>
      firstTrack.title.localeCompare(secondTrack.title),
    );
  }

  if (sortOption === "artist") {
    sortedTracks.sort((firstTrack, secondTrack) =>
      firstTrack.artist.name.localeCompare(secondTrack.artist.name),
    );
  }

  if (sortOption === "length") {
    sortedTracks.sort(
      (firstTrack, secondTrack) => firstTrack.duration - secondTrack.duration,
    );
  }

  // Keep Deezer's original order when "best-match" is selected.
  return sortedTracks;
}
