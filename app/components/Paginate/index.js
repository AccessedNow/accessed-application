/**
 *
 * Paginate
 *
 */

import React, { useState, useEffect } from 'react';

const Paginate = ({ current, total, onPageClick }) => {

  const range = (start, end) => {
    let arr = [];
    while (start <= end) {
      arr.push(start)
      start = start + 1;
    }
    return arr;
  }

  const [pages, setPages] = useState([]);
  useEffect(() => {
    if (total && total > 0) {
      setPages(range(1, total));
    }
  }, [])

  const onPageItemClick = (pageNum) => {
    if (pageNum < 0, pageNum === total) {
      return;
    }
    onPageClick(pageNum);
  };


  return (
    <div className="pagination-holder">
      <ul className="pagination">
        <li onClick={() => onPageItemClick(current - 1)}>
          {(() => {
            if (current !== 0) {
              return (<a className="prev">Previous</a>);
            }
          })()}
        </li>
        {pages.map((item, index) => (
          <li key={`pageIdx${index}`} onClick={() => onPageItemClick(item - 1)} className={item === current + 1 ? 'active' : ''}>
            <a href="#">{item}</a>
          </li>
        ))}
        <li onClick={() => onPageItemClick(current + 1)} >
          {(() => {
            if (current !== total - 1) {
              return (<a className="next">Next</a>);
            }
          })()}
        </li>
      </ul>
    </div>
  );
}

export default Paginate;
