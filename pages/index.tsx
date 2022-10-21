import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import construction from "../public/assets/construction.svg";
import down from "../public/assets/down-arrow.png";
import "animate.css";
import { useRef, useReducer, useState, useEffect } from "react";
import { BASE_API_URL } from "../utils/constants";

interface Action {
  type: "EMAIL" | "NAME" | "SUBJECT" | "MESSAGE" | "CLEAR";
  payload: string;
}

interface State {
  email: string;
  name: string;
  subject: string;
  message: string;
}

const initialState: State = {
  email: "",
  subject: "",
  message: "",
  name: "",
};

const reducer = (state: State, { type, payload }: Action) => {
  console.log(state);
  switch (type) {
    case "EMAIL":
      return { ...state, email: payload };
    case "NAME":
      return { ...state, name: payload };
    case "MESSAGE":
      return { ...state, message: payload };
    case "SUBJECT":
      return { ...state, subject: payload };
    case "CLEAR":
      return { email: "", subject: "", name: "", message: "" };
    default:
      return state;
  }
};

const Home: NextPage = () => {
  const emailForm = useRef<null | HTMLDivElement>(null);
  const [state, dispatch] = useReducer(reducer, initialState);
  const scroll = () => emailForm?.current?.scrollIntoView();
  const [error, setError] = useState(false);
  const [sended, setSended] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = async () => {
    const { email, name, subject, message } = state;
    const data = {
      from: email,
      name,
      subject,
      message,
    };

    try {
      const res = await fetch(BASE_API_URL + "email", {
        method: "POST",
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      });
      const response = await res.json();
      console.log("Res" + response);
      return res;
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (!state.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      setError(true);
      console.log(error);
      setErrorMessage("Por favor ingrese un email valido");
    } else {
      if (state.name.length < 1) {
        setError(true);
        setErrorMessage("Por favor ingrese su nombre");
      } else {
        if (state.subject.length < 1) {
          setError(true);
          setErrorMessage("Por favor ingrese un asutnto");
        } else {
          if (state.message.length < 1) {
            setError(true);
            setErrorMessage("Por favor ingrese un mensaje");
          } else {
            sendEmail();
            setSended(true);
          }
        }
      }
    }
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false);
        setErrorMessage("");
      }, 1500);
    }
  }, [error]);

  useEffect(() => {
    if (sended) {
      setTimeout(() => {
        dispatch({ type: "CLEAR", payload: "" });
        setSended(false);
      }, 1500);
    }
  }, [sended]);

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
      <main className="h-screen flex flex-col justify-center">
        <div className="m-auto w-full h-10/12">
          <div className="w-96 h-96 m-auto bg-gold-300 construction shadow">
            <Image
              src={construction}
              layout="responsive"
              height={100}
              width={100}
            />
          </div>
          <h1 className="text-center mt-8 font-thin text-4xl">
            {" "}
            Este sitio esta en construccion{" "}
          </h1>
          <h3 className="text-center text-gray text-xl mt-4">
            {" "}
            Ya queda poco!{" "}
          </h3>
        </div>
        <button
          className="animate__animated h-16 w-16 m-auto animate__bounce animate__infinite"
          onClick={scroll}
        >
          <Image src={down} layout="fill" />
        </button>
      </main>
      <div className="h-screen flex flex-col justify-center" ref={emailForm}>
        <div className="bg-realwhite h-fit w-auto m-32 rounded-xl shadow">
          <form className="my-16 mx-32 h-full" onSubmit={handleSubmit}>
            <h2 className="text-gold-500 text-4xl"> Contactanos </h2>
            <h5 className="text-gray"> En que te podemos ayudar?</h5>
            <div className="mt-4 flex space-x-4 justify-between w-full">
              <input
                name="name"
                placeholder="Nombre"
                className="border-b w-full h-12 p-2"
                value={state.name}
                onChange={(e) =>
                  dispatch({ type: "NAME", payload: e.target.value })
                }
              ></input>
              <input
                name="email"
                placeholder="Email"
                className="border-b w-full h-12 p-2"
                value={state.email}
                onChange={(e) =>
                  dispatch({ type: "EMAIL", payload: e.target.value })
                }
              ></input>
            </div>
            <input
              name="asunto"
              placeholder="Asunto"
              className="border-b w-full mt-4 h-12 p-2"
              value={state.subject}
              onChange={(e) =>
                dispatch({ type: "SUBJECT", payload: e.target.value })
              }
            ></input>
            <textarea
              name="message"
              placeholder="Tu mensaje"
              className="border-b w-full mt-6 break-words h-32 p-2"
              value={state.message}
              onChange={(e) =>
                dispatch({ type: "MESSAGE", payload: e.target.value })
              }
            ></textarea>
            {!sended && !error && (
              <button
                type="submit"
                className="bg-gold-400 mt-8 h-8 text-white w-full rounded"
              >
                Enviar
              </button>
            )}
            {error && (
              <div className="bg-red mt-8 h-8 text-white w-full rounded p-1">
                <p className="text-center"> {errorMessage} </p>
              </div>
            )}

            {sended && (
              <div className="bg-green mt-8 p-1 h-8 text-white w-full rounded">
                <p className="text-center"> Email enviado </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
