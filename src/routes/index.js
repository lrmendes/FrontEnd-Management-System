import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={PrivateRoutes} />
      </Switch>
    </BrowserRouter>
  );
}
