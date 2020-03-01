/*
 * JobDetailPage
 *
 * This page will display jobs list on our App, at the '/jobs' route
 */

import React, { useEffect, memo, useState } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import {
    useParams
} from "react-router-dom";
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import { getJobDetail } from './actions';
import { makeSelectJob } from './selectors';
import {
    makeSelectLoading,
    makeSelectError,
} from 'containers/App/selectors';

import CoverBanner from "../../components/CoverBanner";
import TagButton from "../../components/TagButton";
import GroupItem from "../../components/GroupItem";
import ListUserItem from "../../components/ListUserItem";

import './JobDetailPage.scss';


const key = 'jobdetail';

export function JobDetail({
  loading,
  error,
  job,
  loadJob,
    onTagClick
}) {

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  //let { id } = useParams();
  loadJob(100000);


  console.log('job', job);
  if(!job){
    job={
        jobId : 100000, title : "VP, Business Technology",
        hasSaved : false, isExternal : false, externalUrl : "", noApplied: 12, noOfResources : 1, employmentType : "Full Time", expirationDate : 1580545602,
        requiredOnDate : 1581755202, salaryRangeLow : 65000, salaryRangeHigh : 80000, salaryFixed : null, jobFunction : "TECH",
        level : "EXECUTIVE", city : "Quan 1", state : "Ho Chi Minh", country : "VN",

        skills: [
            {
                _id: "5e4e849271e3f344564e540e",
                skillTypeId: 2,
                name: "Java",
                parent: "1",
                sequence: 0
            },
            {
                _id: "5e4e849271e3f344564e5410",
                skillTypeId: 3,
                name: "Python",
                parent: "1",
                sequence: 0
            },
            {
                _id: "5e4e849271e3f344564e5411",
                skillTypeId: 4,
                name: "NodeJS",
                parent: "1",
                sequence: 0
            },
            {
                _id: "5e4e849271e3f344564e5412",
                skillTypeId: 5,
                name: "ReactJS",
                parent: "1",
                sequence: 0
            },
            {
                _id: "5e4e849271e3f344564e5417",
                skillTypeId: 6,
                name: "AngularJS",
                parent: "1",
                sequence: 0
            },
            {
                _id: "5e4e849271e3f344564e5413",
                skillTypeId: 7,
                name: "IOS",
                parent: "1",
                sequence: 0
            },
            {
                _id: "5e4e849271e3f344564e5414",
                skillTypeId: 8,
                name: "Android",
                parent: "1",
                sequence: 0
            },
            {
                _id: "5e4e849271e3f344564e5415",
                skillTypeId: 9,
                name: "Oracle DB",
                parent: "1",
                sequence: 0
            }
        ],
        promotion : { id : 1, type : "HOT", createdDate : 1578887589, hasExpired : true },
        company : {
            id : 2, groupName : "Amazon", type : "COMPANY", imageUrl : "logo.png", rating : 4.2, hasFollowed : true, noFollowers : 215000,
            address : { id : 1, city : "San Francisco", state : "CA", country : "US"},
            companyImages : [ "amazon.jpg", "amazon2.jpg", "amazon3.jpg", "amazon4.jpg", "amazon5.jpg" ],
            benefits : [ { id : 1, name : "Dental Insurance" }, { id : 2, name : "Medical Insurance" }, { id : 3, name : "Vision Insurance" }, { id : 4, name : "401(K) Match" } ]
        },

        connection : {
            noConnection : 3,
            list : [
                { id : 1, type: "PERSON", firstName : "John", lastName : "Mandelin", imageUrl : "profile.png", title : "Sr. Development Manager", permissions : [ { message : true } ] },
                { id : 2, type: "PERSON", firstName : "Linda", lastName : "Chan", imageUrl : "profile.png", title : "Enginnering Director", permissions : [ { email : true } ] },
                { id : 3, type: "PERSON", firstName : "Elizabeth", lastName : "Remington", imageUrl : "profile.png", title : "Sr. Recruiter", permissions : [ { connect : true }]}
        ]},
        description: "Vice President of Business Technology (Information Technology and Business Systems) leads a team that creates and delivers internal infrastructure and systems to improve the overall value and performance of the organisation. The Vice President will be responsible for planning and delivering the function's strategy, goals, budget, services, processes, projects, infrastructure and assets ensuring consistent alignment with, and facilitation of, Marqeta's business strategy. The ideal candidate will be a strong technical leader with sound business acumen and executive presence, able to drive focus and accountability to business commitments.",

        responsibilities : [
            "Analyse the organisation's needs and requirements. Validate and develop technology investments including new enhancements and functionality. Ensure appropriate research, configuration and testing of system functionality.",
            "Define, design, develop, implement and operate a single source of truth for all business data, including data definitions, architecture, governance and access.",
            "Own all business systems, infrastructure and assets, including the architecture, operations, licencing and management. Support core IT systems, Network / Cloud Management & Security, and Business Applications (including CRM, ERP, HRIS, Document Management, Content Management, Business Process Management and workflow systems including SDFC, Docusign, Sage Intacct, Paylocity).",
            "Evaluate current business systems and relevant processes and recommend better solutions to improve efficiency. Streamline business processes and applications with technology.",
            "Collaborate and manage vendors that supply systems, infrastructure, assets and applications.", "Align the company's IT infrastructure with business priorities and develop strategies to increase the company's bottom line (profitability).",
            "Evaluate and enhance internal controls, and quality assurance related to application development and key processes. Establish security standards and proactively identify and prevent security risks.",
            "Develop and maintain training programs for all business systems.",
            "Develop, maintain and enforce written policies and procedures regarding all business technology systems including data processing and infrastructure.",
            "Manage the IT and Systems teams with empathy, humility and intelligence, mentoring staff and providing direction and guidance."
        ],

        qualifications : [
            "Minimum 15+ years of relevant technical experience, including 8+ years in a leadership role. Strong Servant Leadership Philosophy.",
            "Graduate degree in Computer Science, Computer Engineering, Information Systems, Business Administration or other related field",
            "Demonstrated experience in solution design and enterprise architecture with experience leading technology transformation, automation and scaling strategies both at the start-up and enterprise levels. Deep understanding of IT systems and infrastructure including the universe of SaaS business products (i.e. Salesforce), data management, architecture databases, data management techniques and experience across all IT functional areas. Experience implementing and maintaining financial business systems. Experience across multiple geographies preferred.",
            "Experience with sensitive data and creating systems that meet security and compliance requirements. Experience with SOX, PCI, SOC2 and IT audit controls of a public company.",
            "Ability to communicate clearly and effectively with a wide range of individuals from various functional and technical backgrounds.",
            "Comprehensive expertise in business analysis, requirement gathering, technical documentation and business process reengineering. Strong understanding of and experience with implementing and maintaining IT Service Management best practices and framework.",
            "Effectively influence, negotiate and lead the evaluations and implementation of technology solutions. Working knowledge in Agile development environment with strong engineering principles.",
            "Strong customer service orientation and ability to work well with diverse internal and external constituents in a team-oriented environment."
        ]
    }
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
                        <span itemProp="title" className="d-none">Accessed</span>Home
                    </a>
                    </li>
                    <li itemScope="" itemType="http://data-vocabulary.org/Breadcrumb" className="d-none">
                      <a href="/collections/all" itemProp="url">
                        <span itemProp="title">Jobs Detail</span>
                      </a>
                    </li>
                    <li className="active">{job.title}</li>
                  </ul>
                </div>
                {/* Breadcrumb End */}
              </div>

              {/* Main Container Start */}
              <div className="container">

                  <div className="row">
                      <div className="col-lg-9 col-md-12 col-sm-12 col-12">
                          <div className="banner-item text-box-overlay center-center">
                              <CoverBanner item={job.company}/>

                              <div className="text"></div>
                          </div>
                          <div id="col-main" className="page-product page-job-detail layout-normal">
                              <div className="product">
                                  <div className="product-content-wrapper">
                                      <div className="row">
                                          <div className="col-lg-12">

                                              <div id="product-info" className="product-info">

                                                  <div className="product-info-inner">
                                                      <div className="row section">
                                                          <div className="col-lg-9 col-md-9 col-sm-9 col-9">

                                                              <div className="product-vendor"><a href="/collections/vendors?q=Givenchy" title="Givenchy">{job.company.groupName}</a></div>
                                                              <h1 itemProp="name" content="Dentoex Product Sample" className="page-heading">{job.title}</h1>
                                                              <div className="rating-links">
                                                              <span className="spr-badge" id="spr_badge_1394248056896" data-rating="5.0">
                                                                  <span className="spr-starrating spr-badge-starrating">
                                                                      <i className="spr-icon spr-icon-star"></i>
                                                                      <i className="spr-icon spr-icon-star"></i>
                                                                      <i className="spr-icon spr-icon-star"></i>
                                                                      <i className="spr-icon spr-icon-star"></i>
                                                                      <i className="spr-icon spr-icon-star"></i>
                                                                  </span>
                                                                  <span className="spr-badge-caption">1 review</span>
                                                              </span>
                                                              <a href="#tab_review">Add Your Review</a>
                                                          </div>

                                                              <div className="share-links social-sharing" data-permalink="https://arena-electro.myshopify.com/products/consectetur-nibh-eget">
                                                                  <ul className="list-inline">
                                                                      <li>
                                                                          <a className="facebook" target="_blank" rel="noopener" href="//www.facebook.com/sharer.php?u=https://arena-electro.myshopify.com/products/consectetur-nibh-eget" title="Facebook">
                                                                              <i className="demo-icon icon-facebook"></i><span>Share</span>
                                                                          </a>
                                                                      </li>
                                                                      <li>
                                                                          <a className="twitter" target="_blank" rel="noopener" href="//twitter.com/share?url=https://arena-electro.myshopify.com/products/consectetur-nibh-eget&amp;text=consectetur-nibh-eget" title="Twitter">
                                                                              <i className="demo-icon icon-twitter"></i><span>Tweet</span>
                                                                          </a>
                                                                      </li>
                                                                      <li>
                                                                          <a className="google" target="_blank" rel="noopener" href="//plus.google.com/share?url=https://arena-electro.myshopify.com/products/consectetur-nibh-eget" title="Google">
                                                                              <i className="demo-icon icon-google"></i><span>Google+</span>
                                                                          </a>
                                                                      </li>
                                                                  </ul>
                                                              </div>

                                                              <div id="">
                                                                  <span>Posted 1 week ago - </span>
                                                                  <span className="stock">{job.noApplied} Applicants</span>
                                                              </div>
                                                          </div>
                                                          <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                                                              <div className="group-cw clearfix">
                                                                  <div className="action-button">
                                                                      <button id="add-to-cart" className="sold-out btn btn-1" type="button"><span className="demo-icon icon-electro-add-to-cart-icon"></span>Saved</button>
                                                                  </div>

                                                                  <div className="pre-order">
                                                                      <a href="#pre-order-popup" className="btn-pre-order btn btn-1">Apply</a>
                                                                  </div>

                                                              </div>
                                                          </div>
                                                      </div>

                                                      <div className="row section">
                                                          <h2 className="subcategory">Required Skills</h2>
                                                          <div className="required-skills">
                                                              <ul className="tag-list">
                                                              {job.skills.map((item) => (
                                                                  <li key={item.name}>
                                                                      <TagButton className="btn-sm badge-light" onClick={onTagClick} >
                                                                          <span>{item.name}</span>
                                                                      </TagButton>
                                                                  </li>
                                                              ))}
                                                              </ul>
                                                          </div>
                                                      </div>

                                                      <div className="row section">
                                                          <h2 className="section subcategory">Feature Benefits</h2>
                                                          <div className="benefits">
                                                              <ul className="tag-list">
                                                                  {job.company.benefits.map((item) => (
                                                                      <li key={item.name}>
                                                                          <TagButton className="btn-sm badge-light" onClick={onTagClick} >
                                                                              <span>{item.name}</span>
                                                                          </TagButton>
                                                                      </li>
                                                                  ))}
                                                              </ul>
                                                          </div>
                                                      </div>

                                                      <div className="row section">
                                                          <h2 className="subcategory">Role Overview</h2>
                                                          <div className="role-overview">
                                                              <p>{job.description}</p>
                                                          </div>
                                                      </div>

                                                      <div className="row section">
                                                          <h2 className="subcategory">Duties and Responsiblitites</h2>
                                                          <div className="section responsibility">
                                                              <ul className="list">
                                                                  {job.responsibilities.map((text) => (
                                                                      <li key={text}>
                                                                          <span>{text}</span>
                                                                      </li>
                                                                  ))}
                                                              </ul>
                                                          </div>
                                                      </div>


                                                      <div className="row section">
                                                          <h2 className="subcategory">Learn More About {job.company.groupName}</h2>
                                                          <div className="section item">
                                                              <GroupItem group={job.company}/>
                                                          </div>
                                                          <div className="row wrap-slider">
                                                              <div className="item col-md-4 col-sm-12">
                                                                  <div className="image">
                                                                      <img src="//cdn.shopify.com/s/files/1/0013/8815/0848/files/3column1_500x.jpg?v=1542272396" alt="Image" />
                                                                  </div>
                                                              </div>

                                                              <div className="item col-md-4 col-sm-12">
                                                                  <div className="image">
                                                                      <img src="//cdn.shopify.com/s/files/1/0013/8815/0848/files/3column2_500x.jpg?v=1542272396" alt="Image" />
                                                                  </div>
                                                              </div>
                                                              <div className="item col-md-4 col-sm-12">
                                                                  <div className="image">
                                                                      <img src="//cdn.shopify.com/s/files/1/0013/8815/0848/files/3column3_500x.jpg?v=1542272396" alt="Image" />
                                                                  </div>

                                                              </div>



                                                          </div>
                                                      </div>
                                                  </div>

                                              </div>

                                          </div>
                                      </div>
                                  </div>

                              </div>
                          </div>
                      </div>

                      <div id="sidebar-blog" className="sidebar col-lg-3 col-md-12 col-sm-12 col-12">

                          <div className="sb-widget">
                              <div className="sb-blog-posts">
                                  <h5 className="sb-title">Your Connections At {job.company.groupName}</h5>
                                  <div className="post-list">

                                      <ul className="user-list">
                                          {job.connection.list.map((user) => (
                                              <li><ListUserItem user={user} /></li>
                                          ))}
                                      </ul>


                                  </div>


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

JobDetail.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    job: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    loadJob: PropTypes.func,
    onTagclick: PropTypes.func
};

const mapStateToProps = createStructuredSelector({
    job: makeSelectJob(),
    loading: makeSelectLoading(),
    error: makeSelectError(),
});

const mapDispatchToProps = (dispatch) => {
  return {
    loadJob: (id) => {

      dispatch(getJobDetail(id));
    },
    onTagclick: () => {
        console.log('click');
    }
  };
};



const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
  memo,
)(JobDetail);
