import styles from './tertiary-header.module.scss';
import { Col, Row } from 'react-bootstrap';
import OrangeImg from '../../content/images/orange-logo.png';
import CategorySelector from '../../ui-components/category-selector/category-selector';
import { IListItem } from '../../ui-components/category-selector/list-views/category-list';
import { BsPower } from 'react-icons/bs';
import SubHeader, {
  SubHeaderArr,
} from '../../ui-components/sub-header/sub-header';

const TertiaryHeader = () => {
  //TODO: need to replace the relavant icons
  const itemArray: IListItem[] = [
    {
      itemName: 'Orange Electric',
      id: '1',
      icon: BsPower,
    },
    {
      itemName: 'Electronics ',
      id: '2',
      icon: BsPower,
    },
    {
      itemName: 'Mobile & Tablets',
      id: '3',
      icon: BsPower,
    },
    {
      itemName: 'Home Appliance',
      id: '4',
      icon: BsPower,
    },
    {
      itemName: 'Fashion',
      id: '5',
      icon: BsPower,
    },
  ];

  const handleItemClick = (itemName: string) => {
    console.log(`Clicked ${itemName}`);
  };

  const subHeaders: SubHeaderArr[] = [
    {
      id: '1',
      subHeaderName: 'Flash Deals',
    },
    {
      id: '2',
      subHeaderName: 'Special Offers',
    },
    {
      id: '3',
      subHeaderName: 'Merchants',
    },
    {
      id: '4',
      subHeaderName: 'Brands',
    },
    {
      id: '5',
      subHeaderName: 'Sell on OREL Buy',
    },
  ];

  return (
    <Row
      className={`justify-content-center align-items-center ${styles.navbarContainer}`}
    >
      <Col className='col-12'>
        <Row>
          <Col>
            <Row>
              <Col className={`col-2 d-flex justify-content-start`}>
                <CategorySelector items={itemArray} onClick={handleItemClick} />
              </Col>
              <Col className='col-7 d-flex align-items-center ps-5'>
                <SubHeader subHeaders={subHeaders} />
              </Col>
              <Col className='col-3 d-flex align-items-center justify-content-end pe-5'>
                <Row>
                  <Col>
                    <img src={OrangeImg} height={'40px'} alt='orange logo' />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default TertiaryHeader;
