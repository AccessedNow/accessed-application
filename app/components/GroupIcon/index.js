import React from 'react';
import PropTypes from 'prop-types';

import './GroupIcon.scss';
import {buildPartyUrl, buildGroupImageUrl} from "../../helper/urlHelper";

function GroupIcon({group}) {

    let groupUrl = buildPartyUrl(group);
    return (

        <div className="group-icon">
            <a className="" href={groupUrl}>
                <img style={{position: 'relative'}} className="featured-image front lazyload" alt={group.name} data-src={buildGroupImageUrl(group)} />
            </a>
        </div>

    );
}

GroupIcon.propTypes = {
    src: PropTypes.any,
};

export default GroupIcon;
