import React from 'react'
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const RouteWithLayout = (props: any) => {
  const { layout: Layout, component: Component, ...rest } = props;

  return (
    <Route render={(matchProps: any) => (
      <Layout>
        <Component {...matchProps} />
      </Layout>
    )} {...rest} />
  )
};

RouteWithLayout.propTypes = {
  layout: PropTypes.any,
  component: PropTypes.any,
  exact: PropTypes.bool,
  path: PropTypes.string
}

export default RouteWithLayout;
