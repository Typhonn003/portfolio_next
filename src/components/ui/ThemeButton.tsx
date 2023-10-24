import { useEffect, useState } from "react";
import * as Icon from "react-icons/bs";
import * as Img from "../../img";

export const ThemeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem("isDarkMode");
    return storedDarkMode === "true";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("isDarkMode", String(isDarkMode));

    const favicon = document.querySelector<HTMLLinkElement>(
      'link[rel="shortcut icon"]'
    );

    if (isDarkMode) {
      favicon!.href = Img.favIconDark;
    } else {
      favicon!.href = Img.favIcon;
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((oldValue) => !oldValue);
  };

  return (
    <button
      onClick={toggleDarkMode}
      aria-label="Mude o tema da página"
      className="btn-style border border-light-blue7 text-2xl p-2 rounded-full fixed top-4 right-4 z-50 hover:border-light-blue8 dark:border-dark-blue7 dark:hover:border-dark-blue8 lg:shadow-md lg:top-6 lg:right-6"
    >
      {isDarkMode ? <Icon.BsFillMoonStarsFill /> : <Icon.BsFillSunFill />}
    </button>
  );
};
