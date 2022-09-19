import Image, { StaticImageData } from "next/image";
import Link from "../Link/Link";
import NavMenu from "../NavMenu/NavMenu";

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
}

const Header = ({ sections, socialMedia }: Props) => {
  return (
    <header className="bg-black sticky top-0 z-50 h-16 shadow-2xl border-b-4 border-yellow flex content-center justify-between">
      <NavMenu options={sections} />
      <div className="m-auto bg-transparent rounded-xl basis-3/4 sm:basis-2/4">
        <h1 className="text-2xl pr-2 pacifico text-right sm:text-4xl sm:text-center text-yellow font-thin text-center header-font">
          Pacifico Basquet
        </h1>
      </div>
      <div className="social-media flex flex-row w-full justify-items-end text-yellow basis-1/4 m-auto">
        <div className="ml-auto mr-auto">
          {socialMedia.map(({ url, image }) => (
            <Link key={url} url={url}>
              <Image src={image} className="m-auto" />
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
