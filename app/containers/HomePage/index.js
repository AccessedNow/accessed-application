/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
    makeSelectRepos,
    makeSelectLoading,
    makeSelectError,
} from 'containers/App/selectors';
import H2 from 'components/H2';
import Jumbo from 'components/Jumbo';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const key = 'home';

import './Home.scss';
import step1 from '../../assets/images/step-1.png';
import step2 from '../../assets/images/step-2.png';
import step3 from '../../assets/images/step-3.png';

import microsoft from '../../assets/images/microsoft-home-dark.png';
import imgDark from '../../assets/images/img-home-dark.png';
import paypal from '../../assets/images/paypal-home-dark.png';
import servcorp from '../../assets/images/serv-home-dark.png';
import xerox from '../../assets/images/xerox-home-dark.png';
import yahoo from '../../assets/images/yahoo-home-dark.png';

import com1 from '../../assets/images/com-1.jpg';
import com2 from '../../assets/images/com-2.jpg';
import com3 from '../../assets/images/com-3.jpg';
import com4 from '../../assets/images/com-4.jpg';
import com5 from '../../assets/images/com-5.jpg';
import com6 from '../../assets/images/com-6.jpg';
import com7 from '../../assets/images/com-7.jpg';



export function HomePage({
    username,
    loading,
    error,
    repos,
    loadRepos
}) {
    useInjectReducer({ key, reducer });
    useInjectSaga({ key, saga });

    loadRepos();

    useEffect(() => {
        // When initial state username is not null, submit the form to load repos
        if (username && username.trim().length > 0) onSubmitForm();
    }, []);

    const reposListProps = {
        loading,
        error,
        repos,
    };


    return (
        <article>
            <Helmet>
                <title>Home Page</title>
                <meta
                    name="description"
                    content="Accessed Home"
                />
            </Helmet>

            <div id="body-content" className="">
                <div id="main-content">
                    <Jumbo />

                    <div className="company-brand freelancer">
                        <div className="container">
                            <div id="company-brands" className="owl-carousel owl-theme">
                                <div className="owl-wrapper-outer">
                                    <div className="owl-wrapper">
                                        <div className="owl-item">
                                            <div className="brand-img">
                                                <img src={microsoft} className="img-responsive" alt="" />
                                            </div>
                                        </div>
                                        <div className="owl-item">
                                            <div className="brand-img">
                                                <img src={imgDark} className="img-responsive" alt="" />
                                            </div>
                                        </div>
                                        <div className="owl-item">
                                            <div className="brand-img">
                                                <img src={paypal} className="img-responsive" alt="" />
                                            </div>
                                        </div>
                                        <div className="owl-item">
                                            <div className="brand-img">
                                                <img src={servcorp} className="img-responsive" alt="" />
                                            </div>
                                        </div>
                                        <div className="owl-item">
                                            <div className="brand-img">
                                                <img src={xerox} className="img-responsive" alt="" />
                                            </div>
                                        </div>
                                        <div className="owl-item">
                                            <div className="brand-img">
                                                <img src={yahoo} className="img-responsive" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    <section className="how-it-works">
                        <div className="container">

                            <div className="row" data-aos="fade-up">
                                <div className="col-md-12">
                                    <div className="main-heading">
                                        <p>Working Process</p>
                                        <h2>How It <span>Works</span></h2>
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
                                        freelancers find place best.</p>
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
                                        freelancers find place best.</p>
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
                                        freelancers find place best.</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </section>


                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="main-heading">
                                    <p>200 New Jobs</p>
                                    <h2>New &amp; Random <span>Jobs</span></h2></div>
                            </div>
                            <div className="row extra-mrg">


                                <div className="col-md-3 col-sm-6">
                                    <div className="job-instructor-layout">
                                        <span className="tg-themetag tg-featuretag">Premium</span>
                                        <div className="brows-job-type"><span className="freelanc">Freelancer</span></div>
                                        <div className="job-instructor-thumb">
                                            <a href="job-detail.html"><img src={com2} className="img-fluid" alt="" /></a>
                                        </div>
                                        <div className="job-instructor-content">
                                            <h4 className="instructor-title"><a href="job-detail.html">Web Designing</a>
                                            </h4>
                                            <div className="instructor-skills">
                                                CSS3, HTML5, Javascript, Bootstrap, Jquery
                                        </div>
                                        </div>
                                        <div className="job-instructor-footer">
                                            <div className="instructor-students">
                                                <h5 className="instructor-scount">$3.2K - $5K</h5>
                                            </div>
                                            <div className="instructor-corses">
                                                <span className="c-counting">7 Open</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-md-3 col-sm-6">
                                    <div className="job-instructor-layout">
                                        <div className="brows-job-type"><span className="full-time">Full Time</span></div>
                                        <div className="job-instructor-thumb">
                                            <a href="job-detail.html"><img src={com3} className="img-fluid" alt="" /></a>
                                        </div>
                                        <div className="job-instructor-content">
                                            <h4 className="instructor-title"><a href="job-detail.html">App Developer</a>
                                            </h4>
                                            <div className="instructor-skills">
                                                CSS3, HTML5, Javascript, Bootstrap, Jquery
                                        </div>
                                        </div>
                                        <div className="job-instructor-footer">
                                            <div className="instructor-students">
                                                <h5 className="instructor-scount">$4.2K - $5K</h5>
                                            </div>
                                            <div className="instructor-corses">
                                                <span className="c-counting">2 Open</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-md-3 col-sm-6">
                                    <div className="job-instructor-layout">
                                        <div className="brows-job-type"><span className="part-time">Part Time</span></div>
                                        <div className="job-instructor-thumb">
                                            <a href="job-detail.html"><img src={com4} className="img-fluid"
                                                alt="" /></a>
                                        </div>
                                        <div className="job-instructor-content">
                                            <h4 className="instructor-title"><a href="job-detail.html">Software
                                            Developer</a></h4>
                                            <div className="instructor-skills">
                                                CSS3, HTML5, Javascript, Bootstrap, Jquery
                                        </div>
                                        </div>
                                        <div className="job-instructor-footer">
                                            <div className="instructor-students">
                                                <h5 className="instructor-scount">$6.5K - $8K</h5>
                                            </div>
                                            <div className="instructor-corses">
                                                <span className="c-counting">02 Open</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-md-3 col-sm-6">
                                    <div className="job-instructor-layout">
                                        <span className="tg-themetag tg-featuretag">Premium</span>
                                        <div className="brows-job-type"><span className="freelanc">Freelancer</span></div>
                                        <div className="job-instructor-thumb">
                                            <a href="job-detail.html"><img src={com5} className="img-fluid"
                                                alt="" /></a>
                                        </div>
                                        <div className="job-instructor-content">
                                            <h4 className="instructor-title"><a href="job-detail.html">iPhone Developer</a>
                                            </h4>
                                            <div className="instructor-skills">
                                                CSS3, HTML5, Javascript, Bootstrap, Jquery
                                        </div>
                                        </div>
                                        <div className="job-instructor-footer">
                                            <div className="instructor-students">
                                                <h5 className="instructor-scount">$3.7K - $6K</h5>
                                            </div>
                                            <div className="instructor-corses">
                                                <span className="c-counting">04 Open</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-md-3 col-sm-6">
                                    <div className="job-instructor-layout">
                                        <div className="brows-job-type"><span className="part-time">Part Time</span></div>
                                        <div className="job-instructor-thumb">
                                            <a href="job-detail.html"><img src={com6} className="img-fluid"
                                                alt="" /></a>
                                        </div>
                                        <div className="job-instructor-content">
                                            <h4 className="instructor-title"><a href="job-detail.html">UI/UX Designer</a>
                                            </h4>
                                            <div className="instructor-skills">
                                                CSS3, HTML5, Javascript, Bootstrap, Jquery
                                        </div>
                                        </div>
                                        <div className="job-instructor-footer">
                                            <div className="instructor-students">
                                                <h5 className="instructor-scount">$3.2K - $5K</h5>
                                            </div>
                                            <div className="instructor-corses">
                                                <span className="c-counting">05 Open</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-md-3 col-sm-6">
                                    <div className="job-instructor-layout">
                                        <span className="tg-themetag tg-featuretag">Premium</span>
                                        <div className="brows-job-type"><span className="full-time">Full Time</span></div>
                                        <div className="job-instructor-thumb">
                                            <a href="job-detail.html"><img src={com7} className="img-fluid"
                                                alt="" /></a>
                                        </div>
                                        <div className="job-instructor-content">
                                            <h4 className="instructor-title"><a href="job-detail.html">Content Writer</a>
                                            </h4>
                                            <div className="instructor-skills">
                                                CSS3, HTML5, Javascript, Bootstrap, Jquery
                                        </div>
                                        </div>
                                        <div className="job-instructor-footer">
                                            <div className="instructor-students">
                                                <h5 className="instructor-scount">$304K - $6K</h5>
                                            </div>
                                            <div className="instructor-corses">
                                                <span className="c-counting">02 Open</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3 col-sm-6">
                                    <div className="job-instructor-layout">
                                        <div className="brows-job-type"><span className="enternship">Tnternship</span></div>
                                        <div className="job-instructor-thumb">
                                            <a href="job-detail.html"><img src={com7} className="img-fluid"
                                                alt="" /></a>
                                        </div>
                                        <div className="job-instructor-content">
                                            <h4 className="instructor-title"><a href="job-detail.html">Project Manager</a>
                                            </h4>
                                            <div className="instructor-skills">
                                                CSS3, HTML5, Javascript, Bootstrap, Jquery
                                        </div>
                                        </div>
                                        <div className="job-instructor-footer">
                                            <div className="instructor-students">
                                                <h5 className="instructor-scount">$37.5K - $8K</h5>
                                            </div>
                                            <div className="instructor-corses">
                                                <span className="c-counting">07 Open</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3 col-sm-6">
                                    <div className="job-instructor-layout">
                                        <span className="tg-themetag tg-featuretag">Premium</span>
                                        <div className="brows-job-type"><span className="full-time">Full Time</span></div>
                                        <div className="job-instructor-thumb">
                                            <a href="job-detail.html"><img src={com1} className="img-fluid"
                                                alt="" /></a>
                                        </div>
                                        <div className="job-instructor-content">
                                            <h4 className="instructor-title"><a href="job-detail.html">Wordpress Expert</a>
                                            </h4>
                                            <div className="instructor-skills">
                                                CSS3, HTML5, Javascript, Bootstrap, Jquery
                                        </div>
                                        </div>
                                        <div className="job-instructor-footer">
                                            <div className="instructor-students">
                                                <h5 className="instructor-scount">$10.2K - $16K</h5>
                                            </div>
                                            <div className="instructor-corses">
                                                <span className="c-counting">02 Open</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                </div>
            </div>



        </article>
    );
}

HomePage.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
    onSubmitForm: PropTypes.func,
    username: PropTypes.string,
    loadRepos: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
    repos: makeSelectRepos(),
    username: makeSelectUsername(),
    loading: makeSelectLoading(),
    error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
    return {
        loadRepos: evt => dispatch(loadRepos())

    };
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default compose(
    withConnect,
    memo,
)(HomePage);
