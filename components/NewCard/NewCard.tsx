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
  canEdit?: boolean;
  deleteNew?: (id: string) => void;
}

const NewCard = ({
  title,
  id,
  children,
  canDelete,
  canEdit,
  deleteNew,
}: Props) => {
  const currentUser = useCurrentUser();
  return (
    <>
      <Link
        href={{
          pathname: "/news/[title]",
          query: {
            title,
            id,
          },
        }}
      >
        <a className={"relative w-fit m-auto h-fit"}>{children} </a>
      </Link>

      {canDelete && currentUser && deleteNew && (
        <button onClick={() => deleteNew(id)}> Borrar </button>
      )}
      {canEdit && currentUser && (
        <Link
          href={{
            pathname: "/admin/edit/[title]",
            query: {
              title,
              id,
            },
          }}
        >
          <a> Editar </a>
        </Link>
      )}
    </>
  );
};

export default NewCard;
