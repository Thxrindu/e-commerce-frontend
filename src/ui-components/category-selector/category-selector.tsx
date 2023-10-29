import { useEffect, useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Collapse from 'react-bootstrap/Collapse';
import { BsChevronDown } from 'react-icons/bs';
import { IListItem } from './list-views/category-list';
import styles from './category-selector.module.scss';
import { HiViewGrid } from 'react-icons/hi';
import CategoryList from './list-views/category-list';

interface IProps {
  items: IListItem[];
  image?: string;
  onClick?: (key: string) => void;
}

const CategorySelector = (props: IProps) => {
  const [collapse, setCollapse] = useState<boolean>(false);

  const ref = useRef(null);

  const handleClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setCollapse(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <Row ref={ref} className={`${styles.categorySelector}`}>
      <Col className='d-flex align-items-center'>
        <Row className='d-flex align-items-center w-100'>
          <Col className='col-3 d-flex align-items-center'>
            <HiViewGrid size={24} color='var(--background-color)' />
          </Col>
          <Col
            className={`${styles.navProfileFont} px-0 text-nowrap col-7 d-flex text-align-start`}
          >
            All Categories
          </Col>

          <Col className='col-2'>
            <BsChevronDown
              className={`cursor-pointer`}
              size={16}
              color={'var(--background-color)'}
              onClick={() => {
                setCollapse(!collapse);
              }}
            />
          </Col>
        </Row>
        <div className='position-absolute'>
          <Collapse in={collapse} dimension='height'>
            <div
              onMouseLeave={(e) => {
                setCollapse(false);
                e.stopPropagation();
              }}
              className={`${styles.customDropdownList} position-absolute mt-2`}
            >
              <CategoryList itemList={props.items} onClick={props.onClick} />
            </div>
          </Collapse>
        </div>
      </Col>
    </Row>
  );
};

export default CategorySelector;
