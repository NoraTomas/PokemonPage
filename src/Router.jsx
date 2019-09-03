import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Home from './components/Home';


export const Router = () => (
  <Switch>
    <Route path="/home" component={Home} />
    <Redirect from="/" exact to="/home" />
  </Switch>
);
export default Router;