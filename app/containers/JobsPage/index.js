/*
 * JobListPage
 *
 * This page will display jobs list on our App, at the '/jobs' route
 */

import React, { useEffect, memo, useState, useRef } from 'react';
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
import './JobsPage.scss';
import OwlCarousel from 'react-owl-carousel2';

const key = 'job';

const options = {
  items: 3,
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

  //useInjectReducer({ key, reducer });
  //useInjectSaga({ key, saga });
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
                        <div className="sb-menu alert-box ">
                          <div className="location-search">
                            <h4>Create Job Alert</h4>
                            <p>Make sure you don't miss out on any potential job opportunities</p>
                            <input placeholder="Enter Job Keyword" />
                            <div className="form-actions">
                              <button type="submit" className="btn btn-1 btn-alert">Create Job Alert</button>
                            </div>
                          </div>
                        </div>
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
                                <ul id="sort_by_box" class="bc-dropdown">
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

                      <div className="wrap-cata-title">
                        <p>
                          Popular Jobs
                        </p>

                        <div className="res-job-button">
                          {/* <i class="demo-icon icon-electro-grid-view"></i> */}
                          {/* <i class="demo-icon icon-electro-grid-view"></i> */}
                          <span onClick={onPreviousClick} className="prev">&lt;</span>
                          <span onClick={onNextClick} className="next">&gt;</span>
                        </div>
                      </div>

                      <OwlCarousel ref={jobsSlider} margin={10} options={options} events={events} >
                        <div className="slide-main-sec">
                          <div className="slide-main-top">
                            <div className="slide-left-img">
                              <span>
                                <img src="http://accessed.s3-us-west-2.amazonaws.com/company/2/images/amazon.png" />
                              </span>
                            </div>
                            <div className="slide-right-content">
                              <h4> <a href="#" className="slide-right-head">Senior Product</a> </h4>
                              <span>Designer - Growth</span><br />
                              <a className="link-apple">Apple</a><br />
                              <p>Cupertino, US</p>
                            </div>
                          </div>

                          <ul className="res-line-seniar">
                            <li>Mid-Senior</li>
                            <li>Full Time</li>
                            <li>$115K PA</li>
                          </ul>

                          {/* <p className="res-deatil">
                            If you live and breathe the user expreience, Love solving problem and thrive on variety, Atlassian has a great opportunity for you.
                          </p> */}

                          <ul className="res-line-tags">
                            <li><a href="#" className="slide-right-head">design</a></li>
                            <li><a href="#" className="slide-right-head">User Experiance</a></li>
                            <li><a href="#" className="slide-right-head">design</a></li>
                          </ul>

                          <div className="res-line-bottom">
                            <span>
                              May 14, 2019
                              </span>
                            <div className="res-line-icon">
                              <span className="demo-icon icon-electro-add-to-cart-icon"></span>
                              <span className="demo-icon icon-electro-add-to-cart-icon"></span>
                            </div>

                          </div>

                          <div className="acces-top-hover">
                            <span>PROMOTED</span>
                          </div>

                        </div>

                        <div className="slide-main-sec">
                          <div className="slide-main-top">
                            <div className="slide-left-img">
                              <span>
                                <img src="http://accessed.s3-us-west-2.amazonaws.com/company/2/images/amazon.png" />
                              </span>
                            </div>
                            <div className="slide-right-content">
                              <h4> <a href="#" className="slide-right-head">Senior Product</a> </h4>
                              <span>Designer - Growth</span><br />
                              <a className="link-apple">Apple</a><br />
                              <p>Cupertino, US</p>
                            </div>
                          </div>

                          <ul className="res-line-seniar">
                            <li>Mid-Senior</li>
                            <li>Full Time</li>
                            <li>$115K PA</li>
                          </ul>

                          {/* <p className="res-deatil">
                            If you live and breathe the user expreience, Love solving problem and thrive on variety, Atlassian has a great opportunity for you.
                          </p> */}

                          <ul className="res-line-tags">
                            <li><a href="#" className="slide-right-head">design</a></li>
                            <li><a href="#" className="slide-right-head">User Experiance</a></li>
                            <li><a href="#" className="slide-right-head">design</a></li>
                          </ul>

                          <div className="res-line-bottom">
                            <span>
                              May 14, 2019
                              </span>
                            <div className="res-line-icon">
                              <span className="demo-icon icon-electro-add-to-cart-icon"></span>
                              <span className="demo-icon icon-electro-add-to-cart-icon"></span>
                            </div>

                          </div>

                          <div className="acces-top-hover">
                            <span>PROMOTED</span>
                          </div>

                        </div>


                        <div className="slide-main-sec">
                          <div className="slide-main-top">
                            <div className="slide-left-img">
                              <span>
                                <img src="http://accessed.s3-us-west-2.amazonaws.com/company/2/images/amazon.png" />
                              </span>
                            </div>
                            <div className="slide-right-content">
                              <h4> <a href="#" className="slide-right-head">Senior Product</a> </h4>
                              <span>Designer - Growth</span><br />
                              <a className="link-apple">Apple</a><br />
                              <p>Cupertino, US</p>
                            </div>
                          </div>

                          <ul className="res-line-seniar">
                            <li>Mid-Senior</li>
                            <li>Full Time</li>
                            <li>$115K PA</li>
                          </ul>

                          {/* <p className="res-deatil">
                            If you live and breathe the user expreience, Love solving problem and thrive on variety, Atlassian has a great opportunity for you.
                          </p> */}

                          <ul className="res-line-tags">
                            <li><a href="#" className="slide-right-head">design</a></li>
                            <li><a href="#" className="slide-right-head">User Experiance</a></li>
                            <li><a href="#" className="slide-right-head">design</a></li>
                          </ul>

                          <div className="res-line-bottom">
                            <span>
                              May 14, 2019
                              </span>
                            <div className="res-line-icon">
                              <span className="demo-icon icon-electro-add-to-cart-icon"></span>
                              <span className="demo-icon icon-electro-add-to-cart-icon"></span>
                            </div>

                          </div>

                          <div className="acces-top-hover">
                            <span>PROMOTED</span>
                          </div>

                        </div>


                        <div className="slide-main-sec">
                          <div className="slide-main-top">
                            <div className="slide-left-img">
                              <span>
                                <img src="http://accessed.s3-us-west-2.amazonaws.com/company/2/images/amazon.png" />
                              </span>
                            </div>
                            <div className="slide-right-content">
                              <h4> <a href="#" className="slide-right-head">Senior Product</a> </h4>
                              <span>Designer - Growth</span><br />
                              <a className="link-apple">Apple</a><br />
                              <p>Cupertino, US</p>
                            </div>
                          </div>

                          <ul className="res-line-seniar">
                            <li>Mid-Senior</li>
                            <li>Full Time</li>
                            <li>$115K PA</li>
                          </ul>

                          {/* <p className="res-deatil">
                            If you live and breathe the user expreience, Love solving problem and thrive on variety, Atlassian has a great opportunity for you.
                          </p> */}

                          <ul className="res-line-tags">
                            <li><a href="#" className="slide-right-head">design</a></li>
                            <li><a href="#" className="slide-right-head">User Experiance</a></li>
                            <li><a href="#" className="slide-right-head">design</a></li>
                          </ul>

                          <div className="res-line-bottom">
                            <span>
                              May 14, 2019
                              </span>
                            <div className="res-line-icon">
                              <span className="demo-icon icon-electro-add-to-cart-icon"></span>
                              <span className="demo-icon icon-electro-add-to-cart-icon"></span>
                            </div>

                          </div>

                          <div className="acces-top-hover">
                            <span>PROMOTED</span>
                          </div>

                        </div>




                      </OwlCarousel>
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
