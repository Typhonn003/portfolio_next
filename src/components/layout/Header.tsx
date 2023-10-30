import * as Icon from "react-icons/bs";
import { NavBar } from "./NavBar";
import { TypeAnimation } from "react-type-animation";
import { poppins } from "@/fonts";
import { NetworkLink } from "../buttons/NetworkLink";

export const Header = () => {
  return (
    <header className="container-width m-auto py-10 lg:h-full lg:py-0 lg:flex lg:flex-col lg:justify-between lg:w-full">
      <div>
        <div>
          <h1
            className={`${poppins.className} text-4xl font-bold mb-2 lg:text-5xl`}
          >
            Diego Lima
          </h1>
          <TypeAnimation
            sequence={[
              "Desenvolvedor Front End",
              2000,
              "Desenvolvedor Back End",
              2000,
              "Desenvolvedor Full Stack",
              2000,
            ]}
            wrapper="h2"
            className={`${poppins.className} text-xl font-semibold text-light-blue11 mb-4 dark:text-dark-blue11 lg:text-2xl`}
            speed={50}
            repeat={Infinity}
          />
        </div>
        <p className="w-[88%] mb-6 opacity-70 md:w-[480px] lg:w-[85%] xl:w-[75%]">
          Meu objetivo é criar produtos acessíveis e inclusivos, proporcionando
          experiências digitais de qualidade para a web.
        </p>
        <NavBar />
      </div>
      <nav aria-label="Lista de links para as minhas redes">
        <ul className="flex gap-4">
          <li>
            <NetworkLink
              title="GitHub"
              href="https://github.com/typhonn003"
              aria-label="Acesse meu perfil do GitHub"
            >
              <Icon.BsGithub />
            </NetworkLink>
          </li>
          <li>
            <NetworkLink
              title="LinkedIn"
              href="https://www.linkedin.com/in/typhonn003/"
              aria-label="Acesse meu perfil do LinkedIn"
            >
              <Icon.BsLinkedin />
            </NetworkLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
