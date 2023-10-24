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
    <li className="group w-full box-border flex flex-col list-none rounded-md border border-light-blue7 overflow-hidden shadow-md dark:border-dark-blue7 hover:border-light-blue8 hover:dark:border-dark-blue8 xs:flex-row xs:hover:!opacity-100 xs:group-hover/list:opacity-50 transition-opacity bg-gradient-to-b from-light-blue6 to-light-blue3 to-90% dark:from-dark-blue6 dark:to-dark-blue3">
      <div className="h-40 border-b border-light-blue7 dark:border-dark-blue7 xs:w-3/6 xs:p-3 xs:border-0 group-hover:border-light-blue8 group-hover:dark:border-dark-blue8 lg:w-2/3">
        <Image
          src={img}
          alt={`Imagem de demonstração do projeto ${name}`}
          className="w-full h-full object-cover object-center xs:border-2 xs:border-light-blue7 xs:aspect-video xs:rounded-md xs:dark:border-dark-blue7 group-hover:border-light-blue8 group-hover:dark:border-dark-blue8"
        />
      </div>
      <div className="xs:w-full">
        <div className="flex flex-col gap-3 flex-grow justify-between p-3">
          <h2 className="text-xl font-semibold group-hover:text-light-blue11 group-hover:dark:text-dark-blue11">
            {name}
          </h2>
          <p className="flex-grow text-sm leading-normal opacity-70">
            {description}
          </p>
          <div className="border-b border-light-blue6 dark:border-dark-blue6" />
          <ul className="flex flex-wrap gap-1 text-light-blue12 cursor-default dark:text-dark-blue12">
            {techs.map((tech, index) => (
              <li
                key={index}
                className="text-xs px-3 py-1.5 rounded-full bg-light-blue11/30 font-medium dark:bg-dark-blue11/30"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <ul className="flex h-10 border-t border-light-blue7 dark:border-dark-blue7 xs:border-0 group-hover:border-light-blue8 group-hover:dark:border-dark-blue8">
          <li className="flex flex-grow justify-center items-center border-r border-light-blue7 dark:border-dark-blue7 xs:overflow-hidden xs:border-l xs:border-t xs:rounded-tl-md group-hover:border-light-blue8 group-hover:dark:border-dark-blue8">
            {demonstration ? (
              <a
                href={demonstration}
                target="_blank"
                className="btn-style h-full flex flex-grow justify-center items-center gap-2 font-medium"
              >
                Demonstração
              </a>
            ) : (
              <span className="h-full flex flex-grow justify-center items-center font-medium bg-gray-100 dark:bg-gray-800 cursor-not-allowed">
                Indisponível
              </span>
            )}
          </li>
          <li className="flex flex-grow justify-center items-center xs:border-t xs:border-light-blue7 xs:dark:border-dark-blue7 group-hover:border-light-blue8 group-hover:dark:border-dark-blue8">
            <a
              href={repository!}
              target="_blank"
              className="btn-style h-full flex flex-grow justify-center items-center gap-2 font-medium"
            >
              Repositório <BsGithub />
            </a>
          </li>
        </ul>
      </div>
    </li>
  );
};
