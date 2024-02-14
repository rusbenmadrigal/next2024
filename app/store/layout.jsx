import Link from "next/link";
export default function StorLayout({ children }) {
  return (
    <>
      <nav>
        <h1>My Store</h1>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/store">Store</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
}
