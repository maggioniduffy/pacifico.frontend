import { useRouter } from "next/router";
import React, { useState } from "react";
import { useLogin } from "../../hooks";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { log } = useLogin();
  const login = () => {
    if (!username || !password) {
      alert("Please enter information");
    } else {
      log(username, password)
        .then((res) => router.push("/admin"))
        .catch((e) => alert(e));
    }
  };

  return (
    <form
      className="w-72 m-auto my-20 bg-white flex flex-col space-y-5 h-72 justify-start p-8  place-items-center rounded-xl shadow-xl"
      onSubmit={login}
    >
      <h2 className="text-xl text-center">
        {" "}
        Bienvenido, por favor ingrese a su cuenta
      </h2>
      <input
        name="username"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="p-2"
      />
      <input
        name="password"
        placeholder="password"
        type={"password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-2"
      />
      <button
        type={"button"}
        onClick={login}
        className="bg-yellow bg-opacity-40 p-1 rounded w-16 rounded shadow"
      >
        {" "}
        Entrar{" "}
      </button>
    </form>
  );
};

export default Login;
