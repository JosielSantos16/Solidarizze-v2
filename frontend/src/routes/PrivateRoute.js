import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useUser } from '../hooks/userContext';

export const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useUser();
  const location = useLocation();
  
  const userData = localStorage.getItem('solidarizze:userData');

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (!isAuthenticated || !userData) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};



PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired, 
};

export const PrivateRouteElement = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useUser();
  const location = useLocation();
  const userData = localStorage.getItem('solidarizze:userData');

  return isAuthenticated && userData ? (
    <Element {...rest} />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

PrivateRouteElement.propTypes = {
  element: PropTypes.elementType.isRequired,
};