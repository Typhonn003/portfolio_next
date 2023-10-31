import * as Icon from "react-icons/bs";
import { NavBar } from "./NavBar";
import { TypeAnimation } from "react-type-animation";
import { poppins } from "@/fonts";
import { NetworkLink } from "../buttons/NetworkLink";

export const Header = () => {
  return (
    <header className="container-width m-auto py-10 lg:flex lg:h-full lg:w-full lg:flex-col lg:justify-between lg:py-0">
      <div>
        <div>
          <h1
            className={`${poppins.className} mb-2 text-4xl font-bold lg:text-5xl`}
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
            className={`${poppins.className} mb-4 text-xl font-semibold text-light-blue11 dark:text-dark-blue11 lg:text-2xl`}
            speed={50}
            repeat={Infinity}
          />
        </div>
        <p className="mb-6 w-[88%] opacity-70 md:w-[480px] lg:w-[85%] xl:w-[75%]">
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
              target="_blank"
              aria-label="Acesse meu perfil do GitHub"
            >
              <Icon.BsGithub />
            </NetworkLink>
          </li>
          <li>
            <NetworkLink
              title="LinkedIn"
              target="_blank"
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
