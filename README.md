# Song Explorer

Song Explorer is a music exploration website built with Next.js and TypeScript. It lets users search for songs, sort the results and explore individual tracks, including their album, genre, duration, BPM and 30-second preview.

The project was developed as part of my frontend development studies, with dancers, dance teachers and music lovers in mind.

## Features

- **Search and sorting:** Search by song or artist and sort results by relevance, title, artist or duration.
- **Track details** View album information, genre, release date, duration and BPM and listen to a 30-second preview when available.
- **URL-based search and sorting:** Search terms and sorting options are stored in the URL, allowing the page to be reloaded or opened directly.
- **Error handling:** Displays messages for empty searches, missing tracks, unsuccessful requests and unavailable information.
- **Responsive design and accessibility:** Semantic HTML, labelled form fields, image alt text, visible keyboard focus and a responsive track grid.

## Tech

- Next.js (App Router) and React
- TypeScript
- CSS
- Deezer API
- next/font for the Anton and Oswald fonts

## How to install and start it

**Requirements**

-Node.js 20 or newer
-npm
-An internet connection to retrieve music data from Deezer

**Installation**

Clone the repository, install its dependencies, run the development server:

```bash
git clone https://github.com/valbuilt/song-explorer.git
cd song-explorer
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

To build the project and run the production version:

```bash
npm run build
npm start
```

## API and data fetching

The site uses the public [Deezer API](https://developers.deezer.com/api).
It does not need an API key, so there is nothing to configure and no secrets in the repository.

These three requests are used:

| What                                 | Address                                         |
| ------------------------------------ | ----------------------------------------------- |
| Search for tracks                    | `https://api.deezer.com/search?q=WORD&limit=24` |
| Retrieve a track                     | `https://api.deezer.com/track/ID`               |
| Retrieve an album (to get the genre) | `https://api.deezer.com/album/ID`               |

API requests are handled by server components, while the fetching functions are collected in `logic/deezer.ts`.

## Project structure

- `app/` : pages, routing and error handling
- `components/` : reusable UI components
- `logic/` : API requests and helper functions
- `types/` : TypeScript types
- `public/` : static assets

I tried to give every file one job:
the pages put things together, the components show things, `logic/` does the work with data, and `types/` describes the data.

## Technical decisions

- **URL search parameters:** Search terms and sorting options are stored in the URL so the same results can be accessed after reloading or sharing the address (for example `/tracks?q=love&sort=title`).
- **BPM:** Deezer may return 0 when BPM information is unavailable. A small helper handles this value so the interface can display an appropriate message.
- **Genre is optional:** Genre information is retrieved through the album endpoint. If it is unavailable, the track details remain accessible.
- **Sorting** The results array is copied before sorting to avoid modifying the original array.

## Known limitations

-Searches return a maximum of 24 tracks and pagination is not implemented.
-BPM, genre and preview information are not available for every track.
-Genre information belongs to the album and may not accurately describe an individual track.
-A dedicated loading state and automated tests have not yet been implemented.

## Ideas for later

- A second source for BPM, so more songs have a tempo (the key would be kept out of Git)
- A filter for BPM range, and a filter to hide songs with explicit lyrics
- Pagination, with the sorting done by Deezer so all pages continue in the same order
- A loading skeleton while the songs are fetched

## Credits

- **Music data, album covers and previews:** [Deezer](https://developers.deezer.com/api)
- **Project setup:** `create-next-app`
- **Homepage image:**: [Unsplash] (https://unsplash.com)
- **Developer:** Valerie V.
- **GitHub:** [@valbuilt](https://github.com/valbuilt)
