import { SectionTitle } from "../layout/SectionTitle";

export const About = () => {
  return (
    <section className="pb-6 lg:pb-24" id="about">
      <SectionTitle title="Sobre mim" />
      <article className="container-width m-auto flex flex-col gap-6 text-base leading-normal text-light-blue12/70 dark:text-dark-blue12/70 lg:w-full">
        <p>
          Meu primeiro contato com a tecnologia ocorreu durante a minha
          infância, quando meu pai me levou a uma LAN house pela primeira vez.
          Ver todos aqueles computadores, repletos de jogos e possibilidades
          quase infinitas, me deixou completamente hipnotizado. Daquele dia em
          diante, não os deixei de lado nem por um único dia sequer.
        </p>
        <p>
          Aos 26 anos, meu irmão me incentivou a estudar o básico de
          desenvolvimento web. Alguns meses depois, um amigo que já atuava na
          área sugeriu que eu estudasse na incrível{" "}
          <a
            href="https://kenzie.com.br/"
            target="_blank"
            className="font-medium text-light-blue12 hover:underline hover:text-light-blue11 dark:text-dark-blue12 dark:hover:text-dark-blue11"
          >
            Kenzie Academy Brasil
          </a>
          . Eles oferecem um curso fantástico que abrange desde os fundamentos
          até tecnologias avançadas de front end e back end, além de
          proporcionar treinamento em soft skills e hard skills.
        </p>
        <p>
          Hoje, sou um desenvolvedor full stack formado pela Kenzie Academy
          Brasil. Durante mais de 2 mil horas de estudos intensos, tive a
          oportunidade de conhecer pessoas, criar mais de 40 projetos, tanto
          individuais quanto em grupo, o que me permitiu adquirir experiência em
          diversas tecnologias. Agora, estou em busca da minha primeira
          oportunidade para colocar meu talento e conhecimento à prova,
          transformando desafios em soluções inovadoras e contribuindo de
          maneira significativa no mundo do desenvolvimento.
        </p>
      </article>
    </section>
  );
};
