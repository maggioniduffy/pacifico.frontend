import Head from "next/head";
import React from "react";
import { AllNews, Footer, Header } from "../../components";
import { sections } from "../../utils/constants";

const NewsPage = () => {
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
      <>
        <Header showMenu={false} sections={sections} />
        <AllNews isPage={true} />
        <Footer />
      </>
    </div>
  );
};

export default NewsPage;
