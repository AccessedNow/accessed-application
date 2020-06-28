/*
 * CompanyPage
 *
 * This page will display company detail on our App, at the '/company/:id' route
 */

import React, { useEffect, memo, useState } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import { company } from './selectors';
import SideBar from '../../../components/SideBar/index';
import ToolBar from '../../../components/ToolBar/index';
import CompanyCard from '../../../components/CompanyCard/index';
import Paginate from '../../../components/Paginate/index';
import CompanyFilter from '../../../components/CompanyFilter/index';
import {FETCH_COMPANY_DETAIL} from "./constants";

const key = 'company';

export function CompanyPage({
  match,loadCompany, company, paginate, onApplyFilter
}) {

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const [params, setParams] = useState({
    id: match.params.id
  });

  useEffect(() => {
    loadCompany(params.id);
  }, [params]);

  console.log('company', company)
  return (
    <article>
      <Helmet>
        <title>Company</title>
      </Helmet>
      <div id="body-content">
        <div id="main-content">
          <div id="main-content">
            <div id="shopify-section-collection-template" className="shopify-section">
              <div className="wrap-breadcrumb bw-color">

                {/* Breadcrumb Start */}
                <div id="breadcrumb" className="breadcrumb-holder container">
                  <ul className="breadcrumb">
                    <li itemScope="" itemType="http://data-vocabulary.org/Breadcrumb">
                      <a itemProp="url" href="/">
                        <span itemProp="title" className="d-none">Arena Electro</span>Home
                    </a>
                    </li>
                    <li itemScope="" itemType="http://data-vocabulary.org/Breadcrumb" className="d-none">
                      <a href="/collections/all" itemProp="url">
                        <span itemProp="title">Company</span>
                      </a>
                    </li>
                    <li className="active">Company</li>
                  </ul>
                </div>
                {/* Breadcrumb End */}
              </div>

              {/* Main Container Start */}
              <div className="page-cata active-sidebar" data-logic="true">
                <div className="container">
                  <div className="row">
                    {/* Side Bar */}
                    <div id="sidebar" className="left-column-container col-lg-3">

                    </div>


                    <div className="col-lg-9 col-md-12">
                      {/* Heading Start */}
                      <div className="wrap-cata-title">
                        <h2>{company.name}</h2>
                      </div>
                      {/* Heading End */}

                      </div>

                    </div>

                  </div>
                </div>
              </div>
              {/* Main Container End */}

            </div>
          </div>
      </div>
    </article >
  );
}

CompanyPage.propTypes = {
  loadCompany: PropTypes.func,
  company: PropTypes.object.isRequired
};

const mapStateToProps = createStructuredSelector({
  company: company()
});

const mapDispatchToProps = (dispatch) => {
  return {
    loadCompany: (id) => {
      dispatch({ type: 'FETCH_COMPANY_DETAIL', id });
    }
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
  memo,
)(CompanyPage);
