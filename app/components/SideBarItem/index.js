/*
  SideBar Item
*/

import React from 'react';
import { NavLink } from "react-router-dom";

const SideBarItem = ({ name, path }) => {
  return (
    <li className="">
      <NavLink to={path}>{name}</NavLink>
    </li>
  );
}

export default SideBarItem;