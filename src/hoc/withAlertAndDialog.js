import React from "react";
import {DialogContext} from "../contexts";

const withAlelrtAndDialog = (Component) => (props) => {
  // const alert = React.useContext(AlertContext);
  const dialog = React.useContext(DialogContext);
  // const backDrop = React.useContext(BackdropContext);
  // const drawer = React.useContext(DrawerContext);
  // const auth = React.useContext(AuthContext);

  return (
    <Component {...props} dialog={dialog} >
      {props.children}
    </Component>
  );
};

export default withAlelrtAndDialog;
