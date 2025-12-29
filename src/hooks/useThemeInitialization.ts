import { useEffect } from "react";

export const useThemeInitialization = () => {
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (!saved) {
      document.documentElement.classList.add("dark");
    }
  }, []);
};
