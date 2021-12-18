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
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {getFollowings} from "../store/followingsSlice";
import FollowingCardItem from "../../../../components/FollowingCardItem";

function FollowingsTabBak() {
  const dispatch = useDispatch();
  const following = useSelector(({ followingPage }) => followingPage.following);

  useEffect(() => {
    dispatch(getFollowings());
  }, []);

  if (!following) {
    return null;
  }

  const { data } = following;

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

  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <div className="md:flex max-w-2xl">
        <div className="w-full p-20 ">

          {data && data.length ?
            <div className="w-full flex flex-wrap">
              <motion.div variants={container} initial="hidden" animate="show">
                {data.map((user) => (
                  <motion.div
                    variants={item}
                    key={user.id}
                    className="w-full pb-24 sm:w-1/2 lg:w-1/4 sm:p-8"
                  >
                    <FollowingCardItem user={user} className="w-full"/>
                    <Divider />
                  </motion.div>
                ))}
              </motion.div>
            </div>
            :
            <div>No Connections</div>
          }
        </div>

      </div>
    </motion.div>
  );
}

export default FollowingsTabBak;
