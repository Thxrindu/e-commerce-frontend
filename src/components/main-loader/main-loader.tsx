import styles from './main-loader.module.scss';
import { PropagateLoader } from 'react-spinners';

interface IProps {
  show: boolean;
}

const MainLoader = (props: IProps) => {
  return (
    <>
      {props.show && (
        <div
          className={[
            styles.spinnerContainer,
            'w-100 h-100 d-flex align-items-center justify-content-center',
          ].join(' ')}
        >
          <PropagateLoader color='var(--accent-color)' />
        </div>
      )}
    </>
  );
};

export default MainLoader;
