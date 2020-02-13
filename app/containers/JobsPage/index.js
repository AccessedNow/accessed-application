/*
 * JobListPage
 *
 * This page will display jobs list on our App, at the '/jobs' route
 */

import PropTypes from 'prop-types';
import React, { memo, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import CreateJobAlert from '../../components/JobPage/CreateJobAlert';
import PopularJobCarousel from '../../components/JobPage/PopularJobCarousel';
import './JobsPage.scss';
import reducer from './reducer';
import saga from './saga';
import { jobs } from './selectors';
import OwlCarousel from 'react-owl-carousel2';
import PopularJobCard from '../../components/JobPage/PopularJobCard';
import MatchesCarousel from '../../components/JobPage/MatchesCarousel';

const key = 'job';

const options = {
  items: 1,
  nav: true,
  rewind: true,
  margin: 20,
  autoplay: false,
  dots: false
};

const events = {
  onDragged: function (event) { console.log(event) },
  onChanged: function (event) { console.log(event) }
};

export function JobsPage({
  jobs, onApplyFilter
}) {

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const jobsSlider = useRef(null);
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
    console.log(jobs);
    onApplyFilter(params);
  }, [params]);

  const onSortSelect = (type) => {
    setParams({ ...params, sortBy: type });
  };

  const onPageClick = (pageNum) => {
    setParams({ ...params, page: pageNum });
  }

  const onPreviousClick = () => {
    console.log(jobsSlider);
    jobsSlider.current.prev();
  };

  const onNextClick = () => {
    console.log(jobsSlider);
    jobsSlider.current.next();
  };

  return (
    <article>
      <Helmet>
        <title>Jobs</title>
      </Helmet>
      <div id="body-content">
        <div id="main-content">
          <div id="main-content">
            <div id="shopify-section-collection-template" className="shopify-section">

              {/* Main Container Start */}
              <div className="page-cata active-sidebar" data-logic="true">
                <div className="container">
                  <div className="row">
                    {/* Side Bar */}
                    <div id="sidebar" className="left-column-container col-lg-3">
                      <div className="sb-widget d-none d-lg-block">
                        {/* Alert Box Start */}
                        <CreateJobAlert />
                        {/* Alert Box End */}
                      </div>

                      <div className="sb-widget filter-sidebar position-sidebar style-normal">
                        <h5 className="sb-title">Filter</h5>
                        <div className="sb-filter-wrapper">
                          <div className="f-close"><i className="demo-icon icon-close"></i></div>
                          <div className="sbw-filter">
                            <div className="grid-uniform">
                              <div className="sb-filter price left-side-filters" id="filter-1">
                                <div className="sbf-title">
                                  <span>Type of employment</span>
                                  <a href="#" className="clear-filter hidden" id="clear-filter-3" style={{ float: 'right' }}>Clear</a>
                                </div>
                                <ul className="advanced-filters">
                                  <li className="advanced-filter rt" data-group="Price">
                                    <a>Permanent Full-Time <span>356</span></a>
                                  </li>
                                  <li className="advanced-filter rt" data-group="Price">
                                    <a >Part Time <span>356</span></a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>


                    <div className="col-lg-9 col-md-12">

                      {/* ToolBar Start */}
                      <div className="cata-toolbar">
                        <div className="group-toolbar">
                          <div className="filter-icon-order">
                            8k Results
                          </div>

                          <div className="toolbar-options">
                            <div className="sort-by bc-toggle toolbar-options-sortBy">
                              <div className="sort-by-inner">
                                <label className="d-none d-md-block">Sort by</label>
                                <div id="cata_sort_by">
                                  <button id="sort_by_button">
                                    <span className="name"><a href="javascript:;">Best Selling</a></span>
                                    <i className="demo-icon icon-down-dir"></i>
                                  </button>
                                </div>
                                <ul id="sort_by_box" className="bc-dropdown">
                                  <li className="sort-action title-ascending" data-sort="title-ascending"><a href="javascript:;">Name, A-Z</a></li>
                                </ul>
                              </div>
                            </div>

                            <div className="sort-by bc-toggle toolbar-options-views">
                              <div className="sort-by-inner">
                                <label className="d-none d-md-block">
                                  <a><i className="demo-icon icon-electro-grid-view"></i></a>
                                  <a className="toolbar-views">
                                    <i className="demo-icon icon-electro-small-list-view"></i>
                                  </a>
                                </label>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                      {/* ToolBar End */}

                      <PopularJobCarousel />


                      <MatchesCarousel />

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

JobsPage.propTypes = {
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
)(JobsPage);
