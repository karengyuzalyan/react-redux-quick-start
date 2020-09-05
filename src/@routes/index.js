import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { routes } from './routes';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map(route => (
          <Route {...route} />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
