import { emailRegex } from '../../util/regex';
import React, { useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import styles from './sign-up.module.scss';
import AppInput from '../../ui-components/app-input/app-input';
import AppButton from '../../ui-components/app-button/app-button';

type SignUpFormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUp = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<SignUpFormValues>({});

  const password = useRef({});
  password.current = watch('password', '');

  const onSubmit: SubmitHandler<SignUpFormValues> = (
    data: SignUpFormValues
  ) => {
    console.log(data);
  };

  return (
    <>
      <Container className='py-lg-4 py-md-3'>
        <Row className='align-items-center justify-content-evenly'>
          <Col
            className={` ${styles.formSection} d-flex align-items-center justify-content-center`}
          >
            {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={`${styles.formContent} px-5 py-4`}
            >
              <Row>
                <Col className={`${styles.signUpTitle} text-center pb-4`}>
                  Sign up
                </Col>
              </Row>
              <Row>
                <Col className='mb-3'>
                  <AppInput
                    id='name'
                    name='name'
                    label=' Name'
                    placeholder={' Name'}
                    register={register('name', {
                      required: 'Name is required',
                      minLength: {
                        value: 2,
                        message:
                          'This field must contain at least 2 characters',
                      },
                      maxLength: {
                        value: 50,
                        message:
                          'You have exceeded the maximum number of 50 characters in this field',
                      },
                    })}
                    errors={errors}
                  />
                </Col>
              </Row>
              <Row>
                <Col className='mb-3'>
                  <AppInput
                    id='email'
                    name='email'
                    label='Email'
                    placeholder={'test@mail.com'}
                    register={register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: emailRegex,
                        message: 'Please enter a valid email',
                      },
                    })}
                    errors={errors}
                  />
                </Col>
              </Row>
              <Row>
                <Col className='mb-3'>
                  <AppInput
                    id='password'
                    name='password'
                    label='Password'
                    placeholder={'Password'}
                    type={showPassword ? 'text' : 'password'}
                    icon={!showPassword ? BsEyeSlash : BsEye}
                    onIconClick={() => setShowPassword(!showPassword)}
                    register={register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 6,
                        message:
                          'This field must contain at least 6 characters',
                      },
                    })}
                    errors={errors}
                  />
                </Col>
              </Row>
              <Row>
                <Col className='mb-4'>
                  <AppInput
                    id='confirmPassword'
                    name='confirmPassword'
                    label='Confirm Password'
                    placeholder={'Confirm password'}
                    type={showConfirmPassword ? 'text' : 'password'}
                    icon={!showConfirmPassword ? BsEyeSlash : BsEye}
                    onIconClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    register={register('confirmPassword', {
                      required: 'Confirm password is required',
                      validate: (value) =>
                        value === password.current ||
                        'The passwords do not match',
                    })}
                    errors={errors}
                  />
                </Col>
              </Row>

              <Row>
                <Col className='mb-4'>
                  <AppButton type='submit' text={'Sign Up'} />
                </Col>
              </Row>

              <Row className='justify-content-center text-center'>
                <Col className='col-auto'>
                  <span className={`${styles.signUpTextStyleTwo}`}>
                    Already have an account?
                  </span>
                  <span
                    className={`${styles.signUpTextStyleOne} cursor-pointer ms-1`}
                    onClick={() => navigate('/login')}
                  >
                    Sign In
                  </span>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignUp;
