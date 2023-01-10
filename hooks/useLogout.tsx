import Cookies from "js-cookie";

const useLogout = () => {
  const logout = () => {
    Cookies.remove("currentUser");
  };

  return { logout };
};

export default useLogout;
