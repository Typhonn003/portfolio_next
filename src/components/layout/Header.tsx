import * as Icon from "react-icons/bs";
import { NavBar } from "./NavBar";
import { TypeAnimation } from "react-type-animation";

export const Header = () => {
  return (
    <header className="container-width m-auto py-10 lg:h-full lg:py-0 lg:flex lg:flex-col lg:justify-between lg:w-full">
      <div>
        <div>
          <h1 className="text-4xl font-bold mb-2 lg:text-5xl">Diego Lima</h1>
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
            className="text-xl font-semibold text-light-blue11 mb-4 dark:text-dark-blue11 lg:text-2xl"
            speed={50}
            repeat={Infinity}
          />
        </div>
        <p className="w-[90%] mb-6 opacity-70 md:w-[460px] lg:w-[90%] xl:w-[75%]">
          Meu objetivo é criar produtos acessíveis e inclusivos, proporcionando
          experiências digitais de qualidade para a web.
        </p>
        <NavBar />
      </div>
      <nav aria-label="Lista de links para as minhas redes">
        <ul className="flex gap-4">
          <li>
            <a
              className="text-3xl lg:btn-style lg:border lg:border-light-blue7 lg:text-base lg:font-medium lg:flex lg:items-center lg:gap-2 lg:px-5 lg:py-2 lg:rounded-md lg:hover:border-light-blue8 lg:dark:border-dark-blue7 lg:dark:hover:border-dark-blue8"
              href="https://github.com/typhonn003"
              target="_blank"
              aria-label="Acesse meu perfil do GitHub"
            >
              <span className="hidden lg:block">GitHub</span>
              <Icon.BsGithub />
            </a>
          </li>
          <li>
            <a
              className="text-3xl lg:btn-style lg:border lg:border-light-blue7 lg:text-base lg:font-medium lg:flex lg:items-center lg:gap-2 lg:px-5 lg:py-2 lg:rounded-md lg:hover:border-light-blue8 lg:dark:border-dark-blue7 lg:dark:hover:border-dark-blue8"
              href="https://www.linkedin.com/in/typhonn003/"
              target="_blank"
              aria-label="Acesse meu perfil do LinkedIn"
            >
              <span className="hidden lg:block">LinkedIn</span>
              <Icon.BsLinkedin />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
