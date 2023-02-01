import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BASE_API_URL } from "../../utils/constants";

const ConfirmEmailPage = () => {
  const router = useRouter();

  const { token } = router.query;
  const confirmEmail = async () => {
    try {
      const res = await fetch(BASE_API_URL + "newsletter/confirm", {
        method: "POST",
        body: JSON.stringify({ token: token }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
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
      <div className="w-full h-screen flex place-items-center align-center justify-center">
        <div className="w-56 shadow-xl h-56 bg-white border-2 space-y-2 flex flex-col place-items-center justify-center border-yellow bg-opacity-90 rounded-3xl m-auto">
          <h2 className="text-center"> Hola de nuevo! </h2>
          <button
            onClick={confirmEmail}
            className="m-auto text-black text-center bg-yellow p-4 rounded-xl font-bold text-xl"
          >
            {" "}
            Confirma tu email{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmEmailPage;
