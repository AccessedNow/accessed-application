import FusePageSimple from '@fuse/core/FusePageSimple';
import FuseLoading from '@fuse/core/FuseLoading';

import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import withReducer from 'app/store/withReducer';
import { withRouter } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import SidebarContent from './SidebarContent';
import ProfileItem from '../../components/ProfileItem';
import PartyCardItem from '../../components/PartyCardItem';

import reducer from "./store";

import {getRecommendations} from "./store/recommendationsSlice";

const container = {
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

const Root = styled(FusePageSimple)(({ theme }) => ({

  '& .FusePageSimple-header': {
    background: 'none',
    height: 0,
    minHeight: 0,
    [theme.breakpoints.down('lg')]: {
      height: 0,
      minHeight: 0,
    },
  },

  '& .FusePageSimple-wrapper': {
    background: 'transparent',
  },

  '& .FusePageSimple-content': {
    width: '100%',
    maxWidth: 1120,
    margin: 'auto',
  },
  '& .FusePageSimple-leftSidebar': {
    borderRight: 0
  }

}));



function MyNetwork() {
  const dispatch = useDispatch();
  const routeParams = useParams();
  const recommendations = useSelector(({ myNetwork }) => myNetwork.recommendations);

  useEffect(() => {
    dispatch(getRecommendations(routeParams));

  }, [dispatch, routeParams]);

  if(!recommendations.data){
    return <FuseLoading />
  }

  return (
    <Root
      header={<></>}
      content={
        <div>
          <div className="m-16">
            {recommendations.data.map((recommendation) => (
              <div>
                <div className="flex flex-row items-center justify-between p-16">
                  <Typography variant="h6" fontWeight={500}>
                    {recommendation.name}
                  </Typography>
                  <Link href="">
                    See All
                  </Link>
                </div>
                <div className="w-full flex flex-wrap">
                  {recommendation.list.map((item) => (
                    <motion.div
                      variants={item}
                      className="w-full pb-24 sm:w-1/2 lg:w-1/3 sm:p-8"
                    >
                      {item.partyType === 'PERSON'?
                      < ProfileItem variant="" profile={item}/>
                        :
                        <PartyCardItem profile={item} />
                      }
                    </motion.div>
                  ))}

                </div>
              </div>
            ))}


          </div>
        </div>
        }
      leftSidebarContent={<SidebarContent />}
    />
  );
}

export default withReducer('myNetwork', reducer)(withRouter(MyNetwork));
