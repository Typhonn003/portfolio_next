import { sectionData } from "../../data";

export const NavBar = () => {
  return (
    <nav
      className="hidden lg:block lg:mt-12"
      aria-label="Lista de links para rolar até determinadas seções"
    >
      <ul className="flex flex-col gap-4">
        {sectionData.map(({ id, sectionName }) => (
          <li className="flex" key={id}>
            <a
              href={"#" + id}
              className="group flex gap-4 items-center font-poppins"
              aria-label={`Rola a página até a seção ${sectionName.toLocaleLowerCase()}`}
            >
              <span
                data-to-scrollspy-id={id}
                className="w-[30px] h-[2px] bg-light-blue12 group-hover:w-[70px] group-hover:bg-light-blue11 transition-all dark:bg-dark-blue12 group-hover:dark:bg-dark-blue11"
              />
              <span className="uppercase font-semibold group-hover:text-light-blue11 group-hover:dark:text-dark-blue11">
                {sectionName}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
