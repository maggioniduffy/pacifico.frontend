import * as Components from "../../components/Admin";
import { useLogout } from "../../hooks";

const Admin = () => {
  const { logout } = useLogout();
  return (
    <div className="flex flex-col justify-center place-items-center p-4 space-y-6">
      <Components.MainNews />
      <hr />
      <Components.MainFixture />
      <hr />
      <Components.MainYoutube />
      <hr />
      <Components.MainNewsletter />
      <hr />

      <button
        onClick={logout}
        className="bg-yellow bg-opacity-70 shadow rounded p-2"
      >
        {" "}
        Salir{" "}
      </button>
    </div>
  );
};

export default Admin;
