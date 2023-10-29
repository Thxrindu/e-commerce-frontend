import { Col, Row } from 'react-bootstrap';
import { BsPlusLg } from 'react-icons/bs';
import styles from './plus-icon.module.scss';

const PlusIcon = () => {
  return (
    <Row>
      <Col
        className={`${styles.plusIcon} d-flex justify-content-center align-items-center me-2`}
      >
        <BsPlusLg size={18} color='var(--accent-color)' />
      </Col>
    </Row>
  );
};

export default PlusIcon;
