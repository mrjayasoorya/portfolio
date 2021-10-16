import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Blog from "../screens/blog";
import Home from "../screens/home";
import NotFoundPage from "../screens/notFound";
import { routes } from "./routes";

const Routers = (props) => {
  
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={Home} {...props}/>
        <Route exact path={routes.blog} component={Blog} {...props}/>
        <Route path="*" component={NotFoundPage} {...props}/>
      </Switch>
    </Router>
  );
};

export default Routers;
