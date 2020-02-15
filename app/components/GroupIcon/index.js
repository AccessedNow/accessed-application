import React from 'react';
import PropTypes from 'prop-types';

import './GroupIcon.scss';

function GroupIcon({src}) {
    return (

        <div>
            <a className="group-icon" href="/collections/cameras/products/faxtex-product-sample">
                <img style={{position: 'releative'}} className="featured-image front lazyload" alt="Faxtex Product Sample" data-src= {src} />
            </a>
            <div className="product-review">
                <span className="spr-badge" id="spr_badge_1394248253504" data-rating="5.0">
                    <span className="spr-starrating spr-badge-starrating">
                        <i className="spr-icon spr-icon-star" style={{color: "#fed700;"}}></i>
                        <i className="spr-icon spr-icon-star" style={{color: "#fed700;"}}></i>
                        <i className="spr-icon spr-icon-star" style={{color: "#fed700;"}}></i>
                        <i className="spr-icon spr-icon-star" style={{color: "#fed700;"}}></i>
                        <i className="spr-icon spr-icon-star" style={{color: "#fed700;"}}></i>
                    </span>
                    <span className="spr-badge-caption">3 reviews</span>
                </span>
            </div>
        </div>

    );
}

GroupIcon.propTypes = {
    src: PropTypes.any,
};

export default GroupIcon;
