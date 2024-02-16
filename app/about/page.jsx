function AboutPage() {
  return <h1>About Page</h1>;
}
export const metadata = {
  metadataBase: new URL("https://acme.com"),
  title: "About Page",
  description: "This is the about page",
  alternates: {
    canonical: "/",
  },
};
export default AboutPage;
