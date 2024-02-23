import { StaticImageData } from "next/image";

export interface MenuType {
  id: number;
  description: string;
  picture: StaticImageData;
  title: string;
}
export interface ActivityType {
  id: number;
  info: string;
  picture: StaticImageData;
  title: string;
}
