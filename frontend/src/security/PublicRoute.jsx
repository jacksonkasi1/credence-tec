import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

function PublicRoute({ children }) {
  return <Suspense fallback={null}>{children}</Suspense>;
}

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PublicRoute;
