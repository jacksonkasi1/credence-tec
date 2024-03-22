// ** React Imports
import { Fragment } from 'react';
import { useLocation } from 'react-router-dom';

// ** Route Components
import PublicRoute from '../../security/PublicRoute';

import PrivateRoute from '../../security/PrivateRoute';

// ** import Route Pages
import { isObjEmpty } from '../../utils/index';

import authRoute from '../../configs/router.config';

// ** Layouts
import BlankLayout from '../../layouts/BlankLayout';
import HorizontalLayout from '../../layouts/HorizontalLayout';

// ** import the animation library
import { CSSTransition, SwitchTransition } from 'react-transition-group';


const getLayout = {
  blank: <BlankLayout />,
  horizontal: <HorizontalLayout />,
};

// ** Merge Routes
const Routes = [...authRoute];

const getRouteMeta = (route) => {
  if (isObjEmpty(route.element.props)) {
    if (route.meta) {
      return { routeMeta: route.meta };
    }
    return {};
  }
};

// ** Return Filtered Array of Routes & Paths
const MergeLayoutRoutes = (layout, defaultLayout) => {
  const location = useLocation();
  const { nodeRef } =
    Routes.find((route) => route.path === location.pathname) ?? {};
  const LayoutRoutes = [];

  if (Routes) {
    Routes.filter((route) => {
      let isBlank = false;
      // ** Checks if Route layout or Default layout matches current layout
      if (
        (route.meta && route.meta.layout && route.meta.layout === layout) ||
        ((route.meta === undefined || route.meta.layout === undefined) &&
          defaultLayout === layout)
      ) {
        let RouteTag = PublicRoute // PrivateRoute;

        // ** Check for public or private route
        if (route.meta) {
          route.meta?.layout === 'blank' ? (isBlank = true) : (isBlank = false);
          RouteTag = route.meta?.publicRoute && PublicRoute;
        //   : PrivateRoute
        }
        if (route.element) {
          const Wrapper =
            // eslint-disable-next-line multiline-ternary
            isObjEmpty(route.element.props) && isBlank === false
              ? // eslint-disable-next-line multiline-ternary
                Fragment
              : Fragment;

          route.element = (
            <Wrapper {...(isBlank === false ? getRouteMeta(route) : {})}>
              <SwitchTransition>
                <CSSTransition
                  key={location.pathname}
                  nodeRef={nodeRef}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  <RouteTag route={route}>
                    <div ref={nodeRef}>{route.element}</div>
                  </RouteTag>
                </CSSTransition>
              </SwitchTransition>
            </Wrapper>
          );
        }

        // Push route to LayoutRoutes
        LayoutRoutes.push(route);
      }
      return LayoutRoutes;
    });
  }
  return LayoutRoutes;
};

const getRoutes = () => {
  const defaultLayout = 'horizontal';
  const layouts = ['horizontal', 'blank'];

  const AllRoutes = [];

  layouts.forEach((layoutItem) => {
    const LayoutRoutes = MergeLayoutRoutes(layoutItem, defaultLayout);

    AllRoutes.push({
      path: '/',
      element: getLayout[layoutItem] || getLayout[defaultLayout],
      children: LayoutRoutes,
    });
  });
  return AllRoutes;
};

export { Routes, getRoutes };
