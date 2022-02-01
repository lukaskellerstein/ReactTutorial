import React, { ReactNode, useState } from "react";
import { ThemeContext } from "../contexts/theme.context";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeState, setThemeState] = useState("green");

  const setTheme = (theme: string) => {
    setThemeState(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme: themeState, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
