import Navbar from "../components/Navbar";

export const metadata = {
  title: "My Blog",
  description: "A blog about stuff",
};
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
