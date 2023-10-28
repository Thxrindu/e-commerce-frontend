import styles from './secondary-header.module.scss';
import { Col, Row } from 'react-bootstrap';
import OrelImg from '../../content/images/orel.png';
import SearchBar from '../../ui-components/search-bar/search-bar';
import { BiUser, BiShoppingBag } from 'react-icons/bi';

const SecondaryHeader = () => {
  return (
    <Row
      className={`justify-content-center align-items-center ${styles.navbarContainer}`}
    >
      <Col className='col-12'>
        <Row>
          <Col>
            <Row>
              <Col
                className={`${styles.navbarContainer__heading} col-3 d-flex justify-content-start ps-4`}
              >
                <img src={OrelImg} height={'75px'} />
              </Col>
              <Col className='col-6 d-flex align-items-center justify-content-center'>
                <SearchBar placeholderText='Type and hit enter or select..' />
              </Col>
              <Col className='col-3'>
                <Row>
                  <Col>
                    <BiUser />
                  </Col>
                  <Col>
                    <BiShoppingBag />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default SecondaryHeader;
