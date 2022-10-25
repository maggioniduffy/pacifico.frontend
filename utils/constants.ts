import facebook from "../public/assets/facebook.svg";
import instagram from "../public/assets/instagram.svg";
import youtube from "../public/assets/youtube.svg";

export const BASE_API_URL = "http://localhost:5000/";

export const sections = [
  {
    name: "Inicio",
    section: "#inicio",
  },
  {
    name: "Fixture",
    section: "#fixture",
  },
  // {
  //   name: "Videos",
  //   section: "#videos",
  // },
  {
    name: "Historia",
    section: "#historia",
  },
  {
    name: "Newsletter",
    section: "#newsletter",
  },
];

export const socialMedia = [
  {
    url: "https://www.youtube.com/channel/UCrnbut7cU3Fbvb8_c3-2M9Q",
    image: youtube,
  },
  {
    url: "https://www.instagram.com/clubatleticopacificoneuquen/",
    image: instagram,
  },
  {
    url: "https://www.facebook.com/clubatleticopacificoneuquenbasquet",
    image: facebook,
  },
];
