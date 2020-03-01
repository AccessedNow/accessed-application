import React from 'react';
import PropTypes from 'prop-types';

import './CoverBanner.scss';
import {buildCoverImageUrl} from "../../helper/urlHelper";

function CoverBanner({item}) {

    return (

        <div className="cover-banner">
            <img style={{position: 'relative'}} className="featured-image front lazyload" data-src={buildCoverImageUrl(item)} />
        </div>

    );
}

CoverBanner.propTypes = {
    src: PropTypes.any,
};

export default CoverBanner;
