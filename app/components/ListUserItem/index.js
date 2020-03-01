import React from 'react';
import PropTypes from 'prop-types';

import UserAvatar from "../UserAvatar";

import './ListUserItem.scss';


function ListUserItem({user}) {

    console.log('user', user)
    let displayName = user.firstName + " " + user.lastName;
    let usrUrl = '/'+ user.type.toLowerCase() + '/' + user.id;
    return (

            <div className="user-item">
                <div className="user-item-inner">
                    <div className="user-image"><UserAvatar user={user}/></div>
                    <div className="user-content">
                        <div className="info"><h6><a href="/blogs/news/lets-meet-the-whole-team-of-electro">{displayName}</a></h6></div>
                        <div className="meta-data"><span className="date">{user.title}</span></div>
                    </div>
                </div>
            </div>






    );
}

ListUserItem.propTypes = {
    src: PropTypes.any,
};

export default ListUserItem;
