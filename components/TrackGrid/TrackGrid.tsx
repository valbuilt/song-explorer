import { TrackSummary } from "@/types/deezer";
import TrackCard from "@/components/TrackCard/TrackCard";
import "./TrackGrid.css";

type Props = {
  tracks: TrackSummary[];
};

export default function TrackGrid({ tracks }: Props) {
  return (
    <section className="track-grid">
      {tracks.map((track) => (
        <TrackCard key={track.id} track={track} />
      ))}
    </section>
  );
}
