import React from 'react';
import PropTypes from 'prop-types';

import './CoverBanner.scss';
import GroupIcon from "../../components/GroupIcon";

import {buildCoverImageUrl} from "../../helper/urlHelper";

function CoverBanner({item}) {

    let style = {};
    return (

        <div className="banner-item text-box-overlay center-center">


            <div className="image">
                <img className=" lazyload"  data-src={buildCoverImageUrl(item)} alt="Banner" />
            </div>

            <div className="text">
                <GroupIcon group={item}/>
            </div>


        </div>

    );
}

CoverBanner.propTypes = {
    src: PropTypes.any,
};

export default CoverBanner;
