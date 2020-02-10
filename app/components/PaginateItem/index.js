import React from 'react';

const PaginateItem = ({ isActive, text, onClick }) => {
  return (
    <li className="active" >
      <a className="prev">{text}</a>
    </li>
  );
}

export default PaginateItem;