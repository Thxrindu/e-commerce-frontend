import { Container } from 'react-bootstrap';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './header/header';
import { useEffect, useState } from 'react';

const MainLayout = () => {
  const location = useLocation();

  const [navBarVisibility, setNavBarVisibility] = useState(true);

  useEffect(() => {
    if (location.pathname === '/login' || location.pathname === '/register') {
      setNavBarVisibility(false);
    } else {
      setNavBarVisibility(true);
    }
  }, [location]);

  return (
    <>
      <Container fluid className='p-0 overflow-hidden'>
        <div className='main-layout'>
          <Header display={navBarVisibility} />
          <section className='main-layout__body'>
            <Outlet />
          </section>
        </div>
      </Container>
    </>
  );
};

export default MainLayout;
