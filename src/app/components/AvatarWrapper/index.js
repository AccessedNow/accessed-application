import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';

import {buildPartyUrl, buildGroupImageUrl, buildPartyAvatarUrl} from "../../utils/urlHelper";

function AvatarWrapper({party}) {

  if(party){
    return ((party && <Avatar href="/pages/profile" variant="rounded" aria-label={party.name} src={buildPartyAvatarUrl(party)} /> ));
  } else {
    return <Avatar/>;
  }

}

AvatarWrapper.propTypes = {
    src: PropTypes.any,
};

export default AvatarWrapper;
