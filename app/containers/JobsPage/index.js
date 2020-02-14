/*
 * JobListPage
 *
 * This page will display jobs list on our App, at the '/jobs' route
 */

import PropTypes from 'prop-types';
import React, { memo, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import CreateJobAlert from '../../components/JobPage/CreateJobAlert';
import MatchesCarousel from '../../components/JobPage/MatchesCarousel';
import PopularJobCarousel from '../../components/JobPage/PopularJobCarousel';
import { popularJob } from "./selectors";
import './JobsPage.scss';
import reducer from './reducer';
import saga from './saga';
import { jobs } from './selectors';

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
  onApplyFilter, getPopularJobs, popularJobs
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [popularJobParams, setPopularJobParams] = useState({
    page: 0,
    size: 10,
    sortBy: null,
    country: 'US',
    city: null
  });

  useEffect(() => {
    getPopularJobs(popularJobParams);
  }, []);

  const [isChecked, setIsChecked] = useState(false);

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
                                  <div className="filter_checkbox">
                                    <span>
                                      <p>Type of employment </p>
                                      <input type="checkbox" id="te2" onClick={(e) => { setIsChecked(e.target.checked) }} />
                                      <label htmlFor="te2"></label>
                                    </span>
                                  </div>
                                </div>

                                <ul className="advanced-filters">
                                  <li className="advanced-filter rt" data-group="Price">
                                    <div className="filter_checkbox">
                                      <span>
                                        <input type="checkbox" id="te2" onClick={(e) => { setIsChecked(e.target.checked) }} />
                                        <label htmlFor="te2">Permanent Full-Time</label>
                                      </span>
                                    </div>
                                  </li>
                                  <li className="advanced-filter rt" data-group="Price">
                                    <div className="filter_checkbox">
                                      <span>
                                        <input type="checkbox" id="te2" onClick={(e) => { setIsChecked(e.target.checked) }} />
                                        <label htmlFor="te2">Part-Time</label>
                                      </span>
                                    </div>
                                  </li>
                                  <li className="advanced-filter rt" data-group="Price">
                                    <div className="filter_checkbox">
                                      <span>
                                        <input type="checkbox" id="te2" onClick={(e) => { setIsChecked(e.target.checked) }} />
                                        <label htmlFor="te2">Casual/Vacation</label>
                                      </span>
                                    </div>
                                  </li>
                                  <li className="advanced-filter rt" data-group="Price">
                                    <div className="filter_checkbox">
                                      <span>
                                        <input type="checkbox" id="te2" onClick={(e) => { setIsChecked(e.target.checked) }} />
                                        <label htmlFor="te2">Contract</label>
                                      </span>
                                    </div>
                                  </li>
                                  <li className="advanced-filter rt" data-group="Price">
                                    <div className="filter_checkbox">
                                      <span>
                                        <input type="checkbox" id="te2" onClick={(e) => { setIsChecked(e.target.checked) }} />
                                        <label htmlFor="te2">Internship/Trainee</label>
                                      </span>
                                    </div>
                                  </li>
                                </ul>

                                <div className="sbf-title">
                                  <div className="filter_checkbox">
                                    <span>
                                      <p>Seniority Level</p>
                                      <input type="checkbox" id="te2" onClick={(e) => { setIsChecked(e.target.checked) }} />
                                      <label htmlFor="te2"></label>
                                    </span>
                                  </div>
                                  <div className="filter_checkbox">
                                    <span>
                                      <p>Location</p>
                                      <input type="checkbox" id="te2" onClick={(e) => { setIsChecked(e.target.checked) }} />
                                      <label htmlFor="te2"></label>
                                    </span>
                                  </div>
                                  <div className="filter_checkbox">
                                    <span>
                                      <p>Salary Range</p>
                                      <input type="checkbox" id="te2" onClick={(e) => { setIsChecked(e.target.checked) }} />
                                      <label htmlFor="te2"></label>
                                    </span>
                                  </div>
                                </div>
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

                      {/* Popular Job Section Start */}
                      {(() => {
                        if (popularJobs && popularJobs.data) {
                          return <PopularJobCarousel jobs={popularJobs.data.content} />
                        }
                      })()}
                      {/* <PopularJobCarousel jobs={popularJobs.data} /> */}
                      {/* Popular Job Section End */}

                      {/* Matches Section Start */}
                      <MatchesCarousel />
                      {/* Matches Section End */}
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
  // popularJobs: PropTypes.object.isRequired
};

const mapStateToProps = createStructuredSelector({
  popularJobs: popularJob()
});

const mapDispatchToProps = (dispatch) => {
  return {
    getPopularJobs: (params) => {
      dispatch({ type: 'POPULAR_JOBS', params });
    },
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
