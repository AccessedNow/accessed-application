import React from 'react';
import { useTheme } from '@mui/material/styles';
import FusePageSimple from '@fuse/core/FusePageSimple';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import HomeLanding from './home-landing/HomeLanding';
import HomeFeed from './home-feed/HomeFeed';


function Home() {
  const theme = useTheme();
  const user = useSelector(({ auth }) => auth.user);

  return (
    <>
      {user.data ?
        <HomeFeed />
        :
        <HomeLanding/>
      }
    </>
  );
}

export default Home;
