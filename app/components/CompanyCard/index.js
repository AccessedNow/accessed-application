/**
 *
 * Company Card
 *
 */

import React from 'react';
import Config from '../../config/Config';


import './CompanyCard.scss';
import {buildPartyUrl} from '../../helper/urlHelper';
import { numberFormat } from '../../utils/helper';
import GroupIcon from "../GroupIcon";


const CompanyCard = ({ company }) => {
  console.log(company.name, company.id)
  let companyUrl = buildPartyUrl(company);

  let employeesCount = numberFormat(company.size);
  return (
    <div className="product-grid-item mode-view-item">
      <div className="product-wrapper effect-none  ">
        <div className="product-head">
          <div className="product-image">
            <div className="product-group-vendor-name">
              <h5 className="product-name"><a href={companyUrl}>{company.name}</a></h5>
              <div className="product-vendor"><a href={companyUrl} title={company.name}>{company.name}</a></div>
              <div className="product-review">
                <span className="spr-badge">
                  <span className="spr-starrating spr-badge-starrating">
                    <i className="spr-icon spr-icon-star" style={{ color: '#fed700' }}></i>
                    <span style={{ color: '#fed700' }}> {company.rating} </span>
                  </span>
                </span>
              </div>
            </div>
            <GroupIcon group={company}/>
          </div>
        </div>
        <div className="product-content">
          <div className="pc-inner">
            <div className="price-cart-wrapper">
              <div className="product-price">
                <div className="company">
                  <span className="location">{company.city}, {company.country}</span>
                </div>
              </div>
              <div className="product-add-cart">
                <div className="company">
                  <span className="employees">{employeesCount} Employees</span>
                </div>
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
