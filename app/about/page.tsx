export default function AboutPage() {
  return (
    <>
      <h1>About Song Explorer</h1>
      <h2>Who is it for?</h2>
      <p>
        It is for anyone who wants to find songs and check their tempo, for
        example dance teachers and students who are choosing music, or people
        who just like to browse music.
      </p>
      <h2>Where does the data come from?</h2>
      <p>
        All songs, covers, previews and additional info come from the{" "}
        <a href="https://developers.deezer.com/api">Deezer API</a>.<br />
        Unfortunately Deezer does not have a tempo set for every song, thus some
        songs say that the BPM is not available. Furthermore, the genre belongs
        to the album and not to the song, which is why it may not fit the song
        exactly. Hopefully a solution can be found for this during the future
        development of this tool.
      </p>
      <h2>Who made it and why?</h2>
      <p>
        Hey! I'm Valerie, a frontend development student and dance teacher. I'm
        the creator of Song Explorer.
        <br />I built this project as part of my studies, using Next.js and
        TypeScript. The idea was to create a practical music exploration tool
        for curious music lovers, dancers and dance teachers alike.
        <br />
        When I train or prepare my classes, the music I choose plays an
        important role. Beyond what one might think.
        <br />
        I need to manage my time in class, so the length of a song for my demo
        matters.
        <br />I want to create playlists of tracks of certain tempos for my
        students to practice and in the past I have wished for an easy way to
        search for songs without explicit lyrics...
        <br /> Song Explorer is still a work in progress, but it's already
        proving useful to me. If it makes your music search a little easier too,
        then I've achieved exactly what I set out to do.
        <br />
      </p>

      <p className="github-link">
        Find me on GitHub: @valbuilt –{" "}
        <a
          href="https://github.com/valbuilt"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Profile
        </a>
      </p>
    </>
  );
}
