/* eslint-disable @next/next/no-title-in-document-head */
// eslint-disable-next-line @next/next/no-document-import-in-page
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Header } from "../../../components";
import { AddNewDto } from "../../../components/Admin/Fixture/interfaces";
import AddNew from "../../../components/Admin/News/HandleNew";
import { getNew } from "../../../utils/api";
import { sections } from "../../../utils/constants";

const EditNew = () => {
  const router = useRouter();
  const [data, setData] = useState<AddNewDto>();
  const [id, setId] = useState<string>();

  const setNewQuery = async () => {
    getNew(router!.query!.id as string).then((res) => {
      setData(res);
      setId(router!.query!.id as string);
    });
  };

  useEffect(() => {
    setNewQuery();
  }, [router, router.isReady, router.query]);

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
      <Header sections={sections} showMenu={false} />
      {data && <AddNew id={id} propState={data} />}
    </div>
  );
};

export default EditNew;
