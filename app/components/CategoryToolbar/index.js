import React, {Component} from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class CategoryToolbar extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {}

  render() {
    return (

        <div className="cata-toolbar">
            <div className="group-toolbar">
                <div className="filter-icon mobile-filter-icon drawer d-lg-none"><i className="demo-icon icon-sliders"></i>Filter</div>
                <div className="grid-list">
                    <span className="text">View</span>
                    <span className="grid grid-4 active" title="Small"><i
                        className="demo-icon icon-electro-grid-view"></i></span>
                    <span className="grid grid-3" title="Medium"><i
                        className="demo-icon icon-electro-large-list-view"></i></span>
                    <span className="grid grid-2" title="Large"><i
                        className="demo-icon icon-electro-list-view"></i></span>
                    <span className="grid grid-1" title="Huge"><i
                        className="demo-icon icon-electro-small-list-view"></i></span>
                </div>

                <div className="sort-by bc-toggle">
                    <div className="sort-by-inner">
                        <label className="d-none d-md-block">Sort by</label>

                        <div id="cata_sort_by">
                            <button id="sort_by_button">
                                <span className="name"><a href="javascript:;">Best Selling</a></span>
                                <i className="demo-icon icon-down-dir"></i>
                            </button>
                        </div>

                        <ul id="sort_by_box" className="bc-dropdown">
                            <li className="sort-action title-ascending" data-sort="title-ascending"><a href="javascript:;">Name, A-Z</a></li>
                            <li className="sort-action title-descending" data-sort="title-descending"><a href="javascript:;">Name, Z-A</a></li>
                            <li className="sort-action manual" data-sort="manual"><a href="javascript:;">Featured</a></li>
                            <li className="sort-action price-ascending" data-sort="price-ascending"><a href="javascript:;">Price, Low To High</a></li>
                            <li className="sort-action price-descending" data-sort="price-descending"><a href="javascript:;">Price, High To Low</a></li>
                            <li className="sort-action created-ascending" data-sort="created-ascending"><a href="javascript:;">Date, Old To New</a></li>
                            <li className="sort-action created-descending" data-sort="created-descending"><a href="javascript:;">Date, New To Old</a></li>
                            <li className="sort-action best-selling active" data-sort="best-selling"><a href="javascript:;">Best Selling</a></li>
                        </ul>

                    </div>

                </div>

                <div className="pagination-showing">
                    <div className="showing">Showing all 9 Items</div>
                </div>

            </div>
        </div>




    );
  }
}

export default CategoryToolbar;
