import FuseAnimate from '@fuse/core/FuseAnimate';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import React, { useRef } from 'react';
import Fab from '@material-ui/core/Fab';
import Hidden from '@material-ui/core/Hidden';
// import Breadcrumb from '../../file-manager//Breadcrumb';

import { useSelector } from 'react-redux';



function CandidateDetailHeader(props) {
  let selectedItem = useSelector(({ candidatesApp }) => candidatesApp.candidate);
  console.log(selectedItem);
  const pageLayout = props.pageLayout;
  if (!selectedItem) {
    return null;
  }
  else {
    selectedItem = selectedItem.data;
  }
  return (
    <div className="flex flex-col flex-1 p-8 sm:p-12 relative">
      <div className="flex items-center justify-between">
        <Hidden lgUp>
          <IconButton
            onClick={ev => {
              props.pageLayout.current.toggleLeftSidebar();
            }}
            aria-label="open left sidebar"
          >
            <Icon>menu</Icon>
          </IconButton>
        </Hidden>

        <FuseAnimate animation="transition.expandIn" delay={200}>
          <IconButton aria-label="search">
            <Icon>search</Icon>
          </IconButton>
        </FuseAnimate>
        <Hidden lgUp>
          <IconButton
            onClick={ev => {
              props.pageLayout.current.toggleRightSidebar();
            }}
            aria-label="open right sidebar"
          >
            <Icon>more_vert</Icon>
          </IconButton>
        </Hidden>

      </div>
      <div className="flex flex-1 items-end">
        <FuseAnimate animation="transition.expandIn" delay={600}>
          <Fab
            color="secondary"
            aria-label="add"
            className="absolute bottom-0 ltr:left-0 rtl:right-0 mx-16 -mb-28 z-999"
          >
            <Icon>add</Icon>
          </Fab>
        </FuseAnimate>
        <FuseAnimate delay={200}>
          <div>
            {/* {selectedItem && (
              <Breadcrumb
                selected={selectedItem}
                className="flex flex-1 ltr:pl-72 rtl:pr-72 pb-12 text-16 sm:text-24"
              />
            )} */}
          </div>
        </FuseAnimate>
      </div>
    </div>
  );
}

export default CandidateDetailHeader;
