import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>Ups, this page no exist</p>
      <Link href="/">Go back to home</Link>
    </div>
  );
}
