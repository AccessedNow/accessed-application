/**
 *
 * Company Card
 *
 */

import React from 'react';

const CompanyCard = ({ title, category, rating, city, country, companySize }) => {
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
                  src="//cdn.shopify.com/s/files/1/0013/8815/0848/products/GamePad_03d118f5-327b-4b34-873e-9973f418bd08_420x.jpg?v=1573390508"
                  style={{ position: 'unset' }}
                />

                <span className="img-back d-none d-lg-block">
                  <img style={{ position: 'unset' }}
                    className="back"
                    alt="Black Fashion Example"
                    src="//cdn.shopify.com/s/files/1/0013/8815/0848/products/GamePad2_f4a92d9b-379a-447c-890b-2715adadcd11_300x.jpg?v=1573390508" />
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