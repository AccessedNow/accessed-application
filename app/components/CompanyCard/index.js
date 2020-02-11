/**
 *
 * Company Card
 *
 */

import React from 'react';
import Config from '../../Config';

import './CompanyCard.scss';


const CompanyCard = ({ title, category, rating, city, country, companySize, id, logo }) => {
  let logoUrl = `${Config.S3}company/${id}/images/${logo}`;
  return (
    <div className="product-grid-item mode-view-item">
      <div className="product-wrapper effect-none  ">
        <div className="product-head">
          <div className="product-image">
            <div className="product-group-vendor-name">
              <h5 className="product-name"><a href="#">{title}</a></h5>
              <div className="product-vendor"><a href="#" title={category}>{category}</a></div>
              <div className="product-review">
                <span className="spr-badge">
                  <span className="spr-starrating spr-badge-starrating">
                    <i className="spr-icon spr-icon-star" style={{ color: '#fed700' }}></i>
                    <span style={{ color: '#fed700' }}> {rating} </span>
                  </span>
                </span>
              </div>
            </div>
            <div className="featured-img waiting lazyloaded">
              <a href="/collections/all/products/black-fashion-zapda-shoes">
                <img
                  className="featured-image front lazyloaded"
                  alt={title}
                  src={logoUrl}
                  style={{ position: 'unset' }}
                />
                <span className="img-back d-none d-lg-block">
                  <img
                    className="back lazyloaded"
                    alt={title}
                    src={logoUrl}
                    style={{ position: 'unset' }}
                  />
                </span>
                {/* <span className="product-label">
                  <span className="label-sale">
                    <span className="sale-text">Sale</span>
                  </span>
                </span> */}
              </a>
            </div>
            <div className="product-des-list">
              <ul>
                <li><span className="a-list-item">Wireless</span></li>
                <li><span className="a-list-item">Motion Sensing</span></li>
                <li><span className="a-list-item">Compatible with Several Consoles/Games</span></li>
                <li><span className="a-list-item">Enough Action Buttons</span></li>
                <li><span className="a-list-item">Ergonomic</span></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="product-content">
          <div className="pc-inner">
            <div className="price-cart-wrapper">
              <div className="product-price">
                {city}, {country}
              </div>
              <div className="product-add-cart">
                {companySize}
              </div>
            </div>
            <div className="product-button">
              <div className="product-wishlist">
                <a href="javascript:void(0)" className="add-to-wishlist add-product-wishlist" data-handle-product="black-fashion-zapda-shoes" title="Follow">
                  <i className="demo-icon icon-electro-wishlist-icon"></i> Follow
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
