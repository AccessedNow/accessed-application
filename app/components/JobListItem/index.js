import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/Button';
import TagButton from '../../components/TagButton';
import Wrapper from './Wrapper';
import {buildCompanyImageUrl} from "../../helper/urlHelper";

import './JobListItem.scss';
import GroupIcon from "../GroupIcon";

function JobListItem({job}) {

  let company = job.company;

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

                                {job.skills.map((item) => (
                                    <li>
                                        <TagButton className="badge-light">
                                            <span>{item.name}</span>
                                        </TagButton>
                                    </li>
                                ))}
                                {/* Card View End */}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="product-content">
                    <div className="pc-inner">
                        <div className="price-cart-wrapper">
                            <div className="product-price">
                                Be an early applicant
                            </div>
                        </div>

                        <div className="product-button">
                            <div className="createdDate">
                                <span>1D - Easy Apply</span>
                            </div>
                                <div className="product-wishlist">
                                    <i className="demo-icon icon-electro-wishlist-icon"></i>
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
