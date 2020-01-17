/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import { submitRegistration } from './actions';
import reducer from './reducer';
import saga from './saga';

const key = 'registration';

import './Registration.scss';

export function RegistrationPage({
  loading,
  error,
  repos,
  onSubmitForm,
}) {
  useInjectReducer({ key, reducer }),
  useInjectSaga({ key, saga });

  const reposListProps = {
    loading
  };

  return (
    <article>
      <Helmet>
        <title>Registration Page</title>
        <meta
          name="description"
          content="Accessed Home"
        />
      </Helmet>
      <div id="registration-content">
        <div className="row justify-content-center">
          <div className=" col-lg-8 text-center m-3">
            <h2>Registration</h2>
          </div>
          <div className=" col-lg-8">    
            <div className=" card">
              <div className=" card-body">
                {/* <h6 className=" heading-small text-muted mb-4">User information</h6> */}
                <div className="col-lg-12">
                  <div className="row">
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
                          confirmPassword:  Yup.string()
                              .oneOf([Yup.ref('password'), null], 'Passwords must match')
                              .required('Confirm Password is required')
                      })}
                      onSubmit={fields => {
                          // alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                          onSubmitForm(fields)
                      }}
                      render={({ errors, status, touched }) => (
                          <Form>
                            <div className="row">                      
                              <div className=" col-lg-6">
                                <div className=" form-group">
                                  <label className=" form-control-label" htmlFor="firstName">
                                      First Name
                                  </label>
                                  <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                                  <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                                </div>
                              </div>
                              <div className=" col-lg-6">
                                <div className=" form-group">
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
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                    <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className=" col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                    <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                </div>
                              </div>
                              <div className=" col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <Field name="confirmPassword" type="password" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                                    <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className=" col-lg-12">
                                <div className="form-group text-center">
                                  <button type="submit" className="btn btn-primary mr-2">Register</button>
                                  <button type="reset" className="btn btn-secondary">Reset</button>
                                </div>
                              </div>
                            </div>
                          </Form>
                      )}
                    /> 
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

RegistrationPage.propTypes = {
  onSubmitForm: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: (userData) => {
      console.log('submit', userData)
      // dispatch(submitRegistration(fields))
      dispatch({type: 'REGISTER_USER', payload: {userData}})
      // dispatch(loadRepos());
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
)(RegistrationPage);
