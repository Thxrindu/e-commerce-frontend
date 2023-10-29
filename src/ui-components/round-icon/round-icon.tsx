import { Col, Row } from 'react-bootstrap';
import styles from './round-icon.module.scss';

import { IconType } from 'react-icons';

interface IProps {
  icon: IconType;
}

const RoundIcon = (props: IProps) => {
  const { icon: IconComponent } = props;

  return (
    <Row>
      <Col
        className={`${styles.roundIcon} col-auto d-flex justify-content-cneter align-items-center`}
      >
        <IconComponent size={20} className={styles.icon} />
      </Col>
    </Row>
  );
};

export default RoundIcon;
