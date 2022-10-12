/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useRef, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Header, Section, Historia, News, Newsletter } from "../components";
import AOS from "aos";
import "aos/dist/aos.css";
import { sections, socialMedia } from "../utils/constants";

import banner from "../public/assets/Banner.png";
import pacificoEsDeLiga from "../public/assets/PacificoEsDeLiga.png";

const Home: NextPage = () => {
  const [liga, setLiga] = useState(false);
  useEffect(() => {
    AOS.init({
      mirror: false,
    });
    const interval = setInterval(() => {
      setLiga(!liga);
    }, 10000);

    return () => clearInterval(interval);
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
        <link rel="icon" href="/Logo.png" />
      </Head>

      <header className="h-fit z-50">
        <Image
          src={liga ? pacificoEsDeLiga : banner}
          height={500}
          layout="fill"
        />
      </header>
      <div data-aos="fade-up">
        <>
          <Header
            sections={sections}
            socialMedia={socialMedia}
            alreadyScrolled={false}
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
            <Section id="newsletter">
              <Newsletter />
            </Section>
            <footer className="h-16 w-full p-auto bg-black flex flex-col justify-center">
              <h5 className="text-white text-center m-auto">
                {" "}
                Made by{" "}
                <a
                  className="font-bold"
                  target={"_blank"}
                  href="https://www.linkedin.com/in/maggioniduffy/"
                >
                  {" "}
                  Faustino Maggioni Duffy{" "}
                </a>
              </h5>
            </footer>
          </main>
        </>
      </div>
    </div>
  );
};

export default Home;
