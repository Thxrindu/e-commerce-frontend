import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  DeepMap,
  FieldError,
  FieldValues,
  UseFormRegisterReturn,
} from 'react-hook-form';
import { IconType } from 'react-icons';
import styles from './app-input.module.scss';

export type FieldErrors<TFieldValues extends FieldValues = FieldValues> =
  DeepMap<TFieldValues, FieldError>;

interface IProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  errorMessage?: string;
  icon?: IconType;
  label?: string;
  onIconClick?: () => void;
  register?: UseFormRegisterReturn;
  placeholder: string;
  errors?: FieldErrors;
  isError?: boolean;
  isSuccess?: boolean;
  isRequired?: boolean;
  disabled?: boolean;
}

const AppInput = (props: IProps) => {
  const {
    className,
    icon: IconComponent,
    label,
    onIconClick,
    register,
    placeholder,
    errors = {},
    isError,
    isSuccess,
    isRequired,
    value,
    defaultValue,
    disabled,
    ...rest
  } = props;

  return (
    <Row>
      <Col>
        <div className={`${className}`}>
          {label && (
            <label
              className={`${styles.label} d-flex pb-1`}
              htmlFor='flexSwitchCheckDefault'
            >
              {label}
              {isRequired && (
                <span className={`${styles.required} ms-1`}> *</span>
              )}
            </label>
          )}

          <div
            className={`appInput ${
              (rest.name && errors[rest.name]?.message) || isError
                ? `hasDanger`
                : isSuccess
                ? `hasSuccess`
                : ``
            }`}
          >
            {rest.type === 'number' ? (
              <input
                {...register}
                placeholder={placeholder}
                type={rest.type}
                min='0'
                onKeyDown={(e) =>
                  ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault()
                }
              />
            ) : (
              <input
                {...register}
                placeholder={placeholder}
                type={rest.type}
                disabled={disabled}
                defaultValue={value || ''}
              />
            )}

            {props.icon && (
              <div className={`icon`} onClick={onIconClick}>
                {IconComponent && <IconComponent size={24} />}
              </div>
            )}
          </div>

          {rest.id && (
            <span className={`${styles.errorMessage}`}>
              {errors[rest.id]?.message}
            </span>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default AppInput;
