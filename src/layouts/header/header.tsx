import styles from './header.module.scss';
import { Col, Container, Row } from 'react-bootstrap';
import { BsChevronDown } from 'react-icons/bs';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../features/auth/authSlice';

interface IProps {
  display: boolean;
}

const Header = (props: IProps) => {
  const token = useSelector(selectCurrentToken);
  const { display } = props;
  const navigate = useNavigate();

  return (
    <Row
      className={`justify-content-center align-items-center ${
        styles.navbarContainer
      } ${display ? '' : 'd-none'}`}
    >
      <Col className='col-12'>
        <Container>
          <Row>
            <Col>
              <Row>
                <Col
                  className={`${styles.navbarContainer__heading} col-6 d-flex justify-content-start`}
                >
                  Welcome to OrelBuy
                </Col>
                <Col className='col-6 d-flex justify-content-end text-nowrap'>
                  <Row>
                    {token ? (
                      <Col className={`${styles.navbarContainer__heading}`}>
                        Track my order <BsChevronDown />
                      </Col>
                    ) : (
                      <>
                        <Col
                          className={`${styles.navbarContainer__heading} cursor-pointer`}
                          onClick={() => {
                            navigate('/login');
                          }}
                        >
                          Log in
                        </Col>
                        <Col
                          className={`${styles.navbarContainer__heading} cursor-pointer`}
                          onClick={() => {
                            navigate('/register');
                          }}
                        >
                          Sign up
                        </Col>
                      </>
                    )}
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  );
};

export default Header;
