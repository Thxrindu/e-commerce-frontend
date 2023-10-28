import { Link } from 'react-router-dom';
import { useGetProductsQuery } from '../../features/products/productApiSlice';

const ProductHome = () => {
  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductsQuery();

  return (
    <div>
      {isSuccess && (
        <>
          {products.paginatedItems.map((product, i) => {
            return (
              <>
                {product.name} <br></br>
              </>
            );
          })}
        </>
      )}
      <Link to='/welcome'> back to welcome</Link>
    </div>
  );
};

export default ProductHome;
