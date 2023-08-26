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
    <Fragment>
      <main>
        <Route path="/accounts" component={Nav} />
        <Switch>
          {/* <Route
            path="/"
            // render={() => <Redirect to={localStorage.monzo_access_token ? '/accounts' : '/login'} />}
            render={() => <Redirect to={"/accounts"} />}
            exact
          /> */}
          {/* <Route path="/login" component={Login} /> */}
          {/* <Route path="/callback" component={Callback} />
          <Route path="/accounts" component={Accounts} />
          <Route component={NotFound} /> */}
          <Route path="/accounts" component={Accounts} />
        </Switch>
      </main>
    </Fragment>
  );
};
