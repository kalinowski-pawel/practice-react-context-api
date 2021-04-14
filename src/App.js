import React, {useState} from "react";
import ThemeContext from './context/ThemeContext';
import {Main} from "./Main";
import {ThemeDemoComponent} from "./ThemeDemoComponent";

import './App.css';


const App = () => {
  const themeHook = useState("light");
  return (
    <ThemeContext.Provider value={themeHook}>
      <ThemeDemoComponent/>
      <Main/>
    </ThemeContext.Provider>
  );
}

export default App;
