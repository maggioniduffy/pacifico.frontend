import { useRouter } from "next/router";
import React from "react";
import { useCurrentUser } from "../../hooks";

const Admin = () => {
  const user = useCurrentUser();
  // const router = useRouter();
  // if (!user) {
  //   router.push("/login");
  // }
  return <div> ADMIN </div>;
};

export default Admin;
