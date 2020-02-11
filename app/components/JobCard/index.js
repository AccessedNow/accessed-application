/**
 *
 * Company Card
 *
 */

import React from 'react';
import Config from '../../Config';

import './JobCard.scss';


const JobCard = ({ jobData }) => {
  let logoUrl = `${Config.S3}company/${jobData.company.id}/images/${jobData.company.logoImageUrl}`;
  var units = ["k", "M", "B", "T"];

  function numberFormat(number) {
    if (number <= 999) {
      return number;
    }
    var order = Math.floor(Math.log(number) / Math.log(1000));
    var unitname = units[(order - 1)];
    var num = number / 1000 ** order;
    return num.toFixed(1) + unitname
  }
  let connectionCount = numberFormat(jobData.connection.noConnection);
  return (
    <div className="product-grid-item mode-view-item">
      <div className="product-wrapper effect-none  ">
        <div className="product-head">
          <div className="product-image">
            <div className="product-group-vendor-name">
              <h5 className="product-name"><a href="#">{jobData.title}</a></h5>
              <div className="product-vendor">{jobData.company.groupName}</div>
              <div className="product-vendor">{jobData.city}, {jobData.country}</div>
              <div className="product-review">
                <span className="spr-badge">
                  <span className="spr-starrating spr-badge-starrating">
                    <i className="spr-icon spr-icon-star" style={{ color: '#fed700' }}></i>
                    <span style={{ color: '#fed700' }}> {jobData.company.rating} </span>
                  </span>
                </span>
              </div>
            </div>
            <div className="featured-img waiting lazyloaded"  >
              <a href="/collections/all/products/black-fashion-zapda-shoes">
                <img
                  className="featured-image front lazyloaded"
                  alt={jobData.title}
                  src={logoUrl}
                  style={{ position: 'relative' }}
                />
                <span className="img-back d-none d-lg-block">
                  <img
                    className="back lazyloaded"
                    alt={jobData.title}
                    src={logoUrl}
                    style={{ position: 'relative' }}
                  />
                </span>
                <span className="product-label">
                  <span className="label-sale">
                    <span className="sale-text">{jobData.promotion.type}</span>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="product-content">
          <div className="pc-inner">
            <div className="price-cart-wrapper">
              <div className="product-price">
                <div className="company">
                  <span className="location">{connectionCount} Connections</span>
                </div>
              </div>
              <div className="product-add-cart">
                <div className="company">
                  <span className="employees">2 w</span>
                </div>
              </div>
            </div>
            <div className="product-button">
              <div className="product-wishlist">
                <a href="javascript:void(0)" className="add-to-wishlist add-product-wishlist" data-handle-product="black-fashion-zapda-shoes" title="Follow">
                  <i className="demo-icon icon-electro-wishlist-icon"></i>
                </a>

                {jobData.employmentType}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
