export type Artist = {
  name: string;
};

export type Genre = {
  id: number;
  name: string;
};

export type Album = {
  id: number;
  title: string;
  cover_medium: string;
  cover_big: string;
  genres?: {
    data: Genre[];
  };
};

// One track as it comes in the search results from Deezer
export type TrackSummary = {
  id: number;
  title: string;
  duration: number;
  explicit_lyrics: boolean;
  artist: Artist;
  album: Album;
};

// One track when I fetch it alone, with more fields than in the search results.
export type TrackDetail = TrackSummary & {
  preview: string;
  bpm: number;
  release_date: string;
};
