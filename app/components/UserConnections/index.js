/*
  SideBar Item
*/

import React from 'react';
import Img from '../Img';
import Config from '../../config/Config';

const UserConnections = ({ connections }) => {
  let connectionImage = `${Config.S3}user/${connections.id}/images/${connections.imageUrl}`;
  return (
    <li>
      <Img className='avatar' src={connectionImage} alt={connections.firstname} />
    </li>
  );
}

export default UserConnections;
