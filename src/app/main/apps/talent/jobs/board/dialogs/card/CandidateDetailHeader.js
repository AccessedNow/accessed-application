import FuseAnimate from '@fuse/core/FuseAnimate';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import { useSelector } from 'react-redux';



function CandidateDetailHeader(props) {
  const selectedItem =props.selectedItem;

  if (!selectedItem) {
    return null;
  }

  return (
    <div className="flex flex-col justify-between h-full w-full">


      <AppBar position="static" elevation={1}>
        <div className="toolbar flex align-center justify-end">
          <FuseAnimate animation="transition.expandIn" delay={200}>
            <IconButton>
              <Icon  className="text-white">delete</Icon>
            </IconButton>
          </FuseAnimate>
          <FuseAnimate animation="transition.expandIn" delay={200}>
            <IconButton>
              <Icon className="text-white">cloud_download</Icon>
            </IconButton>
          </FuseAnimate>
          <IconButton>
            <Icon className="text-white">more_vert</Icon>
          </IconButton>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex  items-center justify-center pb-24">
            <Button variant="outlined" className="m-10 rounded-full h-44 w-44 " style={{minWidth:'44px'}}>
              <Icon fontSize="small" className="text-white">
                call
						</Icon>
            </Button>
            <div className="relative">
              <div className="absolute right-0 bottom-0 -m-0 z-10">
                <Icon className="block text-16 text-green bg-white rounded-full">check_circle</Icon>
              </div>

              <Avatar className="w-96 h-96" alt="contact avatar" src={selectedItem.applicant.avatar} />
            </div>
            <Button variant="outlined" className="m-10 rounded-full  h-44 w-44" style={{minWidth:'44px'}}>
              <Icon  fontSize="small" className="text-white">
                email
						</Icon>
            </Button>
          </div>
          <Typography variant="h6" color="inherit" className="pt-8">
            {selectedItem.applicant.firstName} {selectedItem.applicant.lastName}
          </Typography>
          <Typography variant="body1" color="inherit" className="pt-8">
            {selectedItem.applicant.position}
          </Typography>

        </div>
      </AppBar>
    </div>
  );
}

export default CandidateDetailHeader;
