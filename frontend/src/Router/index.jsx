import { useEffect } from 'react';
import { useLocation, useNavigate, useRoutes } from 'react-router-dom';

import { getRoutes } from './routes';

// theme config
import { themeConfig } from '../configs/theme.config';

const Router = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);

    // redirect to root url
    if (location.pathname === '/') {
      navigate(themeConfig.root);
    }
  }, [location.pathname]);

  const allRoutes = getRoutes();

  const routes = useRoutes([...allRoutes]);

  return routes;
};

export default Router;
