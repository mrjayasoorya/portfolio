import { CssBaseline } from "@material-ui/core";
import React from "react";
import "./App.css";
import AppDialog from "./App.dialog";
import AppTheme from "./App.theme";
import Routers from "./routes";
const App = (props) => {
  return (
    <AppTheme>
      <AppDialog>
        <CssBaseline />
        <Routers {...props} />
      </AppDialog>
    </AppTheme>
  );
};

export default App;
