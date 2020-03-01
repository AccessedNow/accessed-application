import React from 'react';
import PropTypes from 'prop-types';

import './UserAvatar.scss';
import {buildUserImageUrl} from "../../helper/urlHelper";

function UserIcon({user}) {

    let type = user.type=='PERSON'?'USER':'USER';
    let userUrl = '/'+ type.toLowerCase() + '/' + user.id;
    return (

        <div className="user-icon">
            <a className="" href={userUrl}>
                <img style={{position: 'relative'}} className="featured-image front lazyload" alt={user.firstName + " " + user.lastName} data-src={buildUserImageUrl(user)} />
            </a>
        </div>

    );
}

UserIcon.propTypes = {
    src: PropTypes.any,
};

export default UserIcon;
