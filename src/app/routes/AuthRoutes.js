import React from "react";
import { Redirect, Route, Switch } from "react-router";
import urls from "../config/urls";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

export default function AuthRoutes() {
  return (
    <Switch>
      <Route path={urls.login}>
        <LoginScreen />
      </Route>
      <Route path={urls.register}>
        <RegisterScreen />
      </Route>
      <Route path="*">
        <Redirect to={urls.login} />
      </Route>
    </Switch>
  );
}
