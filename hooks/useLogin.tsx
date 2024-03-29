import { login } from "../services/authService";
import Cookies from "js-cookie";
import { User } from "../models/User";

export const useLogin = () => {
  const log = async (username: string, password: string) => {
    const user = await login(username, password);
    if (user) {
      Cookies.set("currentUser", JSON.stringify(user));
    }
    return user as User;
  };
  return { log };
};
