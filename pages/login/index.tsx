import React, { useState } from "react";
import { useLogin } from "../../hooks";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { log } = useLogin();

  const login = () => log(username, password);
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
      />
      <input
        name="password"
        placeholder="password"
        type={"password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type={"button"} onClick={login}>
        {" "}
        Entrar{" "}
      </button>
    </form>
  );
};

export default Login;
