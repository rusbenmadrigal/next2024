import Link from "next/link";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/">
        <h1>My Blog</h1>
      </Link>
      <ul>
        <li>
          <Link href="/">Home1</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/store">Store</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
