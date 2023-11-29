import * as C from "@/components";
import ScrollSpy from "react-ui-scrollspy";
import { inter } from "@/fonts";
import Head from "next/head";

const Home = () => {
  return (
    <div
      className={`${inter.className} bg-light-blue2 bg-mobile bg-contain bg-no-repeat text-light-blue12 dark:bg-dark-blue2 dark:text-dark-blue12 md:bg-tablet lg:bg-desktop lg:bg-fixed`}
    >
      <Head>
        <title>Diego Lima</title>
        <meta
          name="description"
          content="Diego Lima é um desenvolvedor Full Stack júnior que busca criar produtos acessíveis e inclusivos, proporcionando experiências digitais de qualidade para a web."
        />
        <meta name="author" content="Diego Lima" />
        <meta property="og:title" content="Diego Lima" />
        <meta property="og:site_name" content="Diego Lima" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta
          property="og:description"
          content="Diego Lima é um desenvolvedor Full Stack júnior que busca criar produtos acessíveis e inclusivos, proporcionando experiências digitais de qualidade para a web."
        />
      </Head>
      <div className="lg:m-auto lg:min-h-screen lg:max-w-7xl lg:px-16">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <div className="lg:sticky lg:top-0 lg:max-h-screen lg:w-2/5 lg:py-24">
            <C.ThemeButton />
            <C.Header />
          </div>
          <div className="lg:w-3/5 lg:py-24">
            <main>
              <ScrollSpy scrollThrottle={100} updateHistoryStack={false}>
                <C.About />
                <C.Techs />
                <C.Projects />
              </ScrollSpy>
            </main>
            <C.Footer />
            <C.BackToTopButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
