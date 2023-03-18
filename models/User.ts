import { StaticImageData } from "next/image";
export interface User {
  username: string;
  token: string;
  expiredAt: number;
}

export interface PlayerCard {
  image: StaticImageData;
  nombre: string;
}
