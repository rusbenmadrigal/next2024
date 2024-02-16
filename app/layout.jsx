import Navbar from "../components/Navbar";
import { Roboto } from "next/font/google";

export const metadata = {
  title: "My Blog",
  description: "A blog about stuff",
};

const roboto = Roboto({
  weight: ["300", "400", "700"],
  styles: ["italic", "normal"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
