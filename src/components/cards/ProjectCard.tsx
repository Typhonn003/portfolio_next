import { BsGithub } from "react-icons/bs";
import { ProjectData } from "../../types/projectTypes";
import Image from "next/image";

interface ProjectProps {
  project: ProjectData;
}

export const ProjectCard = ({ project }: ProjectProps) => {
  const {
    img,
    name,
    description,
    techs,
    links: { demonstration, repository },
  } = project;

  return (
    <li className="group box-border flex w-full list-none flex-col overflow-hidden rounded-md border border-light-blue7 bg-gradient-to-b from-light-blue6 to-light-blue3 to-90% shadow-md transition-opacity hover:border-light-blue8 dark:border-dark-blue7 dark:from-dark-blue6 dark:to-dark-blue3 hover:dark:border-dark-blue8 xs:flex-row xs:hover:!opacity-100 xs:group-hover/list:opacity-50">
      <div className="h-40 border-b border-light-blue7 group-hover:border-light-blue8 dark:border-dark-blue7 group-hover:dark:border-dark-blue8 xs:w-3/6 xs:border-0 xs:p-3 lg:w-2/3">
        <Image
          src={img}
          alt={`Imagem de demonstração do projeto ${name}`}
          className="h-full w-full object-cover object-center group-hover:border-light-blue8 group-hover:dark:border-dark-blue8 xs:aspect-video xs:rounded-md xs:border-2 xs:border-light-blue7 xs:dark:border-dark-blue7"
        />
      </div>
      <div className="xs:w-full">
        <div className="flex flex-grow flex-col justify-between gap-3 p-3">
          <h2 className="text-xl font-semibold group-hover:text-light-blue11 group-hover:dark:text-dark-blue11">
            {name}
          </h2>
          <p className="flex-grow text-sm leading-normal opacity-70">
            {description}
          </p>
          <div className="border-b border-light-blue6 dark:border-dark-blue6" />
          <ul className="flex cursor-default flex-wrap gap-1 text-light-blue12 dark:text-dark-blue12">
            {techs.map((tech, index) => (
              <li
                key={index}
                className="rounded-full bg-light-blue11/30 px-3 py-1.5 text-xs font-medium dark:bg-dark-blue11/30"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <ul className="flex h-10 border-t border-light-blue7 group-hover:border-light-blue8 dark:border-dark-blue7 group-hover:dark:border-dark-blue8 xs:border-0">
          <li className="flex flex-grow items-center justify-center border-r border-light-blue7 group-hover:border-light-blue8 dark:border-dark-blue7 group-hover:dark:border-dark-blue8 xs:overflow-hidden xs:rounded-tl-md xs:border-l xs:border-t">
            {demonstration ? (
              <a
                href={demonstration}
                target="_blank"
                className="btn-style flex h-full flex-grow items-center justify-center gap-2 font-medium"
              >
                Demonstração
              </a>
            ) : (
              <span className="flex h-full flex-grow cursor-not-allowed items-center justify-center bg-gray-100 font-medium dark:bg-gray-800">
                Indisponível
              </span>
            )}
          </li>
          <li className="flex flex-grow items-center justify-center group-hover:border-light-blue8 group-hover:dark:border-dark-blue8 xs:border-t xs:border-light-blue7 xs:dark:border-dark-blue7">
            <a
              href={repository!}
              target="_blank"
              className="btn-style flex h-full flex-grow items-center justify-center gap-2 font-medium"
            >
              Repositório <BsGithub />
            </a>
          </li>
        </ul>
      </div>
    </li>
  );
};
