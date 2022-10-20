import React, { useState } from "react";
import Image from "next/image";
import send from "../../public/assets/send.png";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [failed, setFailed] = useState(false);
  const [sended, setSended] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      //addToNewsletter(email)
      setEmail("");
      setSended(true);
      setTimeout(() => {
        setSended(false);
      }, 1000);
    } else {
      setFailed(true);
      setTimeout(() => {
        setFailed(false);
      }, 1000);
    }
  };

  const handleChange = (e: any) => {
    setEmail(e.target.value);
  };

  return (
    <div className="bg-gold-400 relative blob min-h-72 w-8/12 mx-auto my-16 flex justify-center flex-col p-32">
      <h3 className="text-3xl font-bold text-left">
        {" "}
        Suscribite a nuestro Newsletter
      </h3>
      <form
        className={`mt-4 ${failed && "ring-red"} flex`}
        onSubmit={handleSubmit}
      >
        <input
          className={`p-2 w-full rounded-lg shadow ${
            failed && "ring-2 ring-red"
          } ${sended && "ring-2 ring-green"} email-input`}
          placeholder="Tu email"
          value={email}
          onChange={handleChange}
        ></input>
        <button className="ml-4">
          {" "}
          <Image src={send} height={20} width={20} alt="send" />{" "}
        </button>
      </form>
      {failed && (
        <div className="bg-red my-4 w-full p-4 rounded-lg">
          <h5 className="text-white font-bold">
            {" "}
            <b className="font-bold"> X </b>Ingrese un email valido{" "}
          </h5>
        </div>
      )}
      {sended && (
        <div className="bg-green my-4 w-full p-4 rounded-lg">
          <h5 className="text-white font-bold">Email enviado</h5>
        </div>
      )}
    </div>
  );
};

export default Newsletter;
