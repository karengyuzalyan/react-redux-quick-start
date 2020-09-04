import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

const PageRoutes = ({ routes, additionalProps }) => {
  return (
    <Switch>
      {routes.map(route => (
        <Route
          key={route.key}
          path={route.path}
          render={props =>
            React.createElement(route.component, {
              ...props,
              additionalProps,
            })
          }
        />
      ))}
    </Switch>
  );
};

PageRoutes.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      path: PropTypes.string,
      isStatic: PropTypes.bool,
      component: PropTypes.element,
    }),
  ).isRequired,
  additionalProps: PropTypes.shape({
    onPageRendered: PropTypes.func,
  }),
};

export default PageRoutes;
