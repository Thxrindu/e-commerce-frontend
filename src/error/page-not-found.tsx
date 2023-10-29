import { Alert } from 'react-bootstrap';

const PageNotFound = () => {
  return (
    <div>
      <Alert color='danger'>
        <h1> The page does not exist.</h1>
      </Alert>
    </div>
  );
};

export default PageNotFound;
