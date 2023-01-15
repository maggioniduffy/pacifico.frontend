import Link from "next/link";
import Image from "next/image";
import { BASE_API_URL } from "../../utils/constants";
import { useCurrentUser } from "../../hooks";
import { createRouteLoader } from "next/dist/client/route-loader";

interface Props {
  title: string;
  id: string;
  children: JSX.Element;
  canDelete?: boolean;
  deleteNew?: (id: string) => void;
  canEdit?: boolean;
}

const NewCard = ({ title, id, children, canDelete, deleteNew }: Props) => {
  const currentUser = useCurrentUser();

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
        {canDelete && currentUser && deleteNew && (
          <button onClick={() => deleteNew(id)}> Borrar </button>
        )}
      </>
    </Link>
  );
};

export default NewCard;
