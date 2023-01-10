import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Admin() {
  const { data: session } = useSession();
  console.log("session: ", session);
  if (session) {
    return (
      <>
        Signed in as {session.user} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
