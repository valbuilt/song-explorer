export type Artist = {
  name: string;
};

export type Album = {
  cover_medium: string;
};

// One track as it comes in the search results from Deezer
export type TrackSummary = {
  id: number;
  title: string;
  duration: number; // in seconds
  artist: Artist;
  album: Album;
};
