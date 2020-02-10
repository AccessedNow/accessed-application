/**
 *
 * Paginate
 *
 */

import React from 'react';

const Paginate = ({ current, total }) => {
  return (
    <div className="pagination-holder">
      <ul className="pagination">

        <li>
          <a className="prev disabled" href="javascript:;"> Previous</a>
        </li>

        <li className="active">
          <a href="javascript:;">1</a>
        </li>

        <li><a href="javascript:;">2</a></li>
        <li>
          <a href="javascript:;" title="Next" className="next">
            Next
        </a>
        </li>
      </ul>
    </div>
  );
}

export default Paginate;
