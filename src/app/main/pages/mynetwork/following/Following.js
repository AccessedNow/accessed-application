import * as React from 'react';
import qs from 'qs';
import { motion } from 'framer-motion';

import dateFormat from "dateformat";
import FusePageSimple from '@fuse/core/FusePageSimple';
import FuseLoading from '@fuse/core/FuseLoading';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import SearchIcon from '@mui/icons-material/Search';
import FilterIcon from '@mui/icons-material/FilterList';

import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import List from '@mui/material/List';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import withReducer from 'app/store/withReducer';
import { withRouter } from 'react-router-dom';
import reducer from "./store";
import {setSearchText, setSearchType, getFollowings} from "./store/followingsSlice";

import RecommendationTab from "./tabs/RecommendationTab";
import FollowingsTab from "./tabs/FollowingsTab";


const container = {
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const filterOptions = [
  {name: 'All', value: ''},
  {name: 'Connections', value: 'PERSON'},
  {name: 'Companies', value: 'COMPANY'},
  {name: 'Pages', value: 'PAGE'},

];

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    minHeight: 0,
    height: 0,
  },
  '& .FusePageSimple-contentWrapper': {
    padding: 0,
    paddingBottom: 80,
    [theme.breakpoints.up('md')]: {
      padding: 16
    },
  },
  '& .FusePageSimple-content': {
    minHeight: '100%',
  },
  '& .FusePageSimple-sidebar': {
    border: 0,
    width: 288,
    marginTop: 16
  },
  '& .search': {
    '& fieldset': {
      borderWidth: 0
    }
  }
}));

function Following(props) {
  const pageLayout = useRef(null);
  const dispatch = useDispatch();
  const searchType = useSelector(({ followingPage }) => followingPage.following.searchType);

  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const params = qs.parse(props.location.search, { ignoreQueryPrefix: true });

  function handleTabChange(event, value) {
    setSelectedTab(value);
  }

  const handleFilter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterItem = (option) => {
    dispatch(setSearchType(option.value));
    dispatch(getFollowings());
    setAnchorEl(null);
  };

  const handleSearch = (ev) => {
    dispatch(setSearchText(ev.target.value));
    dispatch(getFollowings());
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // if (!connections) {
  //   return <FuseLoading />;
  // }

  return (
    <Root
      content={
        <div>
          <Paper variant="outlined" className="rounded-6 mb-20">
            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              indicatorColor="primary"
              textColor="inherit"
              variant="scrollable"
              scrollButtons={false}
              className="w-full px-24 -mx-4 min-h-40"
              classes={{ indicator: 'flex justify-center bg-transparent w-full h-full' }}
              TabIndicatorProps={{
                children: (
                  <Box
                    className="w-full h-full"
                  />
                ),
              }}
            >
              <Tab
                className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12 "
                disableRipple
                label="Recommendations"
              />
              <Tab
                className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12 "
                disableRipple
                label="Followings"
              />
              <Tab
                className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12 "
                disableRipple
                label="Followers"
              />
            </Tabs>
            {selectedTab == 1 &&
              <div className="flex flex-row justify-between w-full border-t-1">
                <TextField
                  hiddenLabel
                  placeholder="Search"
                  className="search w-full bg-white"
                  InputProps={{
                    startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                  }}
                  onChange={handleSearch}
                />
                {/*<Input*/}
                  {/*hiddenLabel*/}
                  {/*variant="filled"*/}
                  {/*id="input-with-icon-adornment"*/}
                  {/*className="w-full px-20"*/}
                  {/*startAdornment={*/}
                    {/*<InputAdornment position="start">*/}
                      {/*<AccountCircle />*/}
                    {/*</InputAdornment>*/}
                  {/*}*/}
                {/*/>*/}
                <IconButton
                  id="basic-button"
                  aria-controls="basic-menu"
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleFilter}
                >
                  <FilterIcon />
                </IconButton>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  {filterOptions.map((option, index) => (
                    <MenuItem
                      key={option.value}
                      selected={option.value === searchType}
                      onClick={(event) => handleFilterItem(option)}
                    >
                      {option.name}
                    </MenuItem>
                  ))}
                </Menu>
              </div>

            }
          </Paper>
          {selectedTab === 0 && <RecommendationTab />}
          {selectedTab === 1 && <FollowingsTab />}
          {selectedTab === 2 && <div />}
        </div>
      }
      sidebarInner
      ref={pageLayout}

    />
  );
}

export default withReducer('followingPage', reducer)(withRouter(Following));
