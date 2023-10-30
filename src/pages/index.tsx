import * as C from "@/components";
import ScrollSpy from "react-ui-scrollspy";
import { inter } from "@/fonts";
import Head from "next/head";

const Home = () => {
  return (
    <div
      className={`${inter.className} bg-light-blue2 text-light-blue12 dark:bg-dark-blue2 dark:text-dark-blue12 bg-mobile bg-no-repeat bg-contain md:bg-tablet lg:bg-desktop lg:bg-fixed`}
    >
      <Head>
        <title>Diego Lima</title>
      </Head>
      <div className="lg:min-h-screen lg:max-w-7xl lg:m-auto lg:px-16">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <div className="lg:max-h-screen lg:w-2/5 lg:sticky lg:top-0 lg:py-24">
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
