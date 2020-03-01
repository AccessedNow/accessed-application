import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/Button';
import TagButton from '../../components/TagButton';
import Wrapper from './Wrapper';

import {dateDifference} from "../../helper/helper";
import {buildCompanyImageUrl} from "../../helper/urlHelper";

import './ListJobItem.scss';
import GroupIconAndRating from "../GroupIconAndRating";

function ListJobItem({job}) {

  let company = job.company;
  let companyUrl = "/"+ company.type.toLowerCase() + "/" + company.id;
  return (
        <div className="product-grid-item list-item mode-view-item">
            <div className="product-wrapper item-wrapper effect-none">
                <div className="product-head item-head">
                    <div className="item-image">

                        <div className="product-group-vendor-name item-group-vendor-name">
                            <h5 className="item-name balance-true"><a href={"/jobs/view/" + job.jobId}>{job.title}</a></h5>
                            <div className="item-vendor"><a href={companyUrl} title="Bulgari">{job.company.groupName}</a></div>

                        </div>
                        <div className="featured-img waiting">
                            <GroupIconAndRating group={job.company}/>
                        </div>

                        <div className="item-des-list">
                            <ul>

                                {job.skills.map((item) => (
                                    <li key={item.name}>
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
                <div className="product-content item-content">

                    <div className="pc-inner">



                        <div className="price-cart-wrapper">
                            <div className="product-price item-date">
                                <span>{dateDifference(job.createdDate)}D ago</span>
                            </div>
                            <div className="product-add-cart">
                                <form action="/cart/add" method="post" encType="multipart/form-data">
                                    <a href="javascript:void(0)" className="btn-add-cart add-to-cart" title="Add to cart"><span className="demo-icon icon-electro-add-to-cart-icon"></span></a>
                                    <select className="d-none" name="id">
                                        <option value="12672451543104">Default Title</option>
                                    </select>
                                </form>
                            </div>
                        </div>




                        <div className="product-button item-button">
                            <div className="createdDate">
                                <span>Easy Apply</span>
                            </div>
                                <div className="product-wishlist item-wishlist">
                                    <i className="demo-icon icon-electro-wishlist-icon"></i>
                                </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>






  );
}

ListJobItem.propTypes = {
  job: PropTypes.any,
};

export default ListJobItem;
