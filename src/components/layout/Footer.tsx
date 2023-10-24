export const Footer = () => {
  return (
    <footer className="container-width m-auto text-center text-sm leading-normal text-light-blue12/70 pb-10 dark:text-dark-blue12/70 lg:w-full lg:text-left lg:pb-0">
      <div className="lg:flex lg:flex-wrap">
        <p className="lg:mr-1">
          Desenvolvido por{" "}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/typhonn003/"
            className="font-medium text-light-blue12 hover:underline hover:text-light-blue11 dark:text-dark-blue12 dark:hover:text-dark-blue11"
          >
            Diego Lima
          </a>
          .
        </p>
        <p>
          Construído em{" "}
          <a
            target="_blank"
            href="https://react.dev/"
            className="font-medium text-light-blue12 hover:underline hover:text-light-blue11 dark:text-dark-blue12 dark:hover:text-dark-blue11"
          >
            React
          </a>{" "}
          e{" "}
          <a
            target="_blank"
            href="https://tailwindcss.com/"
            className="font-medium text-light-blue12 hover:underline hover:text-light-blue11 dark:text-dark-blue12 dark:hover:text-dark-blue11"
          >
            Tailwind CSS
          </a>
          .
        </p>
        <p>
          Inspirado no incrível trabalho de{" "}
          <a
            target="_blank"
            href="https://brittanychiang.com/"
            className="font-medium text-light-blue12 hover:underline hover:text-light-blue11 dark:text-dark-blue12 dark:hover:text-dark-blue11"
          >
            Brittany C
          </a>
          .
        </p>
      </div>
      <p className="self-end">© Diego Lima 2023</p>
    </footer>
  );
};
