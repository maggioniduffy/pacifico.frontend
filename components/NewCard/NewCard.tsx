import Link from "next/link";
import Image from "next/image";

interface Props {
  title: string;
  id: string;
  children: JSX.Element;
}

const NewCard = ({ title, id, children }: Props) => {
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
      <a
        className={
          "relative w-fit m-auto h-fit rounded-lg overflow-hidden shadow"
        }
      >
        {children}
      </a>
    </Link>
  );
};

export default NewCard;
