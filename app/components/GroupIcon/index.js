import React from 'react';
import PropTypes from 'prop-types';

import './GroupIcon.scss';
import {buildGroupImageUrl} from "../../helper/urlHelper";

function GroupIcon({group}) {

    let groupUrl = '/'+ group.type.toLowerCase() + '/' + group.id;
    return (

        <div className="group-icon">
            <a className="" href={groupUrl}>
                <img style={{position: 'relative'}} className="featured-image front lazyload" alt={group.groupName} data-src={buildGroupImageUrl(group)} />
            </a>
        </div>

    );
}

GroupIcon.propTypes = {
    src: PropTypes.any,
};

export default GroupIcon;
