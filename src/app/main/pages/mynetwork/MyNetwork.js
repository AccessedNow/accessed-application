import FusePageSimple from '@fuse/core/FusePageSimple';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import SidebarContent from './SidebarContent';

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
  return (
    <Root
      header={<></>}
      content={
        <Paper variant="outlined" m={2} className="m-16 p-16 rounded-6">
          <div className="flex flex-row justify-between">
            <Typography variant="body" gutterBottom fontWeight={500}>
              Recommended pages for you
            </Typography>
            <Link href="">
              See All
            </Link>
            <div className="w-full flex flex-row">
              <div className={clsx('flex flex-col w-1/4 items-center justify-center rounded-0 lg:rounded-6 lg:shadow')}>
                <div className="cover w-full h-96"></div>
                <Avatar className="user-avatar w-96 h-96 -mt-48 items-center justify-start" src="assets/images/avatars/Abbott.jpg"/>
                <div className="px-16 pb-20 text-center">
                  <Typography fontWeight={600} className="text-12 md:text-16">
                    Victor Doan
                  </Typography>
                  <Typography variant="subtitle2" color={'text.secondary'} className="mb-10">
                    @victordoan
                  </Typography>
                </div>
              </div>
            </div>
          </div>

        </Paper>
      }
      leftSidebarContent={<SidebarContent />}
    />
  );
}

export default MyNetwork;
