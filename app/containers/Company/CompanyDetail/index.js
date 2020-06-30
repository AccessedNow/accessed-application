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
import CoverBanner from '../../../components/CoverBanner/index';

import './CompanyDetail.scss';


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

  return (
    <article>
      <Helmet>
        <title>Company</title>
      </Helmet>
      <div id="body-content">
        <div id="main-content">
          <div id="main-content">
            <div id="shopify-section-collection-template" className="shopify-section">
              {/* Main Container Start */}

              {company ?

                <div className="jss160 jss683 ps">
                  <div className="jss754 jss750">
                  <div className="p-24 flex flex-1 flex-col items-center justify-center md:flex-row md:items-end">
                    <div className="flex flex-1 flex-col items-center justify-center md:flex-row md:items-center md:justify-start">
                      <div className="MuiAvatar-root-767 MuiAvatar-circle-769 w-96 h-96">
                        <img src="http://react-material.fusetheme.com/assets/images/avatars/Velazquez.jpg" className="MuiAvatar-img-772" />
                      </div>
                      <h4 className="MuiTypography-root-774 md:mx-24 MuiTypography-h4-782 MuiTypography-colorInherit-796">John Doe</h4>
                    </div>
                    <div className="flex items-center justify-end">
                      <button className="MuiButtonBase-root-831 MuiButton-root-804 MuiButton-contained-812 mx-8 normal-case MuiButton-containedSecondary-814" tabIndex="0" type="button" aria-label="Follow"><span className="MuiButton-label-805">Follow</span><span className="MuiTouchRipple-root-836"></span></button>
                      <button className="MuiButtonBase-root-831 MuiButton-root-804 MuiButton-contained-812 normal-case MuiButton-containedPrimary-813" tabIndex="0" type="button" aria-label="Send Message">
                        <span className="MuiButton-label-805">Send Message</span>
                        <span className="MuiTouchRipple-root-836"></span></button>
                    </div>
                  </div>
                </div>

                  <div className="jss684 px-16 sm:px-24">
                    <div className="MuiTabs-root h-64 w-full border-b-1">
                      <div className="MuiTabs-scrollable"></div>
                      <div className="MuiTabs-scroller MuiTabs-scrollable">
                        <div className="MuiTabs-flexContainer" role="tablist">
                          <button className="MuiButtonBase-root MuiTab-root h-64 MuiTab-textColorPrimary Mui-selected" tabIndex="0" type="button" role="tab" aria-selected="true"><span className="MuiTab-wrapper">Timeline</span><span className="MuiTouchRipple-root"></span>
                          </button>
                          <button className="MuiButtonBase-root MuiTab-root h-64 MuiTab-textColorPrimary" tabIndex="-1" type="button" role="tab" aria-selected="false"><span className="MuiTab-wrapper">About</span><span className="MuiTouchRipple-root"></span>
                          </button>
                          <button className="MuiButtonBase-root MuiTab-root h-64 MuiTab-textColorPrimary" tabIndex="-1" type="button" role="tab" aria-selected="false"><span className="MuiTab-wrapper">Photos &amp; Videos</span><span className="MuiTouchRipple-root"></span></button>
                        </div>
                        <span className="jss759 jss760 MuiTabs-indicator"></span></div>
                    </div>
                  </div>

                  <div className="makeStyles-content-1866">
                    <div className="p-16 sm:p-24">


                      <div className="md:flex max-w-2xl">
                        <div className="flex flex-col flex-1 md:ltr:pr-32 md:rtl:pl-32">


                          <div className="MuiPaper-root MuiCard-root mb-32 overflow-hidden MuiPaper-elevation1 MuiPaper-rounded">
                            <div className="MuiCardHeader-root">
                              <div className="MuiCardHeader-avatar">
                                <div className="MuiAvatar-root MuiAvatar-circle" aria-label="Recipe"><img src="assets/images/avatars/garry.jpg" className="MuiAvatar-img" /></div>
                              </div>
                              <div className="MuiCardHeader-content"><span className="MuiTypography-root MuiCardHeader-title MuiTypography-body2 MuiTypography-displayBlock"><span className="flex"><p className="MuiTypography-root font-medium MuiTypography-body1 MuiTypography-colorPrimary">Garry Newman</p><span className="mx-4">posted on your timeline</span></span></span><span className="MuiTypography-root MuiCardHeader-subheader MuiTypography-body2 MuiTypography-colorTextSecondary MuiTypography-displayBlock">32 minutes ago</span>
                              </div>
                              <div className="MuiCardHeader-action">
                                <button className="MuiButtonBase-root MuiIconButton-root" tabIndex="0" type="button" aria-label="more"><span className="MuiIconButton-label"><span className="material-icons MuiIcon-root" aria-hidden="true">more_vert</span></span><span className="MuiTouchRipple-root"></span></button>
                              </div>
                            </div>
                            <div className="MuiCardContent-root py-0"><p className="MuiTypography-root mb-16 MuiTypography-body1">Remember the place we were talking about the other night? Found it!</p>
                              <img src="assets/images/profile/morain-lake.jpg" alt="post" />
                            </div>
                            <div className="MuiCardActions-root px-12">
                              <button className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textSizeSmall MuiButton-sizeSmall" tabIndex="0" type="button" aria-label="Add to favorites">
                                <span className="MuiButton-label">
                                  <span className="material-icons MuiIcon-root text-16 MuiIcon-colorAction" aria-hidden="true">favorite</span>
                                  <p className="MuiTypography-root normal-case mx-4 MuiTypography-body1">Like</p>
                                  <p className="MuiTypography-root normal-case MuiTypography-body1">(5)</p>
                                </span>
                                <span className="MuiTouchRipple-root"></span>
                              </button>
                              <button className="MuiButtonBase-root MuiButton-root MuiButton-text" tabIndex="0" type="button" aria-label="Share">
                                <span className="MuiButton-label">
                                  <span className="material-icons MuiIcon-root text-16 MuiIcon-colorAction" aria-hidden="true">share</span>
                                  <p className="MuiTypography-root normal-case mx-4 MuiTypography-body1">Share</p>
                                  <p className="MuiTypography-root normal-case MuiTypography-body1">(21)</p>
                                </span>
                                <span className="MuiTouchRipple-root"></span>
                              </button>
                            </div>
                            <header className="MuiPaper-root MuiAppBar-root MuiAppBar-positionStatic card-footer flex flex-column p-16 MuiAppBar-colorDefault MuiPaper-elevation0">
                              <div className="">
                                <div className="flex items-center"><p className="MuiTypography-root MuiTypography-body1">1 comments</p><span className="material-icons MuiIcon-root text-16 mx-4 MuiIcon-colorAction" aria-hidden="true">keyboard_arrow_down</span></div>
                                <ul className="MuiList-root MuiList-padding">
                                  <div>
                                    <li className="MuiListItem-root px-0 -mx-8 MuiListItem-gutters">
                                      <div className="MuiAvatar-root MuiAvatar-circle mx-8">
                                        <img alt="Alice Freeman" src="assets/images/avatars/alice.jpg" className="MuiAvatar-img" />
                                      </div>
                                      <div className="MuiListItemText-root px-4 MuiListItemText-multiline">
                                        <span className="MuiTypography-root MuiListItemText-primary MuiTypography-body1">
                                          <div className="flex">
                                            <p className="MuiTypography-root font-medium MuiTypography-body1">Alice Freeman</p>
                                            <span className="MuiTypography-root mx-4 MuiTypography-caption">June 10, 2015</span>
                                          </div>
                                        </span>
                                        <p className="MuiTypography-root MuiListItemText-secondary MuiTypography-body2 MuiTypography-colorTextSecondary">That’s
                                          a wonderful place. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                          Fusce et eleifend ligula. Fusce posuere in sapien ac facilisis. Etiam sit amet
                                          justo non felis ornare feugiat.</p></div>
                                    </li>
                                    <div className="flex items-center mx-52 mb-8"><a href="/pages/profile">Reply</a><span className="material-icons MuiIcon-root text-14 mx-8 cursor-pointer" aria-hidden="true">flag</span></div>
                                  </div>
                                </ul>
                              </div>
                              <div className="flex flex-auto -mx-4">
                                <div className="MuiAvatar-root MuiAvatar-circle mx-4"><img src="assets/images/avatars/profile.jpg" className="MuiAvatar-img" /></div>
                                <div className="flex-1 mx-4">
                                  <div className="MuiPaper-root w-full mb-16 MuiPaper-elevation0 MuiPaper-rounded">
                                    <div className="MuiInputBase-root MuiInput-root text-13 p-8 w-full border-1 MuiInputBase-multiline MuiInput-multiline">
                                      <textarea placeholder="Add a comment.." rows="6" className="MuiInputBase-input MuiInput-input MuiInputBase-inputMultiline MuiInput-inputMultiline"></textarea>
                                    </div>
                                  </div>
                                  <button className="MuiButtonBase-root MuiButton-root MuiButton-contained normal-case MuiButton-containedPrimary MuiButton-containedSizeSmall MuiButton-sizeSmall" tabIndex="0" type="button">
                                    <span className="MuiButton-label">Post Comment</span>
                                    <span className="MuiTouchRipple-root"></span>
                                  </button>
                                </div>
                              </div>
                            </header>
                          </div>

                        </div>

                      </div>

                    </div>
                  </div>
                </div>
                : <span>t</span>
              }

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
  company: PropTypes.any.isRequired
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
