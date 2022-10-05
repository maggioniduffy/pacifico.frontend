import Image, { StaticImageData } from "next/image";
import Link from "../Link/Link";
import NavMenu from "../NavMenu/NavMenu";
import banner from "../../public/assets/Banner.png";
import pacificoEsDeLiga from "../../public/assets/PacificoEsDeLiga.png";
import logo from "../../public/Logo.png";
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
  alreadyScrolled: boolean;
}

const Header = ({ sections, socialMedia, alreadyScrolled }: Props) => {
  const [isOnTop, setIsOnTop] = useState(false);
  const [liga, setLiga] = useState(false);

  useEffect(() => {
    let elem = document?.querySelector("nav");
    const handleScroll = () => {
      let rect = elem?.getBoundingClientRect();
      if (rect?.y == 0) {
        setIsOnTop(true);
      } else {
        setIsOnTop(false);
      }
    };

    setTimeout(() => {
      setLiga(!liga);
    }, 10000);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={alreadyScrolled ? "h-fit" : "h-screen"}>
        <Image
          src={liga ? pacificoEsDeLiga : banner}
          height={500}
          layout={alreadyScrolled ? "responsive" : "fill"}
        />
      </header>
      <nav
        id="nav"
        className="flex sticker place-items-center p-1 h-12 mt-0 bg-black z-40"
      >
        {isOnTop ? (
          <NavMenu options={sections} />
        ) : (
          <span className="basis-1/4"></span>
        )}
        <div
          className={`m-auto bg-transparent justify-end sm:justify-center rounded-xl basis-3/4 sm:basis-2/4 flex`}
        >
          <div
            className={`${
              isOnTop ? "" : "hidden"
            } flex w-fit place-items-center pacifico`}
          >
            <h1
              className={`${
                isOnTop ? "" : "hidden"
              } text-2xl pr-2 pacifico text-right sm:text-4xl sm:text-center text-yellow font-bold text-center header-font`}
            >
              Pacifico Basquet{" "}
            </h1>
            <div className="w-10 h-auto">
              <Image src={logo} height={50} width={50} layout="responsive" />
            </div>
          </div>
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
