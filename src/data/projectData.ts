import { ProjectData } from "../types/projectTypes";
import * as Img from "../../public";

export const projectData: ProjectData[] = [
  {
    id: 0,
    img: Img.projectHbf,
    name: "Human Benchmark - Front End",
    description:
      "Esta aplicação permite que os usuários se registrem, façam login e joguem três jogos diferentes desenvolvidos em canvas, além de registrar suas pontuações quando estiverem autenticados.",
    techs: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Zod",
      "Zustand",
      "Axios",
      "Tailwind CSS",
    ],
    links: {
      demonstration: "https://humanbenchmarknext.vercel.app/",
      repository: "https://github.com/Typhonn003/human_benchmark",
    },
  },
  {
    id: 1,
    img: Img.projectHbb,
    name: "Human Benchmark - Back End",
    description:
      "Esta API foi construída exclusivamente para atender a nossa aplicação front-end. Ela permite realizar um CRUD completo de usuários, pontuações e jogos, além de oferecer rotas autenticadas para usuários e administradores.",
    techs: ["Node.js", "Express.js", "TypeScript", "Prisma", "Zod"],
    links: {
      demonstration: null,
      repository: "https://github.com/Typhonn003/human_benchmark_api",
    },
  },
  {
    id: 2,
    img: Img.projectTh,
    name: "Tech Hub V3",
    description:
      "A aplicação possibilita o cadastro e login de usuários, com acesso restrito à dashboard mediante autenticação, além de permitir a adição de tecnologias personalizadas ao perfil do usuário.",
    techs: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: {
      demonstration: "https://tech-hub-next.vercel.app",
      repository: "https://github.com/Typhonn003/tech_hub_next",
    },
  },
  {
    id: 3,
    img: Img.projectHl,
    name: "HubLinkup - Back End",
    description:
      "Essa API tem um sistema completo de gerenciamento de usuários, incluindo operações CRUD, e recursos para gerenciar contatos associados a eles, com rotas autenticadas para segurança.",
    techs: ["Node.js", "Nest.js", "TypeScript", "Prisma"],
    links: {
      demonstration: null,
      repository: "https://github.com/Typhonn003/HubLinkup_back",
    },
  },
  {
    id: 4,
    img: Img.projectLom,
    name: "League of Match",
    description:
      "Essa aplicação foi um trabalho em equipe, na qual criamos uma página voltada para jogadores de League of Legends, com o objetivo de facilitar a busca por novos parceiros de jogo.",
    techs: ["React", "TypeScript", "Styled Components"],
    links: {
      demonstration: "https://league-of-match-steel.vercel.app/",
      repository: "https://github.com/Typhonn003/react-league-of-match",
    },
  },
  {
    id: 5,
    img: Img.projectNk,
    name: "Nu Klone V2",
    description:
      "O projeto é uma aplicação simples de finanças, permitindo acesso à dashboard, cadastro de entradas e saídas de valores, além de visualização do saldo total em conta.",
    techs: ["React", "TypeScript", "CSS3"],
    links: {
      demonstration: "https://nuklone.vercel.app/",
      repository: "https://github.com/Typhonn003/nu_klone",
    },
  },
  {
    id: 6,
    img: Img.projectGcc,
    name: "Gimba Cupons Clone",
    description:
      "Esse projeto faz parte de um antigo teste técnico, no qual foi clonada com exatidão a página original, com foco em mobile first e preservando todas as funcionalidades do projeto original.",
    techs: ["HTML5", "JavaScript", "CSS3"],
    links: {
      demonstration: "https://typhonn003.github.io/gimba_cupons_clone/",
      repository: "https://github.com/Typhonn003/gimba_cupons_clone",
    },
  },
  {
    id: 7,
    img: Img.projectMsa,
    name: "Motor Shop - Back End",
    description:
      "Esta API foi desenvolvida em equipe e oferece um gerenciamento completo de usuários, uma rota de login e acesso protegido para a criação de anúncios e comentários.",
    techs: ["Node.js", "Express.js", "TypeScript", "Prisma"],
    links: {
      demonstration: null,
      repository: "https://github.com/Typhonn003/motor_shop_api",
    },
  },
  {
    id: 8,
    img: Img.projectBk,
    name: "Burguer Kenzie",
    description:
      "Essa página de hamburgueria permite ao usuário cadastrar-se, efetuar login para acessar a página principal e adicionar itens do menu ao carrinho de compras.",
    techs: ["React", "TypeScript", "Styled Components"],
    links: {
      demonstration: "https://react-entrega-hamburgueria-v2-ty.vercel.app/",
      repository: "https://github.com/Typhonn003/react-burguer-kenzie/",
    },
  },
];
