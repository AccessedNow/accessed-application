import React from 'react'
import SideBarItem from '../SideBarItem';

const SideBar = ({ title, menus }) => {
  return (
    <div className="sb-widget d-none d-lg-block">
      <div className="sb-menu">
        <h5 className="sb-title">{title}</h5>
        <ul className="categories-menu">
          {menus.map((item) => (
            <SideBarItem key={item.name} name={item.name} path={item.path} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SideBar;