import { AiFillHtml5 } from "react-icons/ai";
import * as IconBi from "react-icons/bi";
import * as IconFa from "react-icons/fa";
import * as IconSi from "react-icons/si";
import { RxStitchesLogo } from "react-icons/rx";
import { RiJavascriptFill } from "react-icons/ri";
import { TechData } from "../types/techTypes";

export const techData: TechData = {
  html: {
    logo: <AiFillHtml5 />,
    color: "#e44d25",
    name: "HTML5",
  },
  css: {
    logo: <IconFa.FaCss3Alt />,
    color: "#3595cf",
    name: "CSS3",
  },
  javascript: {
    logo: <RiJavascriptFill />,
    color: "#e8d44d",
    name: "JavaScript",
  },
  react: {
    logo: <IconFa.FaReact />,
    color: "#5bd3f3",
    name: "React",
  },
  typescript: {
    logo: <IconBi.BiLogoTypescript />,
    color: "#2f74c0",
    name: "TypeScript",
  },
  next: {
    logo: <IconSi.SiNextdotjs />,
    color: "#181818",
    name: "Next.js",
  },
  styledComponents: {
    logo: <IconSi.SiStyledcomponents />,
    color: "#db7290",
    name: "Styled Components",
  },
  tailwind: {
    logo: <IconSi.SiTailwindcss />,
    color: "#36b7f0",
    name: "Tailwind CSS",
  },
  stitches: {
    logo: <RxStitchesLogo />,
    color: "#1a1a1a",
    name: "Stitches",
  },
  node: {
    logo: <IconFa.FaNodeJs />,
    color: "#8bbf3d",
    name: "Node.js",
  },
  express: {
    logo: <IconSi.SiExpress />,
    color: "#282828",
    name: "Express.js",
  },
  nest: {
    logo: <IconSi.SiNestjs />,
    color: "#d9224c",
    name: "Nest.js",
  },
  postgreSql: {
    logo: <IconBi.BiLogoPostgresql />,
    color: "#31648c",
    name: "PostgreSQL",
  },
  prisma: {
    logo: <IconSi.SiPrisma />,
    color: "#0c3249",
    name: "Prisma",
  },
  python: {
    logo: <IconFa.FaPython />,
    color: "#356d9c",
    name: "Python",
  },
  django: {
    logo: <IconBi.BiLogoDjango />,
    color: "#0f3c2d",
    name: "Django",
  },
};
