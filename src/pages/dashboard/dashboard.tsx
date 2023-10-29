import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SecondaryHeader from '../../layouts/secondary-header/secondary-header';
import TertiaryHeader from '../../layouts/tertiary-header/tertiary-header';
import BannerImg from '../../content/images/banner.webp';

const Dashboard = () => {
  return (
    <Row>
      <Col>
        <Container>
          <SecondaryHeader />
          <TertiaryHeader />
          <Row>
            <Col>
              <img src={BannerImg} width={'100%'} alt='main banner' />
            </Col>
          </Row>
        </Container>
        <Link to='/user/products'> go to products</Link>
      </Col>
    </Row>
  );
};

export default Dashboard;
