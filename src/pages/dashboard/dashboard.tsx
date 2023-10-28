import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SecondaryHeader from '../../layouts/secondary-header/secondary-header';

const Dashboard = () => {
  return (
    <Row>
      <Col>
        <SecondaryHeader />
        <h1> Hello after login</h1>
        <Link to='/user/products'> go to products</Link>
      </Col>
    </Row>
  );
};

export default Dashboard;
