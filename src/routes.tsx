import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes as ReactRoutes,
  Link,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import PageNotFound from './error/page-not-found';
import SignIn from './pages/sign-in/sign-in';
import SignUp from './pages/sign-up/sign-up';
import RequireAuth from './components/require-auth/RequireAuth';
import ProductHome from './components/product-home/ProductHome';
import AuthLayout from './layouts/AuthLayout';
import Dashboard from './pages/dashboard/dashboard';

const Routes: React.FC = () => {
  return (
    <Router>
      <ReactRoutes>
        <Route path='/' element={<MainLayout />}>
          {/* Public routes */}
          <Route index element={<SignIn />} />
          <Route index path='login' element={<SignIn />} />
          <Route path='register' element={<SignUp />} />
          <Route path='*' element={<PageNotFound />} />

          {/* Private routes */}
          <Route element={<RequireAuth />}>
            <Route path='/user' element={<AuthLayout />}>
              <Route path='welcome' element={<Dashboard />} />
              <Route path='products' element={<ProductHome />} />
            </Route>
          </Route>
        </Route>
      </ReactRoutes>
    </Router>
  );
};

export default Routes;
