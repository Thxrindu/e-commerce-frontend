import { Card, Col, Row } from 'react-bootstrap';
import styles from './product-card.module.scss';
import { IProduct } from '../../models/product-model';
import PlusIcon from '../plus-icon/plus-icon';

interface IProps {
  product?: IProduct;
}

const CourseCard = (props: IProps) => {
  const { product } = props;

  const handleClick = () => {};

  return (
    <Card
      className={`${styles.courseCard} cursor-pointer`}
      onClick={() => handleClick()}
    >
      <Card.Img
        className={`${styles.cardImg}`}
        variant='top'
        src={product.imageUrl}
      />

      <Card.Body className=''>
        <Card.Title className={`d-flex align-items-start`}>
          <p className='mb-0'> {product.name}</p>
        </Card.Title>
        <Row className='d-flex justify-content-between'>
          <Col className='col-auto d-flex align-items-center'>
            <span> Rs.</span> <p className='mb-0'> {product.price}</p>
          </Col>
          <Col className='col-auto'>
            <PlusIcon />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;
