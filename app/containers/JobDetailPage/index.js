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

import {buildPartyUrl} from "../../helper/urlHelper";
import CoverBanner from "../../components/CoverBanner";
import Button from "../../components/Button";
import TagButton from "../../components/TagButton";
import GroupItem from "../../components/GroupItem";
import ListUserItem from "../../components/ListUserItem";
import ListItem from '../../components/ListItem';
import ListJobItem from '../../components/ListJobItem';
import SideBar from '../../components/SideBar';
import CategoryToolbar from '../../components/CategoryToolbar';
import CompanyFilter from '../../components/CompanyFilter';

import './JobDetailPage.scss';


const key = 'job';

export function JobDetail({
  match,
  loading,
  error,
  job,
  loadJob,
    onTagClick
}) {

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    loadJob(params.id);
  }, []);

  let jobs = [];

  let similarJobs = [];
  // let { id } = useParams();

  // const { params } = this.props.match.params
  // loadJob(params.id);

  const [params, setParams] = useState({
    id: match.params.id,
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

  console.log('job', job)

  if(!job){

      /*
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
            id : 2, groupName : "Amazon", partyType : "COMPANY", imageUrl : "logo.png", rating : 4.2, hasFollowed : true, noFollowers : 215000,
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
    };
*/

    similarJobs = [
        {
            jobId : 100001, title : "VP, Business Technology", createdDate : 1583136282000,
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
            }

        }
        ];


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

              {/* Main Container Start */}
                {job && (
              <div className="container">


                  <div className="row">
                      {/* Side Bar */}
                      <div id="sidebar" className="left-column-container col-lg-3">
                        <SideBar title={'Categories'} menus={menus} />

                        <CompanyFilter {...jobs} />
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12 col-12">

                          <CoverBanner item={job.company}/>
                          <div id="col-main" className="page-product page-job-detail layout-normal">
                              <div className="product">
                                  <div className="product-content-wrapper">
                                      <div className="row">

                                          <div id="product-info" className="product-info">

                                              <div className="product-info-inner">
                                                  <div className="section">
                                                      <div className="">


                                                          <h1 itemProp="name" content="Dentoex Product Sample" className="page-heading">{job.title}</h1>
                                                          <div className="product-vendor"><a href={buildPartyUrl(job.company)} title="Givenchy">{job.company.groupName}</a></div>
                                                          <div id="">
                                                              <span>Posted 1 week ago - </span>
                                                              <span className="stock">{job.noApplied} Applicants</span>
                                                          </div>
                                                      </div>

                                                  </div>

                                                  <div className="section">
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

                                                  <div className="section">
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

                                                  <div className="section">
                                                      <h2 className="subcategory">Role Overview</h2>
                                                      <div className="role-overview">
                                                          <p>{job.description}</p>
                                                      </div>
                                                  </div>

                                                  <div className="section">
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


                                                  <div className="section">
                                                      <h2 className="subcategory">Learn More About {job.company.groupName}</h2>
                                                      <div className="section item">
                                                          <GroupItem group={job.company}/>
                                                      </div>
                                                      <div className="container image-text">
                                                        <div className="row">
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

                                                  {similarJobs ? (

                                                      <div id="col-main">
                                                          <div className="cata-product cata-list cp-grid">
                                                              {similarJobs.map((job) => (
                                                                  <ListJobItem key={job.id} job={job} />
                                                              ))}
                                                          </div>

                                                      </div>

                                                  ) : (<span></span>)}

                                              </div>

                                          </div>

                                      </div>
                                  </div>

                              </div>
                          </div>
                      </div>

                      <div id="sidebar" className="sidebar col-lg-3 col-md-12 col-sm-12 col-12">

                          <div className="sb-widget">
                              <div className="sb-blog-posts">
                                  <h5 className="sb-title">Your Connections At {job.company.groupName}</h5>
                                  <div className="post-list">

                                      <ul className="user-list">
                                          {job.connection.list.map((user) => (
                                              <li key={user.id}><ListUserItem user={user} /></li>
                                          ))}
                                      </ul>


                                  </div>


                              </div>
                          </div>

                          {similarJobs ? (
                              <div className="sb-widget">
                                  <div className="sb-blog-posts">
                                      <h5 className="sb-title">{job.company.groupName} Jobs</h5>
                                      <div className="cata-grid-1">
                                          <div className="cata-product cp-grid">

                                              {similarJobs.map((job) => (
                                                  <ListItem key={job.id} job={job}/>
                                              ))}
                                          </div>

                                      </div>
                                  </div>
                              </div>
                          ) : (<span></span>)}
                      </div>
                  </div>
              </div>

                )}
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
