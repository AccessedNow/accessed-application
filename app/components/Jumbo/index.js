import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';

import './Jumbo.scss';

import bannerImg from '../../assets/gtrr.jpg';

import google from '../../assets/icons/google.png';
import microsoft from '../../assets/icons/microsoft.png';
import amazon from '../../assets/icons/amazon.png';
import addidas from '../../assets/icons/addidas.png';
import ibm from '../../assets/icons/ibm.png';

function Jumbo(props) {
  return (
    <div className="hero-banner" data-ride="carousel" data-pause="hover" data-interval="false">
      <div className="hero-img">
        <img src={bannerImg} className="img-responsive" alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col col-md-6 col-sm-8">
            <div className="content">
              <h2>Your Passion Begins<br />Here !</h2>
              <p>Join over 2 Million Others in The Future Of Work, <br /> The easiest way to get your new job.</p>
              <form className="banner-form" data-animation="animated fadeInUp">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Job Title, Keywords, or Company" />
                  <span className="input-group-btn"><button type="button" className="btn bg-primary">SEARCH</button></span>
                </div>
              </form>
              <p className="mt-3">Get your dream job. <a href="/account">Sign Up for free now</a></p>
              <div className="company-logo">
                <ul className="list-inline">
                  <li><img alt="Microsoft" src={microsoft}/></li>
                  <li><img alt="Addidas" src={addidas}/></li>
                  <li><img alt="IBM" src={ibm}/></li>
                  <li><img alt="Amazon" src={amazon}/></li>
                  <li><img alt="Google" src={google}/></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
    </div>
  );
}


export default Jumbo;
