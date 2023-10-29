import { Col, Container, Row } from 'react-bootstrap';
import SecondaryHeader from '../../layouts/secondary-header/secondary-header';
import TertiaryHeader from '../../layouts/tertiary-header/tertiary-header';
import BannerImg from '../../content/images/banner.webp';

const Dashboard = () => {
  return (
    <Row>
      <Col>
        <SecondaryHeader />
        <TertiaryHeader />
        <Container>
          <Row>
            <Col>
              <img src={BannerImg} width={'100%'} alt='main banner' />
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  );
};

export default Dashboard;
