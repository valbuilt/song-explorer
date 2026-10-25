import Link from "next/link";
import "./Header.css";

export default function Header() {
  return (
    <header className="top-header">
      <nav>
        <Link href="/">Home</Link>
        <Link href="/tracks">Tracks</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}
