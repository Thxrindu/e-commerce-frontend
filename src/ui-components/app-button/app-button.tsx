import React from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import { IconType } from 'react-icons';
import styles from './app-button.module.scss';

interface IProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string;
  icon?: IconType;
  iconOnly?: boolean;
  loading?: boolean;
  disabled?: boolean;
}

const AppButton = (props: IProps) => {
  const {
    text,
    icon: IconComponent,
    iconOnly,
    disabled,
    loading = false,
    ...rest
  } = props;

  const getButtonContent = () => {
    if (loading) {
      return <Spinner animation='border' className={styles.spinner} />;
    } else if (iconOnly) {
      return <>{IconComponent && <IconComponent size={18} />}</>;
    } else {
      return (
        <>
          <Row className='justify-content-center align-items-center'>
            {IconComponent && (
              <Col className='col-auto '>
                <IconComponent size={17} />
              </Col>
            )}
            <Col className='col-auto'>{text}</Col>
          </Row>
        </>
      );
    }
  };

  return (
    <button
      {...{
        ...rest,
        className: `${rest.className}  ${
          props.disabled && styles.appButtonDisabled
        }  ${styles.appButton}
        ${styles.filledBtn} ${styles.appButtonMedium} ${
          iconOnly && styles['appIconButton']
        } px-3
        `,
      }}
      disabled={disabled}
    >
      {getButtonContent()}
    </button>
  );
};

export default AppButton;
