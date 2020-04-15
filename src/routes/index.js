import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import Users from "../pages/Users";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={PrivateRoutes} />
        <Route path="/users" exact component={Users} />
      </Switch>
    </BrowserRouter>
  );
}
