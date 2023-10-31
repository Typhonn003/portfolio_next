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
      className="btn-style fixed right-4 top-4 z-50 rounded-full border border-light-blue7 p-2 text-2xl hover:border-light-blue8 dark:border-dark-blue7 dark:hover:border-dark-blue8 lg:right-6 lg:top-6 lg:shadow-md"
    >
      {theme === "dark" ? <Icon.BsFillMoonStarsFill /> : <Icon.BsFillSunFill />}
    </button>
  );
};
