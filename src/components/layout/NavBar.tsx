import { sectionData } from "../../data";

export const NavBar = () => {
  return (
    <nav
      className="hidden lg:mt-12 lg:block"
      aria-label="Lista de links para rolar até determinadas seções"
    >
      <ul className="flex flex-col gap-4">
        {sectionData.map(({ id, sectionName }) => (
          <li className="flex" key={id}>
            <a
              href={"#" + id}
              className="group flex items-center gap-4"
              aria-label={`Rola a página até a seção ${sectionName.toLocaleLowerCase()}`}
            >
              <span
                data-to-scrollspy-id={id}
                className="h-[2px] w-[30px] bg-light-blue12 transition-all group-hover:w-[70px] group-hover:bg-light-blue11 dark:bg-dark-blue12 group-hover:dark:bg-dark-blue11"
              />
              <span className="font-semibold uppercase group-hover:text-light-blue11 group-hover:dark:text-dark-blue11">
                {sectionName}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
