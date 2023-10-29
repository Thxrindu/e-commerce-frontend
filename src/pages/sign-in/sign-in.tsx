import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import styles from './sign-in.module.scss';
import AppInput from '../../ui-components/app-input/app-input';
import AppButton from '../../ui-components/app-button/app-button';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../features/auth/authSlice';
import { useLoginMutation } from '../../features/auth/authApiSlice';
import { showErrorToast, showSuccessToast } from '../../util/toast';

type SignInFormValues = {
  email: string;
  password: string;
};

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [login, { isLoading }] = useLoginMutation();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<SignInFormValues> = async (
    data: SignInFormValues
  ) => {
    try {
      const userData = await login({
        email: data.email,
        password: data.password,
      }).unwrap();
      dispatch(setCredentials({ ...userData, user: data.email }));
      navigate('/user/products');
      showSuccessToast('Login success.', 'loginError');
    } catch (err) {
      showErrorToast(
        'Email or the password is invalid. Please try again with valid information.',
        'loginError'
      );
    }
  };

  return (
    <>
      <Container className='py-lg-5 py-md-3'>
        <Row className='align-items-center justify-content-evenly'>
          <Col
            className={` ${styles.formSection} d-flex align-items-center justify-content-center flex-column`}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={`${styles.formContent}`}
            >
              <div className={` px-5 pt-4`}>
                <Row>
                  <Col className={`${styles.signInTitle} text-center pb-1`}>
                    OrelBuy
                  </Col>
                </Row>
                <Row>
                  <Col className={`${styles.signInSubTitle} text-center pb-3`}>
                    Hello, Welcome to Orelbuy
                  </Col>
                </Row>
                <Row>
                  <Col className='mb-4'>
                    <AppInput
                      id='email'
                      placeholder={'email@mail.com'}
                      name='email'
                      label='Email'
                      register={register('email', {
                        required: 'Email is required',
                        // pattern: {
                        // value: emailRegex,
                        // message: 'Please enter a valid email',
                        // },
                      })}
                      errors={errors}
                    />
                  </Col>
                </Row>
                <Row className='align-items-center'>
                  <Col className='mb-4'>
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
                      })}
                      errors={errors}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col className='mb-4'>
                    <AppButton
                      type='submit'
                      text={'Log In'}
                      loading={isLoading}
                    />
                  </Col>
                </Row>

                <Row className='justify-content-center text-center'>
                  <Col className='col-auto'>
                    <span className={`${styles.signInTextStyleTwo}`}>
                      Don&apos;t have an account?
                    </span>
                    <span
                      className={`${styles.signInTextStyleOne} cursor-pointer ms-1`}
                      onClick={() => navigate('/register')}
                    >
                      Sign Up
                    </span>
                  </Col>
                </Row>

                <Row className='justify-content-center text-center'>
                  <Col className='col-auto'>
                    <span className={`${styles.signInTextStyleTwo}`}>
                      Forgot your password?
                    </span>
                    <span
                      className={`${styles.signInTextStyleOne} cursor-pointer ms-1`}
                      onClick={() => {}}
                    >
                      Reset it
                    </span>
                  </Col>
                </Row>
              </div>
              <div>
                <Row className={`mt-3`}>
                  <Col
                    className={`${styles.guestSection} mx-2`}
                    onClick={() => {
                      navigate('/dashboard');
                    }}
                  >
                    Continue as guest
                  </Col>
                </Row>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignIn;
