import React from 'react';

const PaginateItem = ({ isActive, text, onClick }) => {
  let className = isActive ? 'active' : '';
  return (
    <li className={className} >
      <a className="prev">{text}</a>
    </li>
  );
}

export default PaginateItem;