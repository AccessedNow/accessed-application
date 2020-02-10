import React, { useState } from 'react'

const ToolBar = ({ onSortSelect, totalElements, number, numberOfElements }) => {

  const [sortByText, setSortByText] = useState('Name, A-Z');

  const onSortChange = (type) => {
    const text = type === 'ASC' ? 'Name, A-Z' : 'Name, Z-A';
    setSortByText(text);
    onSortSelect(type);
  }

  return (
    <div className="cata-toolbar">
      <div className="group-toolbar">
        <div className="filter-icon mobile-filter-icon drawer d-lg-none"><i className="demo-icon icon-sliders"></i>Filter</div>
        {/* Grid View Start */}
        <div className="grid-list">
          <span className="text">View</span>
          <span className="grid grid-4" title="Small"><i className="demo-icon icon-electro-grid-view"></i></span>
          <span className="grid grid-3" title="Medium"><i className="demo-icon icon-electro-large-list-view"></i></span>
          <span className="grid grid-2 active" title="Large"><i className="demo-icon icon-electro-list-view"></i></span>
          <span className="grid grid-1" title="Huge"><i className="demo-icon icon-electro-small-list-view"></i></span>
        </div>
        {/* Grid View End */}

        {/* Sorting Start */}
        <div className="sort-by bc-toggle">
          <div className="sort-by-inner">
            <label className="d-none d-md-block">Sort by</label>
            <div id="cata_sort_by">
              <button id="sort_by_button">
                <span className="name"><a href="javascript:;">{sortByText}</a></span>
                <i className="demo-icon icon-down-dir"></i>
              </button>
            </div>
            <ul id="sort_by_box" className="bc-dropdown">
              <li className="sort-action title-ascending" data-sort="title-ascending"><a onClick={() => onSortChange('ASC')}>Name, A-Z</a></li>
              <li className="sort-action title-descending" data-sort="title-descending"><a onClick={() => onSortChange('DESC')}>Name, Z-A</a></li>
            </ul>
          </div>
        </div>
        {/* Sorting End */}

        {/* Page Size Start */}
        <div className="pagination-showing">
          <div className="showing">
            Showing {(number * 10) + 1} -  {(number * 10) + numberOfElements} of {totalElements} Items
          </div>
        </div>
        {/* Page Size End */}


      </div>
    </div>
  );
}

export default ToolBar;
