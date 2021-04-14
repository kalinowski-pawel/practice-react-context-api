import React, {useContext} from "react";
import ThemeContext from "./context/ThemeContext";

const themeTogglerStyle = {
  cursor: "pointer"
}
export const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  return (
    <button style={themeTogglerStyle} onClick={() => {setThemeMode(themeMode === 'light' ? 'dark' : 'light')}}>
      <span title='switch theme' >
        {themeMode === 'light'? 'dark': 'light'}
      </span>
    </button>
  );
}
