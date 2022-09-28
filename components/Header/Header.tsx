import Image, { StaticImageData } from "next/image";
import Link from "../Link/Link";
import NavMenu from "../NavMenu/NavMenu";
import banner from "../../public/assets/Banner.png";
import { useEffect, useState } from "react";

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
  const [isOnTop, setIsOnTop] = useState(false);

  useEffect(() => {
    let elem = document?.querySelector("nav");
    const handleScroll = () => {
      console.log("window.scrollY", window.scrollY);
      let rect = elem?.getBoundingClientRect();
      if (rect?.y == 0) {
        setIsOnTop(true);
      } else {
        setIsOnTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header>
        <Image src={banner} height={500} />
      </header>
      <nav
        id="nav"
        className="flex sticker h-12 mt-0 bg-black border-b-2 border-b-yellow z-50"
      >
        <NavMenu options={sections} />
        <div className="m-auto bg-transparent rounded-xl basis-3/4 sm:basis-2/4">
          <h1
            className={`${
              isOnTop ? "" : "hidden"
            } text-2xl pr-2 pacifico uppercase text-right sm:text-4xl sm:text-center text-yellow font-thin text-center header-font`}
          >
            Pacifico Basquet
          </h1>
        </div>
        <div className="social-media flex flex-row w-full justify-items-end text-yellow basis-1/4 m-auto">
          <div className="ml-auto mt-auto pt-2 mr-2">
            {socialMedia.map(({ url, image }) => (
              <Link key={url} url={url}>
                <Image
                  src={image}
                  height={25}
                  className="m-auto mt-2 rounded-full hover:bg-yellow"
                />
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
