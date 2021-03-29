import React from "react";
import { Redirect, Route, Switch } from "react-router";
import urls from "../config/urls";
import DashboardScreen from "../screens/DashboardScreen";

export default function UserRoutes() {
  return (
    <Switch>
      <Route path={urls.dashboard}>
        <DashboardScreen />
      </Route>
      <Route path="*">
        <Redirect to={urls.dashboard} />
      </Route>
    </Switch>
  );
}
