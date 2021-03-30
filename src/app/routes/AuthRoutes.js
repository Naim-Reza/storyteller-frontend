import React from "react";
import { Redirect, Route, Switch } from "react-router";
import WebNav from "../components/WebNav";
import urls from "../config/urls";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import StoriesScreen from "../screens/StoriesScreen";

export default function AuthRoutes() {
  return (
    <>
      <WebNav />
      <Switch>
        <Route path={urls.root} exact>
          <HomeScreen />
        </Route>
        <Route path={urls.stroies} exact>
          <StoriesScreen />
        </Route>
        <Route path={urls.login} exact>
          <LoginScreen />
        </Route>
        <Route path={urls.register} exact>
          <RegisterScreen />
        </Route>
        <Route path="*">
          <Redirect to={urls.login} />
        </Route>
      </Switch>
    </>
  );
}
