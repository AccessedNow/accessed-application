import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/Button';
import Wrapper from './Wrapper';
import {buildCompanyImageUrl} from "../../helper/urlHelper";

import './JobListItem.scss';
import GroupIcon from "../GroupIcon";

function JobListItem({job}) {

  let company = job.company;
  console.log('company', company)

  return (
        <div className="product-grid-item mode-view-item">
            <div className="product-wrapper  effect-none">
                <div className="product-head">
                    <div className="product-image">

                        <div className="product-group-vendor-name">
                            <h5 className="product-name balance-true"><a href="/collections/cameras/products/faxtex-product-sample">{job.title}</a></h5>
                            <div className="product-vendor"><a href="/collections/vendors?q=Bulgari" title="Bulgari">{job.company.groupName}</a></div>

                        </div>

                        <div className="featured-img waiting">

                            <GroupIcon src={buildCompanyImageUrl(company.id, company.logoImageUrl)}/>
                        </div>

                        <div className="product-des-list">
                            <ul>
                                <li><span className="a-list-item">Easy management</span></li>
                                <li><span className="a-list-item">Fast printing. Strong protection.</span>
                                </li>
                                <li><span className="a-list-item">Easy management. Efficient printing.</span>
                                </li>
                                <li><span className="a-list-item">The 2-line LCD display is simple to read and operate.</span>
                                </li>
                                <li><span className="a-list-item">Stay connected with easy mobile printing options</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="product-content">
                    <div className="pc-inner">
                        <div className="price-cart-wrapper">
                            <div className="product-price">
                                <span className="price-sale"><span className="money" data-currency-usd="$110.00">$110.00</span></span>
                                <span className="price-compare"><span className="money" data-currency-usd="$199.00">$199.00</span></span>
                            </div>

                            <div className="product-add-cart">
                                <a href="/collections/accessories/products/faxtex-product-sample" className="btn-add-cart select-options" title="Select options"><span className="demo-icon icon-electro-add-to-cart-icon"></span></a>
                                <select className="d-none" name="id">
                                    <option value="12668995174464">M / Blue</option>
                                    <option value="12668995207232">L / Blue</option>
                                    <option value="12668995240000">X / Blue</option>
                                    <option value="12668995305536">XL / Blue</option>
                                </select>
                            </div>
                        </div>

                        <div className="product-button">
                            <div data-target="#quick-shop-popup" className="quick_shop" data-handle="faxtex-product-sample" data-toggle="modal" title="Quick View">
                                <i className="demo-icon icon-eye-1"></i>Quick View
                            </div>
                            <div className="product-wishlist">
                                <Button href="http://www.ebay.com" {...job}>
                                    <span>Save</span>
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>






  );
}

JobListItem.propTypes = {
  job: PropTypes.any,
};

export default JobListItem;
