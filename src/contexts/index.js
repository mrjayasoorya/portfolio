import React from "react";
import { themes } from "../utils";

export const ThemeContext = React.createContext({
  name: themes.default,
  setTheme: () => null,
});

// export const AuthContext = React.createContext({
//   auth: { email: "", password: "", device: "web", refresh: true },
//   setAuth: () => null,
// });

// export const AlertContext = React.createContext({
//   open: false,
//   severity: alertProps.severity.success,
//   msg: "",
//   vertical: alertProps.vertical.top,
//   horizontal: alertProps.horizontal.center,
//   onclose: () => null,
//   setSnack: () => null,
// });

export const DialogContext = React.createContext({
  open: true,
  title: "",
  body: "",
  positiveBtn: "Ok",
  negativeBtn: "Cancel",
  onOk: () => null,
  setDialog: () => null,
});

// export const BackdropContext = React.createContext({
//   open: true,
//   message: "",
//   setBackDrop: () => null,
// });

// export const DrawerContext = React.createContext({
//   open: true,
//   direction: drawerProps.direction.right,
//   variant: drawerProps.variant.temporary,
//   onClose: () => null,
//   setDrawer: () => null,
// });
