import _ from '@lodash';
import history from '@history';
import { emphasize, styled } from '@mui/material/styles';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { dateDifference, dateDiff } from '../../utils/helper';




const fallbackImage = "assets/images/avatars/Abbott.jpg";

function CompanyAvatar(props) {
  const [url, setUrl] = useState(props.avatar);

  const errorHandler = () => {
    console.error("error loading image");
    setUrl(fallbackImage);
  };

  return  (
      <Avatar
        {...props}
        imgProps={{
          onError: errorHandler
        }}
      />
  );
}

export default CompanyAvatar;
