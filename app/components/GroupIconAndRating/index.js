import React from 'react';
import PropTypes from 'prop-types';
import GroupIcon from "../GroupIcon";

import './GroupIconAndRating.scss';
import {b} from "../../helper/urlHelper";

function GroupIconAndRating({group}) {
    return (

        <div>
            <GroupIcon group={group}/>
            <div className="item-review">
                <span className="spr-badge" id="spr_badge_1394248253504" data-rating="5.0">
                    <span className="spr-starrating spr-badge-starrating">
                        <i className="spr-icon spr-icon-star" style={{color: "#fed700"}}></i>
                        <i className="spr-icon spr-icon-star" style={{color: "#fed700"}}></i>
                        <i className="spr-icon spr-icon-star" style={{color: "#fed700"}}></i>
                        <i className="spr-icon spr-icon-star" style={{color: "#fed700"}}></i>
                        <i className="spr-icon spr-icon-star" style={{color: "#fed700"}}></i>
                    </span>
                    <span className="spr-badge-caption">3 reviews</span>
                </span>
            </div>
        </div>

    );
}

GroupIconAndRating.propTypes = {
    src: PropTypes.any,
};

export default GroupIconAndRating;
