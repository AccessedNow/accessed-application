import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/Button';
import TagButton from '../../components/TagButton';
import Wrapper from './Wrapper';

import {dateDifference} from "../../helper/helper";
import {buildCompanyImageUrl, buildPartyUrl} from "../../helper/urlHelper";

import './ListJobItem.scss';
import GroupIconAndRating from "../GroupIconAndRating";

function SidebarWidget({widgets}) {

  return (
        <div className="sidebar-widgets">

          <div className="sb-widget d-none d-lg-block">
            <div className="sb-menu">
              <h5 className="sb-title">Categories</h5>
              <ul className="categories-menu">
                <li className="">
                  <span className="icon waiting lazyloaded"></span>
                  <a href="/collections">Value of the Day</a>
                </li>
                <li className="">
                  <span className="icon waiting lazyloaded"></span>
                  <a href="/collections/all-in-one">Top 100 Offers</a>
                </li>
                <li className="">
                  <span className="icon waiting lazyloaded"></span>
                  <a href="/collections/accessories">New Arrivals</a>
                </li>
                <li className="dropdown">
                  <span className="icon waiting lazyloaded"></span>
                  <a href="/collections/tv-audio" className="dropdown-link"><span>TV &amp; Audio</span></a>
                  <span className="expand"></span>
                  <ul className="dropdown-menu">
                    <li><a href="/collections/gadgets"><span>Gadgets</span></a></li>
                    <li><a href="/collections/phones-pdas"><span>Phones &amp; PDAs</span></a></li>
                    <li><a href="/collections/watches"><span>Watches</span></a></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <span className="icon waiting lazyloaded"></span>
                  <a href="/collections/gadgets" className="dropdown-link"><span>Gadgets</span></a>
                  <span className="expand"></span>
                  <ul className="dropdown-menu">
                    <li><a href="/collections/watches"><span>Watches</span></a></li>
                    <li><a href="/collections/eyewear"><span>Eyewear</span></a></li>
                  </ul>
                </li>
              </ul>

            </div>
          </div>
        </div>






  );
}

ListJobItem.propTypes = {
  job: PropTypes.any,
};

export default ListJobItem;
