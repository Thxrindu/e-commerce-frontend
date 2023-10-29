import styles from './header.module.scss';
import { Col, Container, Row } from 'react-bootstrap';
import { BsChevronDown } from 'react-icons/bs';

const Header = () => {
  return (
    <Row
      className={`justify-content-center align-items-center ${styles.navbarContainer}`}
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
                    <Col className={`${styles.navbarContainer__heading}`}>
                      Track my order <BsChevronDown />
                    </Col>
                    <Col className={`${styles.navbarContainer__heading}`}>
                      Log in
                    </Col>
                    <Col className={`${styles.navbarContainer__heading}`}>
                      Sign up
                    </Col>
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
