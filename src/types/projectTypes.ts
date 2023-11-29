import { StaticImageData } from "next/image";

interface Links {
  demonstration: string | null;
  repository: string;
}

export interface ProjectData {
  id: number;
  img: StaticImageData;
  name: string;
  description: string;
  techs: string[];
  links: Links;
}
