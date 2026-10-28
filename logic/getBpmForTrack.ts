import { TrackDetail } from "@/types/deezer";

// Deezer sends 0 when it does not know the bpm, so I turn 0 into null
export function getBpmForTrack(track: TrackDetail): number | null {
  if (track.bpm > 0) {
    return track.bpm;
  }

  return null;
}
