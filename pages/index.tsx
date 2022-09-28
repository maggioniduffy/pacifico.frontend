import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

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
  const [isMenuOpen, setMenuOpen] = useState(false);
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
          <News />
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
        <Section id="historia">
          <Historia />
        </Section>

        <footer className="bg-black h-16 w-full p-auto">
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
