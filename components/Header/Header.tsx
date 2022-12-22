import Image, { StaticImageData } from "next/image";
import NavMenu from "../NavMenu/NavMenu";
import logo from "../../public/Logo.png";
import Link from "next/link";

interface Section {
  section: string;
  name: string;
}

interface SocialMedia {
  url: string;
  image: StaticImageData;
}

interface Props {
  sections: Section[];
  socialMedia: SocialMedia[];
  showMenu?: boolean;
}

const Header = ({ sections, socialMedia, showMenu = true }: Props) => {
  return (
    <div>
      <nav
        id="nav"
        className="flex w-full top-0 fixed border-b-4 border-yellow place-items-center p-1 h-12 mt-0 bg-transparent z-40"
      >
        {showMenu ? (
          <NavMenu options={sections} />
        ) : (
          <span className="basis-1/4"></span>
        )}
        <div
          className={`m-auto bg-transparent justify-end sm:justify-center rounded-xl basis-3/4 sm:basis-2/4 flex`}
        >
          <Link href="/">
            <a className={`flex w-fit place-items-center pacifico`}>
              <h1
                className={`text-xl pr-2 pacifico text-right sm:text-2xl sm:text-center text-yellow text-center font-bold header-font`}
              >
                Pacifico Basquet{" "}
              </h1>
              <div className="w-10 h-auto">
                <Image src={logo} height={50} width={50} layout="responsive" />
              </div>
            </a>
          </Link>
        </div>
        <div className="social-media flex flex-row w-full h-full place-items-start justify-end text-yellow basis-1/4 m-auto">
          {socialMedia.map(({ url, image }) => (
            <a
              className="h-full basis-1/6 relative h-full"
              href={url}
              key={url}
            >
              <Image
                src={image}
                layout="fill"
                width={100}
                height={100}
                className="rounded-full w-full hover:bg-black"
              />
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Header;
