import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import facebook from "../public/assets/facebook.png";
import instagram from "../public/assets/instagram.png";
import youtube from "../public/assets/youtube.png";
import { Header, Section, Link } from "../components";

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
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <Head>
        <title> Pacifico Basquet </title>
        <meta
          name="description"
          content="Club Pacifico Basquet #SomosDecanos. Neuquen"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <Header sections={sections} socialMedia={socialMedia} />
      <main className="relative min-h-screen mt-10">
        <Section id="inicio">
          <>
            {" "}
            <h1>Hola</h1>{" "}
          </>
        </Section>
        <Section id="fixture">
          <>
            {" "}
            <h1>Hola</h1>{" "}
          </>
        </Section>
        <Section id="videos">
          <>
            {" "}
            <h1>Hola</h1>{" "}
          </>
        </Section>
      </main>
      <footer className="flex flex-row w-full justify-items-end m-auto">
        {socialMedia.map(({ url, image }) => (
          <Link key={url} url={url}>
            <Image src={image} className="m-auto bg-dark" />
          </Link>
        ))}
      </footer>
    </div>
  );
};

export default Home;
