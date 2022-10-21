import Image, { StaticImageData } from "next/image";
import CustomLink from "../CustomLink/CustomLink";
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
        className="flex w-full top-0 fixed place-items-center p-1 h-16 mt-0 bg-transparent z-40"
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
                className={`text-4xl pr-2 pacifico text-right sm:text-4xl sm:text-center text-yellow font-bold text-center header-font`}
              >
                Pacifico Basquet{" "}
              </h1>
              <div className="w-10 h-auto">
                <Image src={logo} height={50} width={50} layout="responsive" />
              </div>
            </a>
          </Link>
        </div>
        <div className="social-media flex flex-row w-full place-items-start justify-end text-yellow basis-1/4 m-auto">
          {socialMedia.map(({ url, image }) => (
            <CustomLink key={url} url={url}>
              <Image
                src={image}
                height={30}
                width={30}
                className="rounded-full hover:bg-white"
              />
            </CustomLink>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Header;
