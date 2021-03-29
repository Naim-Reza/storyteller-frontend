import React from "react";
import { Redirect, Route, Switch } from "react-router";
import TopNav from "../components/TopNav";
import urls from "../config/urls";
import AddStoryScreen from "../screens/AddStoryScreen";
import DashboardScreen from "../screens/DashboardScreen";
import EditStoryScreen from "../screens/EditStoryScreen";
import StoriesScreen from "../screens/StoriesScreen";

export default function UserRoutes() {
  return (
    <>
      <TopNav />
      <Switch>
        <Route path={urls.dashboard} exact>
          <DashboardScreen />
        </Route>
        <Route path={urls.stroies} exact>
          <StoriesScreen />
        </Route>
        <Route path={urls.addnewstory} exact>
          <AddStoryScreen />
        </Route>
        <Route path={urls.editStory} exact>
          <EditStoryScreen />
        </Route>
        <Route path="*">
          <Redirect to={urls.dashboard} />
        </Route>
      </Switch>
    </>
  );
}
