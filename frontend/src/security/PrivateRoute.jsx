import React, { Suspense, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
// import axios from '../axios';

function PrivateRoute({ children, route }) {

  // ** Hooks & Vars
  const userToken = localStorage.getItem('userToken');

  const user = {}

  const getUser = async () => {
    try {
      console.log('token api data');

      if (userToken) {
        // const { data } = await axios.get('/api/data', {
        //   headers: { authorization: userToken },
        // });
        // console.log(data);
        // dispatch(login(data));
      }
    } catch (error) {
      console.log(error);
      return <Navigate to="/login" />;
    }
  };

  // ** check user token is here or not
  useEffect(() => {
    if (userToken) {
      getUser();
    }
  }, [userToken]);

  if (route) {
    let restrictedRoute = false;

    if (route.meta) {
      restrictedRoute = route.meta.restricted;
    }

    if (!userToken) return <Navigate to="/login" />;
    if (!user) return <Navigate to="/login" />;
  }

  return <Suspense fallback={null}>{children}</Suspense>;
}

export default PrivateRoute;
