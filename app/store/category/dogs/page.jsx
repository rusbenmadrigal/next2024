import { NextSeo } from "next-seo";
import Head from "next/head";

const AboutMePage = () => {
  return (
    <>
      <Head>
        <NextSeo
          title="About Me - Sufian Mustafa"
          description="Learn more about Sufian Mustafa, a passionate web developer with expertise in creating stunning web applications and websites"
          author="Sufian Mustafa"
          canonical="https://sufianmustafa.com/about"
          openGraph={{
            title: "About Me - Sufian Mustafa",
            description:
              "Get to know Sufian Mustafa, a web developer known for creating user-friendly and visually appealing websites. Discover his skills, experience, and passion for web development.",
            type: "webpage",
            url: "https://sufianmustafa.com/about",
            images: [
              {
                url: "https://res.cloudinary.com/dtvtphhsc/image/upload/v1697724760/Screenshot_248_tpjuk3.png",
                width: 800,
                height: 800,
                alt: "About Me - Sufian Mustafa",
              },
            ],
          }}
        />
      </Head>
      {/* Your About Me page Code goes here */}
    </>
  );
};

export default AboutMePage;
