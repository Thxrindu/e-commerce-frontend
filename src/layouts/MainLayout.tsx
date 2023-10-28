import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <Container fluid className='p-0 overflow-hidden'>
        <div className='main-layout'>
          <section className='main-layout__body'>
            <Outlet />
          </section>
        </div>
      </Container>
    </>
  );
};

export default MainLayout;
