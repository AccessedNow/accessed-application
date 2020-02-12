/*
 * JobListPage
 *
 * This page will display jobs list on our App, at the '/jobs' route
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
import { jobs } from './selectors';
import SideBar from '../../components/SideBar';
import ToolBar from '../../components/ToolBar';
import JobCard from '../../components/JobCard';
import Paginate from '../../components/Paginate';
import CompanyFilter from '../../components/CompanyFilter';

const key = 'job';

export function JobListPage({
  jobs, onApplyFilter
}) {

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [params, setParams] = useState({
    page: 0,
    limit: 10,
    sortBy: 'ASC'
  });

  const menus = [
    { name: 'All', path: '#' },
    { name: 'Jobs', path: '#' },
    { name: 'Company', path: '#' },
    { name: 'Salary', path: '#' }
  ];

  useEffect(() => {
    onApplyFilter(params);
  }, [params]);

  const onSortSelect = (type) => {
    setParams({ ...params, sortBy: type });
  };

  const onPageClick = (pageNum) => {
    setParams({ ...params, page: pageNum });
  }

  return (
    <article>
      <Helmet>
        <title>Jobs</title>
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
                        <span itemProp="title" className="d-none">Amazed</span>Home
                    </a>
                    </li>
                    <li itemScope="" itemType="http://data-vocabulary.org/Breadcrumb" className="d-none">
                      <a href="/collections/all" itemProp="url">
                        <span itemProp="title">Jobs</span>
                      </a>
                    </li>
                    <li className="active">Jobs</li>
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
                      <SideBar title={'Categories'} menus={menus} />

                      <CompanyFilter />
                    </div>


                    <div className="col-lg-9 col-md-12">
                      {/* Heading Start */}
                      <div className="wrap-cata-title">
                        <h2>Jobs</h2>
                      </div>
                      {/* Heading End */}

                      <ToolBar onSortSelect={onSortSelect} totalElements={jobs.totalElements} number={jobs.number} numberOfElements={jobs.numberOfElements} />

                      <div id="col-main">
                        <div className="cata-product cp-grid">
                          {/* Card View Start*/}
                          {jobs.content.map((item) => (
                            <JobCard
                              key={item.id}
                              jobData={item}
                            />
                          ))}
                          {/* Card View End */}
                        </div>

                        {/* Paginate Start*/}
                        <Paginate
                          current={jobs.number}
                          total={jobs.totalPages}
                          onPageClick={onPageClick}
                        />
                        {/* Paginate End*/}
                      </div>

                    </div>

                  </div>
                </div>
              </div>
              {/* Main Container End */}

            </div>
          </div>
        </div>
      </div>
    </article >
  );
}

JobListPage.propTypes = {
  jobs: PropTypes.object.isRequired
};

const mapStateToProps = createStructuredSelector({
  jobs: jobs()
});

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadJobs: (params) => {
      dispatch({ type: 'JOB_LIST', params });
    },
    onApplyFilter: (params) => {
      dispatch({ type: 'JOB_LIST_FILTER', params });
    }
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
  memo,
)(JobListPage);