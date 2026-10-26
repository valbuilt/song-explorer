// Turns seconds into minutes and seconds
export function formatTrackDuration(totalSeconds: number): string {
  //Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds - minutes * 60;

  // padStart pads this string with a given string so that the resulting string has a given length.
  // only acts when the seconds have one digit and thus creates string length of two
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}
