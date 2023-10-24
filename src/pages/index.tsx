import * as C from "@/components";
import ScrollSpy from "react-ui-scrollspy";

export default function Home() {
  return (
    <div className="bg-light-blue2 text-light-blue12 dark:bg-dark-blue2 dark:text-dark-blue12">
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
}
