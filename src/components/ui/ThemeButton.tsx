import { useEffect, useState } from "react";
import * as Icon from "react-icons/bs";
import { parseCookies, setCookie } from "nookies";

export const ThemeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const cookies = parseCookies();
    const storedTheme = cookies["isDarkMode"];
    return storedTheme === "true";
  });
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    setCookie(null, "isDarkMode", String(isDarkMode));
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
      {isDarkMode && isClient ? <Icon.BsFillMoonStarsFill /> : <Icon.BsFillSunFill />}
    </button>
  );
};
