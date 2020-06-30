import React from 'react';
import PropTypes from 'prop-types';

import './CoverBanner.scss';
import Avatar from "../../components/Avatar";

import {buildCoverImageUrl} from "../../helper/urlHelper";

function CoverBanner({item}) {
  console.log('item', item)
    let style = {};
    return (

        <div className="banner-item text-box-overlay center-center">


            <div className="image">
                <img className=" lazyload"  data-src={buildCoverImageUrl(item)} alt="Banner" />
            </div>

            <div className="text">
              <Avatar party={item}/>
              <h4 className="MuiTypography-root-774 md:mx-24 MuiTypography-h4-782 MuiTypography-colorInherit-796">{item.name}</h4>
            </div>


        </div>

    );
}

CoverBanner.propTypes = {
    src: PropTypes.any,
};

export default CoverBanner;
