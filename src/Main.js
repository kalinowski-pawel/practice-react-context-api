import React, {useContext} from "react";
import ThemeContext from "./context/ThemeContext";
import {AppTheme} from "./Colors";

export const Main = () => {
  const themeMode = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[themeMode];
  return(
    <main style = {{
      padding: "1rem",
      backgroundColor: `${currentTheme.backgroundColor}`,
      color: `${currentTheme.textColor}`,

    }}>
      <h1>Heading 1</h1>
      <p>This is a paragraph</p>

    </main>
  );
}
