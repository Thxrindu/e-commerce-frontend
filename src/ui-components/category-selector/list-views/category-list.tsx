import { Col, Row } from 'react-bootstrap';
import styles from './category-list.module.scss';
import { IconType } from 'react-icons';
import { BiSolidChevronRight } from 'react-icons/bi';

export interface IListItem {
  itemName: string;
  id: string;
  icon: IconType;
  path?: string;
}

interface IProps {
  itemList: IListItem[];
  onClick?: (key: string) => void;
}

const CategoryList = (props: IProps) => {
  return (
    <div className={`${styles.listCard}`}>
      {props.itemList.map((item: IListItem) => {
        return (
          <Row
            key={item.id}
            onClick={() => props.onClick && props.onClick(item.path)}
            className='cursor-pointer'
          >
            <Col className='col-1 ps-4 pt-1 pe-0'>
              {item.icon && <item.icon />}
            </Col>
            <Col
              className={`${styles.subItem} text-nowrap col-8 d-flex text-align-start`}
            >
              {item.itemName}
            </Col>
            <Col className='col-2 d-flex align-items-center'>
              <BiSolidChevronRight size={20} />
            </Col>
          </Row>
        );
      })}
    </div>
  );
};

export default CategoryList;
