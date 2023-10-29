import styles from './secondary-header.module.scss';
import { Col, Container, Row } from 'react-bootstrap';
import OrelImg from '../../content/images/orel.png';
import SearchBar from '../../ui-components/search-bar/search-bar';
import { BiUser, BiShoppingBag } from 'react-icons/bi';
import RoundIcon from '../../ui-components/round-icon/round-icon';

const SecondaryHeader = () => {
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
                  className={`col-12 col-lg-3 d-flex justify-content-start px-0`}
                >
                  <img src={OrelImg} height={'75px'} alt='orel logo' />
                </Col>
                <Col className='col-12 col-lg-6 d-flex align-items-center justify-content-center'>
                  <SearchBar placeholderText='Type and hit enter or select..' />
                </Col>
                <Col className='col-12 col-lg-3 d-flex align-items-center justify-content-lg-end pt-3 pt-lg-0'>
                  <Row>
                    <Col className='pe-4'>
                      <RoundIcon icon={BiUser} />
                    </Col>
                    <Col>
                      <RoundIcon icon={BiShoppingBag} />
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

export default SecondaryHeader;
