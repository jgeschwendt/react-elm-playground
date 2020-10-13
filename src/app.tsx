import React, { Fragment, Suspense, lazy } from 'react';
import { RouteConfig, RouteConfigComponentProps, renderRoutes } from 'react-router-config';
import { BrowserRouter, Switch } from 'react-router-dom';

import { default as Home } from './pages/Home';

const ElmPlayground = lazy(() => import('./pages/Playground/Elm'));

const RootTemplate = ({ route }: RouteConfigComponentProps): JSX.Element => (
  <Fragment>
    {renderRoutes(route.routes)}
  </Fragment>
);

export const routes: RouteConfig[] = [
  {
    component: RootTemplate,
    routes: [
      {
        component: Home,
        exact: true,
        path: "/",
      },
      {
        component: ElmPlayground,
        exact: true,
        path: '/playground/elm',
      },
    ],
  },
];

export const App = (): JSX.Element => (
  <BrowserRouter>
    <Suspense fallback={null}>
      <Switch>
        {renderRoutes(routes)}
      </Switch>
    </Suspense>
  </BrowserRouter>
);
