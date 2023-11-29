import { useEffect, useState } from "react";
import { SlArrowUp } from "react-icons/sl";

export const BackToTopButton = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled: number = document.documentElement.scrollTop;
      scrolled > 400 ? setVisible(true) : setVisible(false);
    };

    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      data-visible={visible}
      aria-label="Volte ao topo da página"
      className="btn-style fixed bottom-4 right-4 z-50 hidden rounded-md border border-light-blue7 p-2 text-2xl shadow-md hover:border-light-blue8 data-[visible=true]:block dark:border-dark-blue7 dark:hover:border-dark-blue8 lg:bottom-6 lg:right-6"
    >
      <SlArrowUp />
    </button>
  );
};
