import { useGetProductsQuery } from '../../features/products/productApiSlice';
import { Col, Container, Row } from 'react-bootstrap';
import SecondaryHeader from '../../layouts/secondary-header/secondary-header';
import TertiaryHeader from '../../layouts/tertiary-header/tertiary-header';
import MainCard from '../../ui-components/main-card/main-card';
import ProductCard from '../../ui-components/product-card/product-card';
import MainLoader from '../main-loader/main-loader';

const ProductHome = () => {
  const {
    data: products,
    isLoading,
    isSuccess,
    // isError,
    // error,
  } = useGetProductsQuery();

  return (
    <Row>
      <MainLoader show={isLoading} />
      <Col>
        <SecondaryHeader />
        <TertiaryHeader />

        <Container>
          <Row className='mt-4'>
            <Col>
              <MainCard />
            </Col>
          </Row>

          <Row className='my-4'>
            {isSuccess ? (
              products.paginatedItems.map((item) => (
                <Col
                  xl={2}
                  lg={3}
                  md={4}
                  sm={12}
                  key={item.id}
                  className='mb-4'
                >
                  <ProductCard product={item} />
                </Col>
              ))
            ) : (
              <h1> Loading</h1>
            )}
          </Row>
        </Container>
      </Col>
    </Row>
  );
};

export default ProductHome;
