import Image from "next/image";
import Link from "next/link";
import "./home.css";

export default function HomePage() {
  return (
    <section className="home">
      <div className="home-text">
        <h1>Song Explorer</h1>
        <p className="home-lead">
          Looking for the right song for the moment? <br /> Discover music,
          listen to 30-second previews and explore each track's tempo (BPM),
          length and other details.
        </p>
        <p>
          Made for curious music lovers, dancers and dance teachers alike. You
          might be looking for a particular BPM to practise your musicality or
          maybe you need a shorter track for a demo or a longer one for your
          next class? Search, sort and explore until you find exactly what
          you're looking for.
        </p>
        <Link href="/tracks" className="action-button">
          Start exploring
        </Link>
      </div>
      <Image
        src="/hero.jpg"
        width={800}
        height={600}
        loading="eager"
        alt="A person leaning back and resting their foot on a vintage cassete recorder while listening to music"
        className="home-image"
      />
    </section>
  );
}
