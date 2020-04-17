import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Layout from "../components/Layouts";
import Users from "../pages/Users";

export default function PrivateRoutes() {
  return (
    <Layout>
      <Route path="/" exact component={Dashboard} />
      <Route path="/users" component={Users} />
    </Layout>
  );
}
