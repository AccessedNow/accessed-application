import React from 'react';
import PropTypes from 'prop-types';

import './Avatar.scss';
import {buildPartyUrl, buildGroupImageUrl, buildPartyAvatarUrl} from "../../helper/urlHelper";

function Avatar({party}) {

    let url = buildPartyUrl(party);
    return (

        <div className={'avatar-icon avatar-type-' + party.partyType.toString().toLowerCase()}>
            <a className="" href={url}>
                <img style={{position: 'relative'}} className="featured-image front lazyload" alt={party.name} data-src={buildPartyAvatarUrl(party)} />
            </a>
        </div>

    );
}

Avatar.propTypes = {
    src: PropTypes.any,
};

export default Avatar;
