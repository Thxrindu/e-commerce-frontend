import { Col, Row } from 'react-bootstrap';
import styles from './main-card.module.scss';

const MainCard = () => {
  return (
    <Row className={`${styles.mainCard} d-flex justify-content-between p-4`}>
      <Col className={`${styles.mainCard__text} col-auto`}>Product Listing</Col>
      <Col className='col-auto'> Sort By</Col>
    </Row>
  );
};

export default MainCard;
