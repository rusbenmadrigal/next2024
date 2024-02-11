export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <nav>
          <h1>Navbar</h1>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/store">Store</a>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
