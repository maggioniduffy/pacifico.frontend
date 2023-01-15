import Link from "next/link";
import Image from "next/image";
import { BASE_API_URL } from "../../utils/constants";
import { useCurrentUser } from "../../hooks";

interface Props {
  title: string;
  id: string;
  children: JSX.Element;
  canDelete?: boolean;
}

const NewCard = ({ title, id, children, canDelete }: Props) => {
  const currentUser = useCurrentUser();
  const deleteNew = async () => {
    try {
      const res = await fetch(BASE_API_URL + "news/" + id, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + currentUser?.token,
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Link
      href={{
        pathname: "/news/[title]",
        query: {
          title: title,
          id: id,
        },
      }}
    >
      <>
        <a className={"relative w-fit m-auto h-fit"}>{children}</a>
        {canDelete && currentUser && (
          <button onClick={deleteNew}> Borrar </button>
        )}
      </>
    </Link>
  );
};

export default NewCard;
