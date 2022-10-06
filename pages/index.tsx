import { useEffect, useRef, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import facebook from "../public/assets/facebook.png";
import instagram from "../public/assets/instagram.png";
import youtube from "../public/assets/youtube.png";
import { Header, Section, Link, Historia, News } from "../components";

const sections = [
  {
    name: "Inicio",
    section: "#inicio",
  },
  {
    name: "Fixture",
    section: "#fixture",
  },
  {
    name: "Videos",
    section: "#videos",
  },
  {
    name: "Historia",
    section: "#historia",
  },
];

const socialMedia = [
  {
    url: "https://www.youtube.com/channel/UCrnbut7cU3Fbvb8_c3-2M9Q",
    image: youtube,
  },
  {
    url: "https://www.instagram.com/clubatleticopacificoneuquen/",
    image: instagram,
  },
  {
    url: "https://www.facebook.com/clubatleticopacificoneuquenbasquet",
    image: facebook,
  },
];

const Home: NextPage = () => {
  useEffect(() => {
    scrollToBottom();
  }, []);

  const [alreadyScrolled, setAlreadyScrolled] = useState(false);

  const main = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    setTimeout(() => {
      main.current?.scrollIntoView({ behavior: "smooth" });
      setAlreadyScrolled(true);
    }, 1000);
  };

  return (
    <div>
      <Head>
        <title> Pacifico Basquet </title>
        <meta
          name="description"
          content="Club Pacifico Basquet #DecanoPasion. Neuquen"
        />
        <link rel="icon" href="/Logo.png" />
      </Head>

      <Header
        sections={sections}
        socialMedia={socialMedia}
        alreadyScrolled={alreadyScrolled}
      />
      <main className="min-h-screen mt-10" ref={main}>
        <Section id="inicio">
          <News />
        </Section>
        <Section id="fixture"></Section>
        <Section id="videos"></Section>
        <Section id="historia">
          <Historia />
        </Section>

        <footer className="h-16 w-full p-auto">
          <h5 className="text-white text-center text-sm">
            {" "}
            Made by Faustino Maggioni Duffy
          </h5>
        </footer>
      </main>
    </div>
  );
};

export default Home;
