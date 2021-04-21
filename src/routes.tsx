import React from 'react';
import { Switch } from 'react-router-dom';
import { RouteWithLayout } from './components';
import MainLayout from './layout/MainLayout';
import { Home } from './pages';

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout path="/" component={Home} layout={MainLayout} exact />
    </Switch>
  )
};

export default Routes;
