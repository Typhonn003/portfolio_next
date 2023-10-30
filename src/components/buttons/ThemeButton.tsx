import * as Icon from "react-icons/bs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Mude o tema da página"
      className="btn-style border border-light-blue7 text-2xl p-2 rounded-full fixed top-4 right-4 z-50 hover:border-light-blue8 dark:border-dark-blue7 dark:hover:border-dark-blue8 lg:shadow-md lg:top-6 lg:right-6"
    >
      {theme === "dark" ? <Icon.BsFillMoonStarsFill /> : <Icon.BsFillSunFill />}
    </button>
  );
};
