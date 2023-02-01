/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useRef, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  Header,
  Section,
  Historia,
  News,
  Newsletter,
  Fixture,
  Videos,
  Footer,
} from "../components";
import AOS from "aos";
import "aos/dist/aos.css";
import { sections } from "../utils/constants";
import { url } from "../utils/constants";
import banner from "../public/assets/footerimg.png";

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init({
      mirror: false,
    });
  }, []);

  const main = useRef<null | HTMLDivElement>(null);

  return (
    <div>
      <Head>
        <title> Pacifico Basquet </title>
        <meta
          name="description"
          content="Club Pacifico Basquet #DecanoPasion. Neuquen"
        />
        <meta property="og:image" content={`${url}${banner}`} />
        <link rel="icon" href="/Logo.png" />
      </Head>
      <div>
        <>
          <Header sections={sections} />
          <main className="min-h-screen mt-10" ref={main}>
            <Section id="inicio">
              <News />
            </Section>
            <Section id="fixture">
              <Fixture />
            </Section>
            <Videos id="videos" />
            <Section id="historia">
              <Historia />
            </Section>
            <Section id="newsletter">
              <Newsletter />
            </Section>
            <Footer />
          </main>
        </>
      </div>
    </div>
  );
};

export default Home;
