import { User } from "../models/User";
import { BASE_API_URL } from "../utils/constants";
const timeout = 30000;
const timeoutErrorMessage = "Se acabo la sesion, por favor volve a ingresar";

export async function login(
  username: string,
  password: string
): Promise<User | null> {
  try {
    const res = await fetch(BASE_API_URL + "auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    return {
      username,
      token: data.token,
      expiredAt: Date.now() + Number(data.expiresIn),
    };
  } catch (error) {
    console.error(error);
    return null;
  }
}
