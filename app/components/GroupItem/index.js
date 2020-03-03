import React from 'react';
import PropTypes from 'prop-types';

import GroupIcon from "../GroupIcon";
import {buildPartyUrl, buildCompanyImageUrl} from "../../helper/urlHelper";

import './GroupItem.scss';


function GroupItem({group}) {


    return (

        <div className="group-item">
            <div className="group-image col-md-5 col-sm-5 col-6">
                <GroupIcon group={group}/>
            </div>

            <div className="group-content col-md-7 col-sm-7 col-6">
                <div className="group-inner">

                    <a href={buildPartyUrl(group)}>{group.groupName}</a>
                    <div className="group-industry">
                        <span>{group.industry}</span>
                    </div>

                    <div className="group-location">
                        <span>{group.city}, {group.country}</span>
                    </div>

                    <div className="group-follower">
                        <span>{group.follower} followers</span>
                    </div>

                </div>
            </div>
        </div>

    );
}

GroupItem.propTypes = {
    src: PropTypes.any,
};

export default GroupItem;
