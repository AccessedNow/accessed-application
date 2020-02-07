/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import Jumbo from 'components/Jumbo';

import './Home.scss';

import shape from '../../assets/shapes.png';

import companyLogo from '../../assets/company-logo.jpg'

import step1 from '../../assets/step-1.png';
import step2 from '../../assets/step-2.png';
import step3 from '../../assets/step-3.png';

import techcom from '../../assets/techcom.png';



export function HomePage() {
  return (
    <article>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Accessed Home" />
      </Helmet>
      <div id="body-content">
        <div id="main-content">
          <Jumbo />
          {/* explore-the-opportunities */}
          <section className="explore-the-opportunities">
            <div className="container">
              <div className="row" data-aos="fade-up">
                <div className="col-md-12">
                  <div className="main-heading">
                    <h2>Explore The Opportunities</h2>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-4 col-sm-4">
                  <div className="opportunities">
                    <img src={step1} className="img-responsive" alt="" />
                    <h4>Systems Administration</h4>
                    <p>$1,240 <span>of Hiring reward</span></p>
                    <p>9 San Francisco</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="opportunities">
                    <img src={step1} className="img-responsive" alt="" />
                    <h4>Systems Administration</h4>
                    <p>$1,240 <span>of Hiring reward</span></p>
                    <p>9 San Francisco</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="opportunities">
                    <img src={step1} className="img-responsive" alt="" />
                    <h4>Systems Administration</h4>
                    <p>$1,240 <span>of Hiring reward</span></p>
                    <p>9 San Francisco</p>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-md-4 col-sm-4">
                  <div className="opportunities">
                    <img src={step1} className="img-responsive" alt="" />
                    <h4>Systems Administration</h4>
                    <p>$1,240 <span>of Hiring reward</span></p>
                    <p>9 San Francisco</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="opportunities">
                    <img src={step1} className="img-responsive" alt="" />
                    <h4>Systems Administration</h4>
                    <p>$1,240 <span>of Hiring reward</span></p>
                    <p>9 San Francisco</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="opportunities">
                    <img src={step1} className="img-responsive" alt="" />
                    <h4>Systems Administration</h4>
                    <p>$1,240 <span>of Hiring reward</span></p>
                    <p>9 San Francisco</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* browse-jobs-by-catogery */}
          <section className='browse-jobs-by-catogery'>
            <div className="container">
              <div className="row" data-aos="fade-up">
                <div className="col-md-12">
                  <div className="main-heading">
                    <h2>Browse jobs by catogery</h2>
                    <h6 className='m-t-2'>choose form the list of most popular categories</h6>
                  </div>
                </div>
              </div>
              <div className="row border-bottom">
                <div className="col-md-4 col-sm-4">
                  <div className="working-process">
                    <span className="process-img">
                      <img src={step1} className="img-responsive" alt="" />
                    </span>
                    <h4>Accounting/Finance</h4>
                    <p>193 Open Position</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 border-left-right">
                  <div className="working-process">
                    <span className="process-img">
                      <img src={step2} className="img-responsive" alt="" />
                    </span>
                    <h4>Design/Creative</h4>
                    <p>193 Open Position</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="working-process">
                    <span className="process-img">
                      <img src={step3} className="img-responsive" alt="" />
                    </span>
                    <h4>IT &amp; Telecommunication</h4>
                    <p>193 Open Position</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 col-sm-4">
                  <div className="working-process">
                    <span className="process-img">
                      <img src={step1} className="img-responsive" alt="" />
                    </span>
                    <h4>Accounting/Finance</h4>
                    <p>193 Open Position</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 border-left-right">
                  <div className="working-process">
                    <span className="process-img">
                      <img src={step2} className="img-responsive" alt="" />
                    </span>
                    <h4>Design/Creative</h4>
                    <p>193 Open Position</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="working-process">
                    <span className="process-img">
                      <img src={step3} className="img-responsive" alt="" />
                    </span>
                    <h4>IT &amp; Telecommunication</h4>
                    <p>193 Open Position</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* latest jobs */}
          <section className="latest-job">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <h3>Latest Jobs</h3>
                </div>
                <div className="text-right col-lg-6 col-md-6 col-sm-12 col-12">
                  <ul className="list-inline job-search-type">
                    <li>Hot Jobs</li>
                    <li className='active'>Recent Jobs</li>
                    <li>Popular Jobs</li>
                  </ul>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex comapny-job-desc">
                            <img className='company' src={companyLogo} alt='company logo' />
                            <div className='ml-4'>
                              <h5>Collective Press</h5>
                              <span>Webdesign Redesign</span>
                            </div>
                          </div>
                        </td>
                        <td>Full Time</td>
                        <td>San Francisco, CA</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex comapny-job-desc">
                            <img className='company' src={companyLogo} alt='company logo' />
                            <div className='ml-4'>
                              <h5>Collective Press</h5>
                              <span>Webdesign Redesign</span>
                            </div>
                          </div>
                        </td>
                        <td>Full Time</td>
                        <td>San Francisco, CA</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex comapny-job-desc">
                            <img className='company' src={companyLogo} alt='company logo' />
                            <div className='ml-4'>
                              <h5>Collective Press</h5>
                              <span>Webdesign Redesign</span>
                            </div>
                          </div>
                        </td>
                        <td>Full Time</td>
                        <td>San Francisco, CA</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex comapny-job-desc">
                            <img className='company' src={companyLogo} alt='company logo' />
                            <div className='ml-4'>
                              <h5>Collective Press</h5>
                              <span>Webdesign Redesign</span>
                            </div>
                          </div>
                        </td>
                        <td>Full Time</td>
                        <td>San Francisco, CA</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex comapny-job-desc">
                            <img className='company' src={companyLogo} alt='company logo' />
                            <div className='ml-4'>
                              <h5>Collective Press</h5>
                              <span>Webdesign Redesign</span>
                            </div>
                          </div>
                        </td>
                        <td>Full Time</td>
                        <td>San Francisco, CA</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex comapny-job-desc">
                            <img className='company' src={companyLogo} alt='company logo' />
                            <div className='ml-4'>
                              <h5>Collective Press</h5>
                              <span>Webdesign Redesign</span>
                            </div>
                          </div>
                        </td>
                        <td>Full Time</td>
                        <td>San Francisco, CA</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex comapny-job-desc">
                            <img className='company' src={companyLogo} alt='company logo' />
                            <div className='ml-4'>
                              <h5>Collective Press</h5>
                              <span>Webdesign Redesign</span>
                            </div>
                          </div>
                        </td>
                        <td>Full Time</td>
                        <td>San Francisco, CA</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex comapny-job-desc">
                            <img className='company' src={companyLogo} alt='company logo' />
                            <div className='ml-4'>
                              <h5>Collective Press</h5>
                              <span>Webdesign Redesign</span>
                            </div>
                          </div>
                        </td>
                        <td>Full Time</td>
                        <td>San Francisco, CA</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex comapny-job-desc">
                            <img className='company' src={companyLogo} alt='company logo' />
                            <div className='ml-4'>
                              <h5>Collective Press</h5>
                              <span>Webdesign Redesign</span>
                            </div>
                          </div>
                        </td>
                        <td>Full Time</td>
                        <td>San Francisco, CA</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex comapny-job-desc">
                            <img className='company' src={companyLogo} alt='company logo' />
                            <div className='ml-4'>
                              <h5>Collective Press</h5>
                              <span>Webdesign Redesign</span>
                            </div>
                          </div>
                        </td>
                        <td>Full Time</td>
                        <td>San Francisco, CA</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row mt-2 table-footer">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <p>Showing <span>15</span> of 1200 Latest jobs</p>
                </div>
                <div className="text-right col-lg-6 col-md-6 col-sm-12 col-12">
                  <ul className="list-inline job-search-type">
                    <li>1</li>
                    <li className='active'>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>...</li>
                    <li>50</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* over 10000 top */}
          <section className="over-top-company">
            <div className="container">
              <div className="row">
                <div className="right-side col-lg-6 col-md-6 col-sm-12 col-12">
                  <img className="shape" src={shape} alt="shape" />
                  <h2>Over 10,000 top <br />Companies join with us</h2>
                  <p>postingnow includes out of the box integration with major <br />
                    CRM &amp; accounting and ERP platforms, as well as an open <br />
                    API that allows you to seamlessly integrate with your busi-<br />
                    ness systems.</p>
                  <div>
                    <a href="/account" title="Sign Up Free" className="ml-3 btn btn-blue">SIGN UP FREE</a>
                    <a href="/account" title="Watch video" className="ml-3 btn btn-white">Watch Video</a>
                  </div>
                </div>
                <div className="pt-5 left-side col-lg-6 col-md-6 col-sm-12 col-12">
                  <img src={techcom} alt="teamimage" />
                </div>
              </div>
            </div>
          </section>

          {/* transferwise */}
          <section className="transfer-wise">
            {/* <div className="container"> */}
            <div className="row">
              <div className="right-side d-flex justify-content-center align-items-center col-lg-6 col-md-6 col-sm-12 col-12">
                <img src={techcom} alt="teamimage" />
              </div>
              <div className="pt-5 left-side d-flex justify-content-between flex-column col-lg-6 col-md-6 col-sm-12 col-12">
                <h3 className="mt-4">TransferWise</h3>
                <p className="mt-4 quote">"Working with Checkout com on cards processing,<br />
                  they've proven to be flexible, responsive, and delivered <br />
                  excellent customer service."</p>
                <div className="author">
                  <h6>Ilya Leyrikh</h6>
                  <p className="pt-3">Head of Product</p>
                </div>
                <div className="list-content d-flex justify-content-around align-items-center">
                  <span>TransferWise</span>
                  <span>AnyVan</span>
                  <span>Flyin.com</span>
                  <span>iBooldng.com</span>
                </div>
              </div>
            </div>
            {/* </div> */}
          </section>
        </div>
      </div>
    </article>
  );
}
export default HomePage;