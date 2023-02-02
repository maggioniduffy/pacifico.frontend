import Image from "next/image";
import footerimg from "../../public/assets/PacificoEscudo.png";
import Social from "../Header/Social";
import SponsorsCarousel from "./SponsorsCarousel";

const Footer = () => {
  return (
    <footer className="mt-8 w-full bg-black border-t-2 border-yellow">
      <div className="flex flex-wrap footer-bg p-4 justify-center place-items-center">
        <div className="h-56 relative basis-1/2 m-4">
          <Image
            className="object-contain"
            src={footerimg}
            layout="fill"
            height={9}
            width={16}
            loading="lazy"
            alt="Club Pacifico"
          />
        </div>
        <div className="flex bg-black text-sm md:text-lg p-4 shadow rounded-xl m-auto text-white flex-col place-items-center justify-center">
          <div className="flex flex-col my-2">
            <h3 className="font-bold">
              {" "}
              Sede Social y Estadio `&quot;`El Viejo Ramirez`&quot;`
            </h3>
            <p> Alberdi 355, Ciudad de Neuquen, Neuquen - 8300</p>
            <p> +54 9 2994488970</p>
          </div>
          <Social />
        </div>
      </div>
      <SponsorsCarousel />
      <div className="shadow shadow-yellow h-12 w-full text-sm p-auto bg-black flex flex-col justify-center">
        <h5 className="text-gray text-center m-auto">
          {" "}
          Made by{" "}
          <a
            className="font-medium text-white hover:text-yellow hover:font-bold"
            target={"_blank"}
            href="https://www.linkedin.com/in/maggioniduffy/"
            rel="noreferrer"
          >
            {" "}
            @maggioniduffy{" "}
          </a>
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
