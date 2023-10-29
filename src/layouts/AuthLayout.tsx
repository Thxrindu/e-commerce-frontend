import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <>
      <Container fluid className='p-0 overflow-hidden'>
        <div className='auth-layout'>
          <section className='auth-layout__body'>
            <Outlet />
          </section>
        </div>
      </Container>
    </>
  );
};

export default AuthLayout;
