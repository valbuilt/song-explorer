import Image from "next/image";
import { TrackSummary } from "@/types/deezer";
import { formatTrackDuration } from "@/logic/formatTrackDuration";
import "./TrackCard.css";

type Props = {
  track: TrackSummary;
};

export default function TrackCard({ track }: Props) {
  return (
    <article className="track-card">
      <Image
        src={track.album.cover_medium}
        width={250}
        height={250}
        alt={`Album cover for ${track.title}`}
      />
      <h2>{track.title}</h2>
      <p>{track.artist.name}</p>
      <p>Length: {formatTrackDuration(track.duration)}</p>
    </article>
  );
}
