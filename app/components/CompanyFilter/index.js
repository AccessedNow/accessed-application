/**
 *
 * Company Filter
 *
 */

import React, { useEffect } from 'react';
import './CompanyFilter.scss';
const CompanyFilter = ({ filters }) => {

  return (
    <div className="sb-widget filter-sidebar position-sidebar style-accordion">
      <div id="filter_js"></div>
      <h5 className="sb-title">Filter</h5>
      <div className="sb-filter-wrapper">
        <div className="f-close"><i className="demo-icon icon-close"></i></div>
        <div className="sbw-filter">
          <div className="grid-uniform">

            <div className="sb-filter location accordion" id="filter-1">
              <div className="sbf-title">
                <span>Locations</span>
                <a href="javascript:void(0);" className="clear-filter hidden" id="clear-filter-1" style={{ 'float': 'right' }}>Clear</a>
              </div>

              <ul className="advanced-filters" style={{ 'display': 'none' }}>
                <li className="advanced-filter rt" data-group="Location">
                  <a href="javascript:void(0);" >Seattle</a>
                </li>
                <li className="advanced-filter rt" data-group="Location">
                  <a href="javascript:void(0);" >San Jose</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyFilter;