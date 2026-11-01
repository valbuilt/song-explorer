import Link from "next/link";

export default function NotFoundPage() {
  return (
    <>
      <h1>Page not found</h1>
      <p>We could not find the page you were looking for.</p>
      <Link href="/" className="action-button">
        Go to the home page
      </Link>
    </>
  );
}
