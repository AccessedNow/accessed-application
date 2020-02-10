/*
  SideBar Item
*/

import React from 'react';

const SideBarItem = ({ name, path }) => {
  return (
    <li className="">
      <a href={path}>{name}</a>
    </li >
  );
}

export default SideBarItem;