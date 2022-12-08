import React, { useState } from "react";
import Image from "next/image";
import send from "../../public/assets/send.png";
import { BASE_API_URL } from "../../utils/constants";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [failed, setFailed] = useState(false);
  const [sended, setSended] = useState(false);

  const addToNewsletter = async (email: string) => {
    try {
      const data = await fetch(BASE_API_URL + "newsletter/register", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await data.json();
      if (res.statusCode == 400) {
        throw new Error(res.message);
      }
      return res;
    } catch (e) {
      throw e;
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      try {
        await addToNewsletter(email);
        setEmail("");
        setSended(true);
        setTimeout(() => {
          setSended(false);
        }, 1500);
      } catch (error) {
        setFailed(true);
        setTimeout(() => {
          setFailed(false);
        }, 1500);
      }
    } else {
      setFailed(true);
      setTimeout(() => {
        setFailed(false);
      }, 1500);
    }
  };

  const handleChange = (e: any) => {
    setEmail(e.target.value);
  };

  return (
    <div className="bg-gold-400 relative shadow-lg shadow-yellow blob w-8/12 mx-auto my-16 flex justify-center flex-col">
      <h3 className="mb-0 mx-auto text-lg text-left">
        {" "}
        Suscribite a nuestro Newsletter
      </h3>
      <form
        className={`mx-auto my-2 w-full${failed && "ring-red"} flex space-x-2`}
        onSubmit={handleSubmit}
      >
        {!failed && !sended && (
          <>
            <input
              className={`p-2 w-full h-8 rounded-lg shadow email-inputs`}
              placeholder="Tu email"
              value={email}
              onChange={handleChange}
              name="Email"
            ></input>
            <button className="h-8 w-8">
              {" "}
              <Image
                src={send}
                height={100}
                width={100}
                layout="responsive"
                alt="send"
              />{" "}
            </button>
          </>
        )}

        {failed && (
          <div className="bg-red h-8 w-full rounded-lg px-2 flex justify-center">
            <p className="text-white text-center m-auto">
              {" "}
              Email invalido o ha ocurrido un error{" "}
            </p>
          </div>
        )}
        {sended && (
          <div className="bg-green h-8 w-full rounded-lg px-2 flex justify-center">
            <p className="text-white text-center m-auto">Email enviado</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default Newsletter;
