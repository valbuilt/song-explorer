import "./track-page.css";
import Image from "next/image";
import Link from "next/link";
import { getTrackById, getAlbumById } from "@/logic/deezer";
import { getBpmForTrack } from "@/logic/getBpmForTrack";
import { formatTrackDuration } from "@/logic/formatTrackDuration";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function TrackPage({ params }: Props) {
  const { id } = await params;

  const track = await getTrackById(id);
  const bpm = getBpmForTrack(track);

  // The genre is not on the track, so I ask for the album it belongs to
  const album = await getAlbumById(track.album.id);

  // Some albums have no genres, then I use an empty list
  const genres = album && album.genres ? album.genres.data : [];

  const genreText =
    genres.length > 0
      ? genres.map((genre) => genre.name).join(", ")
      : "Genre not available";

  return (
    <>
      <Link href="/tracks">Back to tracks</Link>

      <article className="track-detail">
        <Image
          src={track.album.cover_big}
          width={500}
          height={500}
          alt={`Album cover for ${track.album.title}`}
        />

        <div>
          <h1>{track.title}</h1>
          <p>Artist: {track.artist.name}</p>
          <p>Album: {track.album.title}</p>
          <p>Genre: {genreText}</p>
          <p>Released: {track.release_date}</p>
          <p>Length: {formatTrackDuration(track.duration)}</p>
          <p>Tempo: {bpm ? `${bpm} BPM` : "BPM not available"}</p>

          <h3>30 second preview</h3>
          {track.preview ? (
            <audio controls src={track.preview}>
              Your browser does not support audio.
            </audio>
          ) : (
            <p>No preview available for this track.</p>
          )}
        </div>
      </article>
    </>
  );
}
