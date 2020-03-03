import React from 'react';
import PropTypes from 'prop-types';

import {buildPartyUrl} from "../../helper/urlHelper";

import UserAvatar from "../UserAvatar";

import './ListUserItem.scss';


function ListUserItem({user}) {

    let displayName = user.firstName + " " + user.lastName;
    return (

            <div className="user-item">
                <div className="user-item-inner">
                    <div className="user-image"><UserAvatar user={user}/></div>
                    <div className="user-content">
                        <div className="info"><h6><a href={buildPartyUrl(user)}>{displayName}</a></h6></div>
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
