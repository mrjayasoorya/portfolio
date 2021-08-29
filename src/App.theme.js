import React from "react";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@material-ui/core";

import { ThemeContext } from "./contexts";
import { themes } from "./utils";

const AppTheme = (props) => {
  let [theme, setTheme] = React.useState({
    name: themes.default,
  });

  const giveMeTheme = () => {
    let current_theme_json;

    //Geting the theme json for  the selected theme
    switch (theme.name) {
      case themes.default:
        current_theme_json = require("./theme/theme.json");
        break;

      default:
        current_theme_json = require("./theme/theme.json");
        break;
    }

    //Creating a Theme with json
    let current_theme = createTheme(current_theme_json);

    //Making theme work with responsive font size
    current_theme = responsiveFontSizes(current_theme);

    return current_theme;
  };

  return (
    <ThemeContext.Provider value={{ ...theme, setTheme }}>
      <ThemeProvider theme={giveMeTheme()}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default AppTheme;
