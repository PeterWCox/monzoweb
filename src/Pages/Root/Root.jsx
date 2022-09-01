import React, { Fragment } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Callback from '../Callback/Callback';
import Accounts from '../Accounts/Accounts';
import Login from '../Login/Login';
import { Nav } from '../../components/Nav/Nav';
import NotFound from '../NotFound/NotFound';

export const Root = () =>
{
  return (
    <Fragment>
      <main>

        {/* Navbar */}
        <ProtectedRoute path="/accounts" component={Nav} />

        <Switch>

          {/* Redirect to Accounts if access token exists, else to login page */}
          <Route
            path="/"
            render={() => <Redirect to={localStorage.monzo_access_token ? '/accounts' : '/login'} />}
            exact
          />

          {/* Accounts Page */}
          <ProtectedRoute path="/Accounts" component={Accounts} />

          {/* Login Page */}
          <Route path="/login" component={Login} />

          {/* Page Monzo refer you to after visiting URL in Email */}
          <Route path="/callback" component={Callback} />



          {/* If no matches,  */}
          <Route component={NotFound} />

        </Switch>
      </main>
    </Fragment>
  );
}

