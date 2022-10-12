import Image, { StaticImageData } from "next/image";
import CustomLink from "../CustomLink/CustomLink";
import NavMenu from "../NavMenu/NavMenu";
import banner from "../../public/assets/Banner.png";
import pacificoEsDeLiga from "../../public/assets/PacificoEsDeLiga.png";
import logo from "../../public/Logo.png";
import { useEffect, useState } from "react";
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
  alreadyScrolled: boolean;
  showImage?: boolean;
  showMenu?: boolean;
}

const Header = ({
  sections,
  socialMedia,
  alreadyScrolled,
  showImage = true,
  showMenu = true,
}: Props) => {
  const [isOnTop, setIsOnTop] = useState(false);
  const [liga, setLiga] = useState(false);

  useEffect(() => {
    let elem = document?.querySelector("nav");
    const handleScroll = () => {
      let rect = elem?.getBoundingClientRect();
      console.log("scroll", rect?.y);
      if (rect?.y == 0) {
        setIsOnTop(true);
        console.log(true);
      } else {
        setIsOnTop(false);
      }
    };

    const imgInterval = setInterval(() => {
      setLiga(!liga);
    }, 10000);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(imgInterval);
    };
  }, []);

  return (
    <div>
      {showImage && (
        <header className={alreadyScrolled ? "h-fit" : "h-screen"}>
          <Image
            src={liga ? pacificoEsDeLiga : banner}
            height={500}
            layout={alreadyScrolled ? "responsive" : "fill"}
          />
        </header>
      )}
      <nav
        id="nav"
        className="flex sticky place-items-center p-1 h-12 mt-0 bg-black z-40"
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
            <div className={`flex w-fit place-items-center pacifico`}>
              <h1
                className={`text-2xl pr-2 pacifico text-right sm:text-4xl sm:text-center text-yellow font-bold text-center header-font`}
              >
                Pacifico Basquet{" "}
              </h1>
              <div className="w-10 h-auto">
                <Image src={logo} height={50} width={50} layout="responsive" />
              </div>
            </div>
          </Link>
        </div>
        <div className="social-media flex flex-row w-full justify-items-end text-yellow basis-1/4 m-auto">
          <div className="ml-auto mt-auto pt-2 mr-2">
            {socialMedia.map(({ url, image }) => (
              <CustomLink key={url} url={url}>
                <Image
                  src={image}
                  height={25}
                  className="m-auto mt-2 rounded-full hover:bg-yellow"
                />
              </CustomLink>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
