import React from "react";
import {ThemeToggler} from "./ThemeToggler";

const componentStyles = {
  padding: "1rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
}

export const ThemeDemoComponent = () => {
  return (
    <div styles={componentStyles}>
      <h1>This is a theme demo component.</h1>
      <ThemeToggler/>
    </div>
  )
}
