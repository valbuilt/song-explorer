import { searchTracks } from "@/logic/deezer";
import { sortTracks, toSortOption } from "@/logic/sortTracks";
import SearchForm from "@/components/SearchForm/SearchForm";
import TrackGrid from "@/components/TrackGrid/TrackGrid";

type Props = {
  searchParams: Promise<{ q?: string; sort?: string }>;
};

const DEFAULT_SEARCH_WORD = "love";

export default async function TracksPage({ searchParams }: Props) {
  const { q, sort } = await searchParams;

  // No q in the address at all (first visit): use the default search word.
  // q is there but empty (the box was cleared and sent): keep it empty.
  const searchWord = q === undefined ? DEFAULT_SEARCH_WORD : q.trim();
  const sortOption = toSortOption(sort);

  // Only search Deezer if the user has entered a search word.
  const tracks = searchWord ? await searchTracks(searchWord) : [];
  const sortedTracks = sortTracks(tracks, sortOption);

  return (
    <>
      <h1>Tracks</h1>
      <SearchForm searchWord={searchWord} sortOption={sortOption} />
      {!searchWord ? (
        <p>Please enter a song or artist to start searching.</p>
      ) : (
        <>
          <p>Results for: {searchWord}</p>
          {sortedTracks.length > 0 ? (
            <>
              <p>
                Showing {sortedTracks.length} tracks. Sorting only works on the
                songs shown here.
              </p>
              <TrackGrid tracks={sortedTracks} />
            </>
          ) : (
            <p>No tracks found. Try another search!</p>
          )}
        </>
      )}
    </>
  );
}
