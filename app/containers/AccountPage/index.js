/*
 * AccountPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { getForgotPasswordStatus } from './selectors';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';

const key = 'account';

import './Account.scss';

export function AccountPage({
  forgotPasswordToogle,
  onSubmitLoginForm,
  onSubmitRegisterForm,
  onChangeForgot
}) {
  useInjectReducer({ key, reducer }),
    useInjectSaga({ key, saga });
  useEffect(() => {
    console.log('forgotPasswordToogle', forgotPasswordToogle)
  }, []);


  return (
    <article>
      <Helmet>
        <title>Account Page</title>
        <meta
          name="description"
          content="Accessed Home"
        />
      </Helmet>
      <div id="body-content">
        <div id="main-content">
          <div className="main-content" id="account-content">
            <div className="wrap-breadcrumb bw-color">
              <div id="breadcrumb" className="breadcrumb-holder container">
                <ul className="breadcrumb">
                  <li itemScope="" itemType="http://data-vocabulary.org/Breadcrumb">
                    <a itemProp="url" href="/">
                      <span itemProp="title" className="d-none">Arena Electro</span>Home
                    </a>
                  </li>
                  <li className="active">Create Account</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="container">
                <div id="col-main" className="page-register">
                  <div className="row">
                    <div className="col-sm-6 col-xs-12 register-or">
                      <div className="form-wrapper">
                        <h2 className="heading">Create New Account</h2>
                        <p>Create your own Accessed Account</p>
                        <Formik
                          initialValues={{
                            firstName: '',
                            lastName: '',
                            email: '',
                            password: '',
                            confirmPassword: ''
                          }}
                          validationSchema={Yup.object().shape({
                            firstName: Yup.string()
                              .required('First Name is required'),
                            lastName: Yup.string()
                              .required('Last Name is required'),
                            email: Yup.string()
                              .email('Email is invalid')
                              .required('Email is required'),
                            password: Yup.string()
                              .min(6, 'Password must be at least 6 characters')
                              .required('Password is required'),
                            confirmPassword: Yup.string()
                              .oneOf([Yup.ref('password'), null], 'Passwords must match')
                              .required('Confirm Password is required')
                          })}
                          onSubmit={fields => {
                            onSubmitRegisterForm(fields)
                          }}
                          render={({ errors, status, touched }) => (
                            <Form>
                              <div className="row">
                                <div className=" col-lg-12">
                                  <div className="control-wrapper">
                                    <label className=" form-control-label" htmlFor="firstName">
                                      First Name
                                  </label>
                                    <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                                    <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className=" col-lg-12">
                                  <div className=" control-wrapper">
                                    <label className=" form-control-label" htmlFor="lastName">
                                      Last Name
                                  </label>
                                    <Field name="lastName" type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                                    <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className=" col-lg-12">
                                  <div className="control-wrapper">
                                    <label htmlFor="email">Email*</label>
                                    <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                    <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className=" col-lg-12">
                                  <div className="control-wrapper">
                                    <label htmlFor="password">Password*</label>
                                    <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                    <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className=" col-lg-12">
                                  <div className="control-wrapper">
                                    <label htmlFor="confirmPassword">Confirm Password*</label>
                                    <Field name="confirmPassword" type="password" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                                    <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className=" col-lg-12">
                                  <div className="control-wrapper text-center">
                                    <button type="submit" className="btn btn-primary mr-2">Register</button>
                                    {/* <button type="reset" className="btn btn-secondary">Reset</button> */}
                                  </div>
                                </div>
                              </div>
                            </Form>
                          )}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-xs-12">
                      <div className="form-wrapper">
                        <div id="customer-login" className="content">
                          <h2 className="heading">Login</h2>
                          <p>Welcome back! Sign in to your account</p>
                          <Formik
                            initialValues={{
                              email: '',
                              password: ''
                            }}
                            validationSchema={Yup.object().shape({
                              email: Yup.string()
                                .email('Email is invalid')
                                .required('Email is required'),
                              password: Yup.string()
                                .required('Password is required')
                            })}
                            onSubmit={fields => {
                              onSubmitLoginForm(fields)
                            }}
                            render={({ errors, status, touched }) => (
                              <Form>
                                <div className="row">
                                  <div className=" col-lg-12">
                                    <div className="control-wrapper">
                                      <label htmlFor="email">Email*{forgotPasswordToogle}</label>
                                      <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                      <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className=" col-lg-12">
                                    <div className="control-wrapper">
                                      <label htmlFor="password">Password*</label>
                                      <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                      <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className=" col-lg-12">
                                    <div className="control-wrapper text-center">
                                      <div className="action">
                                        <a className="forgot-pass" onClick={() => onChangeForgot(true)}>Forgotten Password?</a>
                                      </div>
                                      <button type="submit" className="btn btn-primary mr-2">Login</button>
                                      {/* <button type="reset" className="btn btn-secondary">Reset</button> */}
                                    </div>
                                  </div>
                                </div>
                              </Form>
                            )}
                          />
                        </div>
                        {/* <div id="recover-password" style="display: none;">
                        <h2 className="heading">Reset Password</h2>
                        <p className="note">We will send you an email to reset your password.</p>
                        <form>
                          <input type="hidden" name="form_type" value="recover_customer_password" /><input type="hidden" name="utf8" value="✓" />
                          <div className="control-wrapper">
                            <label htmlFor="email">Email Address<span className="req">*</span></label>
                            <input type="email" value="" name="email" id="recover-email" />
                          </div>
                          <div className="control-wrapper">
                            <button className="btn btn-1" type="submit">Reset Password</button>
                            <a className="cancel btn btn-2" >Cancel</a>
                          </div>
                        </form>
                      </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

AccountPage.propTypes = {
  onSubmitRegisterForm: PropTypes.func,
  onSubmitLoginForm: PropTypes.func,
  onChangeForgot: PropTypes.func,
  forgotPasswordToogle: PropTypes.bool
};


const mapStateToProps = createStructuredSelector({
  forgotPasswordToogle: getForgotPasswordStatus(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeForgot: (status) => {
      console.log('status', status)
      dispatch({ type: 'CHANGE_FORGOT_STATUS', payload: { status } })
    },
    onSubmitRegisterForm: (userData) => {
      console.log('register', userData)
      dispatch({ type: 'REGISTER_USER', payload: { userData } })
    },
    onSubmitLoginForm: (userData) => {
      console.log('login', userData)
      dispatch({ type: 'LOGIN_USER', payload: { userData } })
    }
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(AccountPage);
