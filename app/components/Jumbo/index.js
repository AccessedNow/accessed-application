import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';

import './Jumbo.scss';
import bannerImg from '../../assets/gtrr.jpg';

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
                          <h2>Talent?<br /> Meet Opportunity.</h2>
                          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                              voluptatum deleniti atque corrupti quos dolores et quas</p>
                          <form className="banner-form" data-animation="animated fadeInUp">
                              <div className="input-group">
                                  <input type="text" className="form-control" placeholder="Search For..." />
                                  <span className="input-group-btn"><button type="button" className="btn bg-primary">Go &amp; Search</button></span>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
          <div className="clearfix"></div>
      </div>


  );
}


export default Jumbo;
