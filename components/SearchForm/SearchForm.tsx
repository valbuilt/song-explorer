import Form from "next/form";
import { SortOption } from "@/logic/sortTracks";
import "./SearchForm.css";

type Props = {
  searchWord: string;
  sortOption: SortOption;
  hideExplicitSongs: boolean;
};

export default function SearchForm({
  searchWord,
  sortOption,
  hideExplicitSongs,
}: Props) {
  return (
    <Form action="/tracks" className="search-form">
      <div className="search-form-field">
        <label htmlFor="search-word">Search for a song or an artist</label>
        <input
          id="search-word"
          type="search"
          name="q"
          defaultValue={searchWord}
          autoComplete="off"
        />
      </div>

      <div className="search-form-field">
        <label htmlFor="sort-option">Sort by</label>
        <select id="sort-option" name="sort" defaultValue={sortOption}>
          <option value="best-match">Best match</option>
          <option value="title">Song title (A to Z)</option>
          <option value="artist">Artist (A to Z)</option>
          <option value="length">Length (shortest first)</option>
        </select>
      </div>

      <div className="search-form-checkbox">
        <input
          id="hide-explicit"
          type="checkbox"
          name="hideExplicit"
          value="on"
          defaultChecked={hideExplicitSongs}
        />
        <label htmlFor="hide-explicit">Hide songs with explicit lyrics</label>
      </div>

      <button type="submit">Search</button>
    </Form>
  );
}
