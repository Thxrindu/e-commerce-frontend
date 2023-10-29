import { Col, Row } from 'react-bootstrap';
import styles from './search-bar.module.scss';
import { BsSearch } from 'react-icons/bs';

interface IProps {
  placeholderText?: string;
}

const SearchBar = (props: IProps) => {
  const { placeholderText } = props;

  return (
    <Row className='w-100'>
      <Col className={`${styles.searchBar} col-auto`}>
        <BsSearch />
        <input className='ps-3' placeholder={placeholderText} />
      </Col>
    </Row>
  );
};

export default SearchBar;
