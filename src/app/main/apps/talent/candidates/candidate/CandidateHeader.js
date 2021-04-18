import FuseAnimate from '@fuse/core/FuseAnimate';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import React, { useRef } from 'react';
import Fab from '@material-ui/core/Fab';
import Rating from '@material-ui/lab/Rating';
import {dateDifference} from '../../../../../utils/helper'
// import Breadcrumb from '../../file-manager//Breadcrumb';

import { useSelector } from 'react-redux';



function CandidateHeader(props) {
  const selectedItem = useSelector(({ candidatesApp }) => candidatesApp.candidate.data);
  console.log(selectedItem);
  const pageLayout = props.pageLayout;
  if (!selectedItem) {
    return null;
  }

  return (
    <div className="flex flex-col justify-between h-full">


      <AppBar position="static" elevation={0} color="default" className="bg-transparent">


        <div className="flex flex-col">
          <div className="flex p-56">
            <div className="flex ">
              <Avatar className="w-72 h-72" src={selectedItem.applicant.avatar} alt={selectedItem.applicant.firstName}>

              </Avatar>
              <div className="pl-24 mt-10">
                <Typography>{selectedItem.applicant.firstName} {selectedItem.applicant.lastName}</Typography>
                <div className="flex items-center">
                  <Rating
                    name="simple-controlled"
                    value={selectedItem.rating}
                  />
                  <span className="ml-10"><b>{selectedItem.rating}</b></span>
                  <span className="ml-10" color="primary">{selectedItem.applicant.reviews ?selectedItem.applicant.reviews.length:0} Reviews</span>
                </div>
                <span>Applied {dateDifference(selectedItem.appliedOn)} days ago {selectedItem.sources && "via "+selectedItem.sources[0].type}</span>
              </div>
            </div>
          </div>


        </div>
      </AppBar>
    </div>
  );
}

export default CandidateHeader;
