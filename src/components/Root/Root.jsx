import React, { Fragment } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";
import Callback from "../Callback";
import Accounts from "../Accounts";
import Login from "../Login";
import { Nav } from "../Nav/Nav";
import NotFound from "../NotFound";

export const Root = () => {
  return (
    <main>
      <Nav />
      <Accounts />
    </main>
  );
};
