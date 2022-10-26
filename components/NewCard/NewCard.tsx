import Link from "next/link";
import Image from "next/image";

interface Props {
  title: string;
  image: string;
  id: string;
  subtitle: string;
}

const NewCard = ({ title, image, id, subtitle }: Props) => {
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
      <a className="relative w-72 h-44 m-4 rounded-lg overflow-hidden shadow">
        <div className="w-full h-full">
          <Image src={image} layout="fill" height={9} width={16} alt={title} />
        </div>
        <div className="absolute bottom-0 w-full h-16 flex flex-col place-items-center justify-center">
          <h5 className="text-md text-center text-white font-bold shadow">
            {" "}
            {title}{" "}
          </h5>
          <p className="text-sm text-left text-white shadow"> {subtitle} </p>
        </div>
      </a>
    </Link>
  );
};

export default NewCard;
