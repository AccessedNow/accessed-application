import clsx from 'clsx';
import { styled } from '@mui/material/styles';
import FuseLoading from '@fuse/core/FuseLoading';

import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';

import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getFollowings, resetData} from "../store/followingsSlice";
import ProfileCardItem from "../../../../components/ProfileCardItem";



const StyledContainer = styled('div')(({ theme }) => ({
  '& .row': {
    '& > div': {
      borderRightWidth: 1
    },
    '& > :last-child': {
      borderRightWidth: 0,
    },
  }
}));


function listToMatrix(list, elementsPerSubArray) {
  var matrix = [], i, k;

  for (i = 0, k = -1; i < list.length; i++) {
    if (i % elementsPerSubArray === 0) {
      k++;
      matrix[k] = [];
    }

    matrix[k].push(list[i]);
  }

  return matrix;
}

function FollowingsTab() {
  const dispatch = useDispatch();
  const following = useSelector(({ followingPage }) => followingPage.following);
  const noOfColumns = 5;
  const data = listToMatrix(following.data, noOfColumns);

  useEffect(() => {
    dispatch(resetData());
    dispatch(getFollowings());
  }, []);



  const container = {
    show: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };



  if (following.loading) {
    return <FuseLoading />;
  }

  return (
    <StyledContainer>
      <motion.div variants={container} initial="hidden" animate="show">
        <div className="md:flex max-w-2xl">
          <div className="w-full ">
            {data && data.length ?
              <div className="w-full flex flex-col">
                {data.map((row) => (
                  <Paper variant="outlined" className="flex flex-row mb-20 rounded-6 row">
                    {row.map((profile) => (
                      <motion.div
                        variants={item}
                        key={profile.id}
                        className={clsx('w-full pb-24 sm:w-1/2 sm:p-0', `${'lg:w-1/' + noOfColumns}`)}
                      >
                        <ProfileCardItem profile={profile} className="w-full"/>
                      </motion.div>
                    ))}
                  </Paper>
                ))}
              </div>
              :
              <div>No Connections</div>
            }
          </div>

        </div>
      </motion.div>
    </StyledContainer>
  );
}

export default FollowingsTab;
