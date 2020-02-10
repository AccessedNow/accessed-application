/**
 *
 * Company Card
 *
 */

import React from 'react';
import Config from '../../Config';

const CompanyCard = ({ title, category, rating, city, country, companySize, id, logo }) => {
  let logoUrl = `${Config.S3}company/${id}/images/${logo}`;
  return (
    <div className="product-grid-item mode-view-item">
      <div className="product-wrapper effect-none  ">
        <div className="product-head">
          <div className="product-image">
            <div className="product-group-vendor-name">
              <h5 className="product-name">
                <a href="/collections/all/products/black-fashion-zapda-shoes">{title}</a>
              </h5>
              <div className="product-vendor">
                <a href="#" title={category}>{category}</a>
              </div>

              <div className="product-review">
                <span className="spr-badge">
                  <span className="spr-starrating spr-badge-starrating">
                    <i className="spr-icon spr-icon-star" style={{ color: '#fed700' }}></i>
                    <span style={{ color: '#fed700' }}>{rating}</span>
                  </span>
                </span>
              </div>

            </div>

            <div className="featured-img">
              <a href="/collections/all/products/black-fashion-zapda-shoes">
                <img
                  className="featured-image front"
                  alt="Black Fashion Example"
                  src={logoUrl}
                  style={{ position: 'unset', height: 150, width: 350 }}
                />

                <span className="img-back d-none d-lg-block">
                  <img style={{ position: 'unset', height: 150, width: 350 }}
                    className="back"
                    alt="Black Fashion Example"
                    src={logoUrl} />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="product-content">
          <div className="pc-inner">
            <div className="price-cart-wrapper">
              <div className="product-price">
                <div className="product-vendor">
                  {city}, {country}
                </div>
              </div>

              <div className="product-add-cart">
                <div className="product-vendor">
                  {companySize} Employees
                </div>
              </div>
            </div>

            <div className="product-button">
              <div className="product-wishlist">
                <a href="javascript:void(0)" className="add-to-wishlist add-product-wishlist" data-handle-product="black-fashion-zapda-shoes" title="Wishlist">
                  <i className="demo-icon icon-electro-wishlist-icon"></i>
                  Follow
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