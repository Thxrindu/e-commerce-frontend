import { Col, Row } from 'react-bootstrap';
import styles from './sub-header.module.scss';

export interface SubHeaderArr {
  subHeaderName: string;
  id: string;
}

interface IProps {
  subHeaders: SubHeaderArr[];
}

const SubHeader = (props: IProps) => {
  const { subHeaders } = props;
  return (
    <Row>
      {subHeaders.map((subHeader) => {
        return (
          <Col className={`${styles.subHeader} text-nowrap`}>
            {subHeader.subHeaderName}
          </Col>
        );
      })}
    </Row>
  );
};

export default SubHeader;
