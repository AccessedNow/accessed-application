import React, { useState } from 'react'
import Config from '../../Config';
import { dayFormatter } from '../../utils/helper';

export default function MatchesCard(props) {

  const [details] = useState(props.cardData);
  if (!details || Object.keys(details) === 0) {
    return null;
  }
  return (
    <div className="product-grid-item mode-view-item">
      <div className="product-wrapper effect-none ">
        <div className="product-head">
          <div className="product-image">
            <div className="product-group-vendor-name">
              <h5 className="product-name">
                <a href="/collections/all/products/black-fashion-zapda-shoes">{details.title}</a>
              </h5>
              <div className="product-vendor">
                <a href="/collections/vendors?q=Armani" title="Armani">{details.company.groupName}</a>
                <span className="country-name">{details.company.address.city}, {details.company.address.country}</span>
              </div>
            </div>
            <div className="featured-img waiting lazyloaded">
              <a href="/collections/all/products/black-fashion-zapda-shoes">
                <img className="featured-image front lazyloaded" alt="Black Fashion Example"
                  src={`${Config.S3}company/${details.company.id}/images/${details.company.logoImageUrl}`} />
              </a>
            </div>
          </div>
        </div>
        <div className="product-content">
          <div className="pc-inner">
            <h4><span className="demo-icon icon-electro-add-to-cart-icon"></span> Be An Early Applicant</h4>
            <div className="res-line-bottom">
              <span> <b> {dayFormatter(details.createdDate)} </b> Easy Apply </span>
              <div className="res-line-icon">
                <span className="demo-icon icon-electro-add-to-cart-icon"></span>
                <span className="demo-icon icon-electro-add-to-cart-icon"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
