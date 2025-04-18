import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const Root = () => {
  const location = useLocation();
  const hiddenRoutes = ['/login', '/signup'];
  const hideHeaderFooter = hiddenRoutes.includes(location.pathname);

  return (
    <div>
      {!hideHeaderFooter && <Header />}
      
      <Outlet />
      
      {!hideHeaderFooter && <Footer>footer</Footer>}
    </div>
  );
};

export default Root;
