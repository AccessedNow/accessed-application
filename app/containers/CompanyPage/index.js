/*
 * CompanyPage
 *
 * This page will display companies lsit on our App, at the '/company' route
 */

import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import { companies, paginate } from './selectors';

import ComapnyCard from '../../components/ComapnyCard';
import Paginate from '../../components/Paginate';

const key = 'company';

export function CompanyPage({
  onLoadCompanies, companies, paginate
}) {

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  useEffect(() => {
    onLoadCompanies()
  }, []);

  console.log(paginate)
  return (
    <article>
      <Helmet>
        <title>Companies</title>
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
                  <li className="active">Companies</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="wrap-cata-title">
                  <h2>Companies</h2>
                </div>

                <div id="col-main">
                  <div className="cata-product cp-grid">
                    {companies.map((item) => (
                      <ComapnyCard
                        key={item.id}
                        title={item.groupName}
                        category={item.partyType.name}
                        rating={item.rating}
                        city={item.city}
                        country={item.country}
                        companySize={item.companySize}
                      />
                    ))}
                  </div>
                </div>
                <Paginate
                  current={paginate.current}
                  total={paginate.total}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}

CompanyPage.propTypes = {
  onLoadCompanies: PropTypes.func,
  companies: PropTypes.array.isRequired
};

const mapStateToProps = createStructuredSelector({
  companies: companies(),
  paginate: paginate(),
});

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadCompanies: () => {
      dispatch({ type: 'COMPANY_LIST' });
    }
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
  memo,
)(CompanyPage);