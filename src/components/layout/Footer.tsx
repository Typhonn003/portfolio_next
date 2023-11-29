export const Footer = () => {
  return (
    <footer className="container-width m-auto pb-10 text-center text-sm leading-normal text-light-blue12/70 dark:text-dark-blue12/70 lg:w-full lg:pb-0 lg:text-left">
      <div className="lg:flex lg:flex-wrap">
        <p className="lg:mr-1">
          Desenvolvido por{" "}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/typhonn003/"
            className="font-medium text-light-blue12 hover:text-light-blue11 hover:underline dark:text-dark-blue12 dark:hover:text-dark-blue11"
          >
            Diego Lima
          </a>
          .
        </p>
        <p>
          Construído em{" "}
          <a
            target="_blank"
            href="https://nextjs.org/"
            className="font-medium text-light-blue12 hover:text-light-blue11 hover:underline dark:text-dark-blue12 dark:hover:text-dark-blue11"
          >
            Next.js
          </a>{" "}
          e{" "}
          <a
            target="_blank"
            href="https://tailwindcss.com/"
            className="font-medium text-light-blue12 hover:text-light-blue11 hover:underline dark:text-dark-blue12 dark:hover:text-dark-blue11"
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
            className="font-medium text-light-blue12 hover:text-light-blue11 hover:underline dark:text-dark-blue12 dark:hover:text-dark-blue11"
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
