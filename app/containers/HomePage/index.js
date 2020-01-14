/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import { Helmet } from 'react-helmet';
import Jumbo from 'components/Jumbo';

import './Home.scss';
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
          <Jumbo/>
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
              <div className="row">
                <div className="col-md-4 col-sm-4">
                  <div className="working-process">
                    <span className="process-img">
                    <img src={step1} className="img-responsive" alt="" />
                    <span className="process-num">01</span>
                    </span>
                    <h4>Create An Account</h4>
                    <p>Post a job to tell us about your project. We'll quickly match you with the right
                      freelancers find place best.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="working-process">
                    <span className="process-img">
                    <img src={step2} className="img-responsive" alt="" />
                    <span className="process-num">02</span>
                    </span>
                    <h4>Search Jobs</h4>
                    <p>Post a job to tell us about your project. We'll quickly match you with the right
                      freelancers find place best.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="working-process">
                    <span className="process-img">
                    <img src={step3} className="img-responsive" alt="" />
                    <span className="process-num">03</span>
                    </span>
                    <h4>Save &amp; Apply</h4>
                    <p>Post a job to tell us about your project. We'll quickly match you with the right
                      freelancers find place best.
                    </p>
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
                    <span className="process-num">01</span>
                    </span>
                    <h4>Accounting/Finance</h4>
                    <p>193 Open Position</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 border-left-right">
                  <div className="working-process">
                    <span className="process-img">
                    <img src={step2} className="img-responsive" alt="" />
                    <span className="process-num">02</span>
                    </span>
                    <h4>Design/Creative</h4>
                    <p>193 Open Position</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="working-process">
                    <span className="process-img">
                    <img src={step3} className="img-responsive" alt="" />
                    <span className="process-num">03</span>
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
                    <span className="process-num">01</span>
                    </span>
                    <h4>Accounting/Finance</h4>
                    <p>193 Open Position</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 border-left-right">
                  <div className="working-process">
                    <span className="process-img">
                    <img src={step2} className="img-responsive" alt="" />
                    <span className="process-num">02</span>
                    </span>
                    <h4>Design/Creative</h4>
                    <p>193 Open Position</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="working-process">
                    <span className="process-img">
                    <img src={step3} className="img-responsive" alt="" />
                    <span className="process-num">03</span>
                    </span>
                    <h4>IT &amp; Telecommunication</h4>
                    <p>193 Open Position</p>
                  </div>
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