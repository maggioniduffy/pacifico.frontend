import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import { BASE_API_URL } from "../../../utils/constants";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any, req: any) {
        console.log(credentials, req);
        const data = await fetch(BASE_API_URL + "auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        });

        const token = await data.json();
        console.log("token: ", token);
        if (token) {
          return token;
        }
        return null;
      },
    }),
  ],
};

export default NextAuth(authOptions);
