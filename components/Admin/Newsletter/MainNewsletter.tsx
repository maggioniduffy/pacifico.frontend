import React, { useState } from "react";
import { useCurrentUser } from "../../../hooks";
import { BASE_API_URL } from "../../../utils/constants";
import AdminSection from "../AdminSection";

const MainNewsletter = () => {
  const [subject, setSubject] = useState<string>();
  const [message, setMessage] = useState<string>();
  const currentUser = useCurrentUser();

  const send = async (e: any) => {
    e.preventDefault();
    try {
      const res = await fetch(BASE_API_URL + "newsletter/diffusion", {
        method: "POST",
        body: JSON.stringify({ subject, message }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + currentUser?.token,
        },
      });
      const data = await res.json();
      console.log("email res: ", data);
      setSubject("");
      setMessage("");
      return data;
    } catch (error) {}
  };

  return (
    <AdminSection title="Newsletter">
      <form
        onSubmit={send}
        className="m-4 bg-white space-y-4 rounded-xl shadow-lg h-fit p-4 flex flex-col place-items-center justify-center"
      >
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="rounded-lg shadow p-2"
          placeholder="Asunto"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Mensaje"
          className="w-full rounded-lg shadow p-2"
        />
        <button
          type="submit"
          onClick={send}
          onSubmit={send}
          className="bg-yellow bg-opacity-70 p-1 font-bold rounded-xl shadow w-full"
        >
          {" "}
          Enviar{" "}
        </button>
      </form>
    </AdminSection>
  );
};

export default MainNewsletter;
