import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Layout from "../components/Layouts";
import Users from "../pages/Users";
import Tasks from "../pages/Tasks";
import Stages from "../pages/Stages";

export default function PrivateRoutes() {
  return (
    <Layout>
      <Route path="/" exact component={Dashboard} />
      <Route path="/stages" component={Stages} />
      <Route path="/tasks" component={Tasks} />
      <Route path="/users" component={Users} />
    </Layout>
  );
}
